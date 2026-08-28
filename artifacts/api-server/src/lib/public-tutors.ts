import { URL } from "node:url";

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
  approvedSlugs: Set<string>;
  approvedIds: Set<string>;
  approvalField: string;
  minRate: number;
  maxRate: number;
  requiresReview: boolean;
}

const DEFAULT_APPROVAL_FIELD = "public_discovery_approved";
const DEFAULT_MIN_RATE = 15;
const DEFAULT_MAX_RATE = 80;
const APPROVED_SOURCE_HOST = "edubridgegloballearning.com";
const PRODUCTION_SOURCE_PATH = "/api/1.1/obj/publictutorcard";
const AVAILABLE_SOURCE_PATH = "/version-test/api/1.1/obj/publictutorcard";
const DEFAULT_AVAILABLE_SOURCE_URL =
  `https://${APPROVED_SOURCE_HOST}${AVAILABLE_SOURCE_PATH}`;

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

function truthyApproval(value: unknown) {
  return value === true || (typeof value === "string" && value.toLowerCase() === "true");
}

function csvSet(value: string | undefined) {
  return new Set(
    (value ?? "")
      .split(",")
      .map((item) => item.trim().toLowerCase())
      .filter(Boolean),
  );
}

function boundedNumber(value: string | undefined, fallback: number) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback;
}

function isTutorRecord(value: unknown): value is BubblePublicTutorRecord {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

export function getPublicTutorConfig(
  env: NodeJS.ProcessEnv = process.env,
): PublicTutorConfig | null {
  const sourceUrl =
    env["BUBBLE_PUBLIC_TUTORS_SOURCE_URL"]?.trim() ||
    DEFAULT_AVAILABLE_SOURCE_URL;

  let parsedUrl: URL;
  try {
    parsedUrl = new URL(sourceUrl);
  } catch {
    return null;
  }

  // Only KlaraLearn's exact Bubble tutor endpoints may be proxied. The
  // version-test feed is treated as available inventory, never reviewed.
  if (
    parsedUrl.protocol !== "https:" ||
    parsedUrl.hostname.toLowerCase() !== APPROVED_SOURCE_HOST ||
    ![PRODUCTION_SOURCE_PATH, AVAILABLE_SOURCE_PATH].includes(parsedUrl.pathname)
  ) {
    return null;
  }

  return {
    sourceUrl: parsedUrl.toString(),
    approvedSlugs: csvSet(env["PUBLIC_TUTOR_SLUGS"]),
    approvedIds: csvSet(env["PUBLIC_TUTOR_IDS"]),
    approvalField:
      env["PUBLIC_TUTOR_APPROVAL_FIELD"]?.trim() || DEFAULT_APPROVAL_FIELD,
    minRate: boundedNumber(env["PUBLIC_TUTOR_MIN_RATE"], DEFAULT_MIN_RATE),
    maxRate: boundedNumber(env["PUBLIC_TUTOR_MAX_RATE"], DEFAULT_MAX_RATE),
    requiresReview: parsedUrl.pathname === PRODUCTION_SOURCE_PATH,
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
  const qualifications = list(
    record.qualifications ?? record.qualification_summary,
  );
  const rate = numeric(record.hourly_rate);
  const approval = record[config.approvalField as keyof BubblePublicTutorRecord];

  const hasExplicitInventoryApproval = config.requiresReview
    ? truthyApproval(approval) &&
      (config.approvedSlugs.size === 0 && config.approvedIds.size === 0
        ? true
        : config.approvedSlugs.has(slug) || config.approvedIds.has(id))
    : true;
  const hasRequiredReviewData =
    !config.requiresReview ||
    (record.safeguarding_verified === true && qualifications.length > 0);

  return (
    hasExplicitInventoryApproval &&
    hasRequiredReviewData &&
    name.length >= 2 &&
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