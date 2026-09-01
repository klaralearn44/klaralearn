export interface BubblePublicTutorRecord {
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
}

export interface PublicTutorConfig {
  sourceUrl: string;
  minRate: number;
  maxRate: number;
}

type RuntimeEnvironment = Record<string, string | undefined>;

const DEFAULT_MIN_RATE = 0;
const DEFAULT_MAX_RATE = 500;
const APPROVED_SOURCE_HOST = "app.klaralearn.com";
const PRODUCTION_SOURCE_PATH = "/api/1.1/obj/publictutorcard";
const DEFAULT_PRODUCTION_SOURCE_URL =
  `https://${APPROVED_SOURCE_HOST}${PRODUCTION_SOURCE_PATH}`;

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

function runtimeEnvironment(): RuntimeEnvironment {
  const runtime = globalThis as typeof globalThis & {
    process?: { env?: RuntimeEnvironment };
  };

  return runtime.process?.env ?? {};
}

export function getPublicTutorConfig(
  env: RuntimeEnvironment = runtimeEnvironment(),
): PublicTutorConfig | null {
  const sourceUrl =
    env["BUBBLE_PUBLIC_TUTORS_SOURCE_URL"]?.trim() ||
    DEFAULT_PRODUCTION_SOURCE_URL;

  let parsedUrl: URL;
  try {
    parsedUrl = new URL(sourceUrl);
  } catch {
    return null;
  }

  // Only KlaraLearn's exact production public-tutor endpoint may be proxied.
  if (
    parsedUrl.protocol !== "https:" ||
    parsedUrl.hostname.toLowerCase() !== APPROVED_SOURCE_HOST ||
    parsedUrl.pathname !== PRODUCTION_SOURCE_PATH
  ) {
    return null;
  }

  return {
    sourceUrl: parsedUrl.toString(),
    minRate: boundedNumber(env["PUBLIC_TUTOR_MIN_RATE"], DEFAULT_MIN_RATE),
    maxRate: boundedNumber(env["PUBLIC_TUTOR_MAX_RATE"], DEFAULT_MAX_RATE),
  };
}

export function isPublishableTutorRecord(
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

export function toPublicTutorRecord(record: BubblePublicTutorRecord) {
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

export function sourceRecordsFromPayload(payload: unknown) {
  if (!payload || typeof payload !== "object") return null;
  const response = (payload as { response?: unknown }).response;
  if (!response || typeof response !== "object") return null;
  const results = (response as { results?: unknown }).results;
  return Array.isArray(results)
    ? results.filter(isTutorRecord)
    : null;
}