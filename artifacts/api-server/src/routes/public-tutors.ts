import { Router, type IRouter } from "express";
import {
  getPublicTutorConfig,
  isPublishableTutorRecord,
  sourceRecordsFromPayload,
  toPublicTutorRecord,
  type BubblePublicTutorRecord,
} from "../lib/public-tutors";
import { logger } from "../lib/logger";

const router: IRouter = Router();

router.get("/public-tutors", async (_req, res) => {
  const config = getPublicTutorConfig();

  if (!config) {
    res.status(503).json({
      error: "Tutor listings are not configured with an approved production source.",
    });
    return;
  }

  try {
    const upstream = await fetch(config.sourceUrl, {
      method: "GET",
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(10_000),
    });

    if (!upstream.ok) {
      logger.warn(
        { statusCode: upstream.status },
        "Tutor source returned a non-success response",
      );
      res.status(502).json({ error: "Tutor listings are temporarily unavailable." });
      return;
    }

    const payload: unknown = await upstream.json();
    const records = sourceRecordsFromPayload(payload);

    if (!records) {
      res.status(502).json({ error: "Tutor source returned an unexpected response." });
      return;
    }

    const approvedRecords = records
      .filter((record) => isPublishableTutorRecord(record, config))
      .map(toPublicTutorRecord);

    if (approvedRecords.length === 0) {
      res.status(503).json({
        error: "No suitable tutor profiles are currently available.",
      });
      return;
    }

    // A profile must disappear as soon as its approval or safeguarding status
    // is withdrawn. Never let a browser or CDN retain a previous directory.
    res.setHeader("Cache-Control", "no-store");
    res.json({ response: { results: approvedRecords } });
  } catch (error) {
    logger.warn({ err: error }, "Tutor source could not be reached");
    res.status(502).json({ error: "Tutor listings are temporarily unavailable." });
  }
});

export default router;