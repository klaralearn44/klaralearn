/// <reference lib="dom" />

type VercelRequest = {
  method?: string;
};

type VercelResponse = {
  setHeader(name: string, value: string): void;
  status(code: number): VercelResponse;
  json(payload: unknown): void;
  end(): void;
};

type RuntimeEnvironment = Record<string, string | undefined>;

type BubblePublicTutorRecord = {
  _id?: unknown;
  fullname?: unknown;
  headline?: unknown;
  bio?: unknown;
  country?: unknown;
  subjects?: unknown;
  curricula?: unknown;
  hourly_rate?: unknown;
  average_rating?: unknown;
  total_reviews?: unknown;
  profile_photo?: unknown;
  tutoring_experience?: unknown;
  languages?: unknown;
  Slug?: unknown;
  "Modified Date"?: unknown;
  public_discovery_approved?: unknown;
  safeguarding_verified?: unknown;
  qualifications?: unknown;
  qualification_summary?: unknown;
};

type PublicTutorConfig = {
  sourceUrl: string;
  minRate: number;
  maxRate: number;
};

const APPROVED_SOURCE_HOST = "app.klaralearn.com";
const PRODUCTION_SOURCE_PATH = "/api/1.1/obj/publictutorcard";
const DEFAULT_PRODUCTION_SOURCE_URL =
  `https://${APPROVED_SOURCE_HOST}${PRODUCTION_SOURCE_PATH}`;

function runtimeEnvironment(): RuntimeEnvironment {
  const runtime = globalThis as typeof globalThis & {
    process?: { env?: RuntimeEnvironment };
  };

  return runtime.process?.env ?? {};
}

function text(value: unknown) {
  return typeof value === "string" ? value.replace(/\s+/g, " ").trim() : "";
}

function list(value: unknown) {
  if (Array.isArray(value)) {
    return value.map(text).filter(Boolean);
  }

  const single = text(value);
  return single ? [single] : [];
}

function numeric(value: unknown) {
  const parsed = typeof value === "number" ? value : Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function boundedNumber(value: string | undefined, fallback: number) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback;
}

function isTutorRecord(value: unknown): value is BubblePublicTutorRecord {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function getPublicTutorConfig(): PublicTutorConfig | null {
  const env = runtimeEnvironment();
  const sourceUrl =
    env.BUBBLE_PUBLIC_TUTORS_SOURCE_URL?.trim() ||
    DEFAULT_PRODUCTION_SOURCE_URL;

  let parsedUrl: URL;
  try {
    parsedUrl = new URL(sourceUrl);
  } catch {
    return null;
  }

  if (
    parsedUrl.protocol !== "https:" ||
    parsedUrl.hostname.toLowerCase() !== APPROVED_SOURCE_HOST ||
    parsedUrl.pathname !== PRODUCTION_SOURCE_PATH
  ) {
    return null;
  }

  return {
    sourceUrl: parsedUrl.toString(),
    minRate: boundedNumber(env.PUBLIC_TUTOR_MIN_RATE, 0),
    maxRate: boundedNumber(env.PUBLIC_TUTOR_MAX_RATE, 500),
  };
}

function isPublishableTutorRecord(
  record: BubblePublicTutorRecord,
  config: PublicTutorConfig,
) {
  const name = text(record.fullname);
  const slug = text(record.Slug).toLowerCase();
  const id = text(record._id).toLowerCase();
  const subjects = list(record.subjects);
  const rate = numeric(record.hourly_rate);

  return (
    name.length >= 2 &&
    Boolean(id) &&
    Boolean(slug) &&
    subjects.length > 0 &&
    text(record.headline).length >= 8 &&
    text(record.bio).length >= 40 &&
    text(record.tutoring_experience).length >= 20 &&
    rate !== null &&
    rate >= config.minRate &&
    rate <= config.maxRate
  );
}

function toPublicTutorRecord(record: BubblePublicTutorRecord) {
  return {
    _id: text(record._id),
    fullname: text(record.fullname),
    headline: text(record.headline),
    bio: text(record.bio),
    country: text(record.country) || undefined,
    subjects: list(record.subjects),
    curricula: list(record.curricula),
    hourly_rate: record.hourly_rate,
    average_rating: record.average_rating,
    total_reviews: record.total_reviews,
    profile_photo: text(record.profile_photo) || undefined,
    tutoring_experience: text(record.tutoring_experience),
    languages: record.languages,
    Slug: text(record.Slug),
    "Modified Date": text(record["Modified Date"]) || undefined,
    qualifications: list(record.qualifications ?? record.qualification_summary),
  };
}

function sourceRecordsFromPayload(payload: unknown) {
  if (!payload || typeof payload !== "object") return null;
  const response = (payload as { response?: unknown }).response;
  if (!response || typeof response !== "object") return null;
  const results = (response as { results?: unknown }).results;
  return Array.isArray(results) ? results.filter(isTutorRecord) : null;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    res.status(405).json({ error: "Method not allowed." });
    return;
  }

  const config = getPublicTutorConfig();

  // Only KlaraLearn's exact production public-tutor feed may be used.
  if (!config) {
    res.status(503).json({
      error: "Tutor listings are not configured with an approved Bubble source.",
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

    const availableRecords = records
      .filter((record) => isPublishableTutorRecord(record, config))
      .map(toPublicTutorRecord);

    if (availableRecords.length === 0) {
      res.status(503).json({
        error: "No suitable tutor profiles are currently available.",
      });
      return;
    }

    // Availability changes must be visible immediately.
    res.setHeader("Cache-Control", "no-store");
    res.json({ response: { results: availableRecords } });
  } catch (error) {
    console.warn("Tutor source could not be reached", error);
    res.status(502).json({
      error: "Tutor listings are temporarily unavailable.",
    });
  }
}