import {
  getPublicTutorConfig,
  isPublishableTutorRecord,
  sourceRecordsFromPayload,
  toPublicTutorRecord,
} from "../artifacts/api-server/src/lib/public-tutors";

type VercelRequest = {
  method?: string;
};

type VercelResponse = {
  setHeader(name: string, value: string): void;
  status(code: number): VercelResponse;
  json(payload: unknown): void;
  end(): void;
};

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    res.status(405).json({ error: "Method not allowed." });
    return;
  }

  // The production function must never silently fall back to the Bubble
  // version-test feed. Configure the exact production public-tutor endpoint
  // in Vercel as a server-only environment variable.
  if (!process.env.BUBBLE_PUBLIC_TUTORS_SOURCE_URL?.trim()) {
    res.status(503).json({
      error: "Tutor listings are not configured with an approved production source.",
    });
    return;
  }

  const config = getPublicTutorConfig();

  if (!config || !config.requiresReview) {
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
      console.warn("Tutor source returned a non-success response", {
        statusCode: upstream.status,
      });
      res.status(502).json({
        error: "Tutor listings are temporarily unavailable.",
      });
      return;
    }

    const payload: unknown = await upstream.json();
    const records = sourceRecordsFromPayload(payload);

    if (!records) {
      res.status(502).json({
        error: "Tutor source returned an unexpected response.",
      });
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

    // Tutor approval changes must be visible immediately; do not let Vercel
    // or an intermediary CDN retain a withdrawn profile.
    res.setHeader("Cache-Control", "no-store");
    res.json({ response: { results: approvedRecords } });
  } catch (error) {
    console.warn("Tutor source could not be reached", error);
    res.status(502).json({
      error: "Tutor listings are temporarily unavailable.",
    });
  }
}