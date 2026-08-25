import type { Tutor } from '@/data/tutors';

export const PUBLIC_TUTORS_API_URL =
  '/api/public-tutors';

export interface BubbleTutorRecord {
  _id?: string;
  fullname?: string;
  headline?: string;
  bio?: string;
  country?: string;
  subjects?: string[] | null;
  curricula?: string[] | null;
  hourly_rate?: number | string | null;
  average_rating?: number | string | null;
  total_reviews?: number | string | null;
  profile_photo?: string;
  tutoring_experience?: string;
  languages?: string | string[] | null;
  Slug?: string;
  'Modified Date'?: string;
  public_discovery_approved?: boolean;
  safeguarding_verified?: boolean;
  qualifications?: string | string[] | null;
  qualification_summary?: string | string[] | null;
}

interface BubbleTutorResponse {
  response?: {
    results?: BubbleTutorRecord[];
  };
}

const countryFlags: Record<string, string> = {
  nigeria: '🇳🇬',
  'united kingdom': '🇬🇧',
  uk: '🇬🇧',
  india: '🇮🇳',
  philippines: '🇵🇭',
  pakistan: '🇵🇰',
  ghana: '🇬🇭',
  kenya: '🇰🇪',
  'south africa': '🇿🇦',
};

function cleanText(value?: string | null) {
  return value?.replace(/\s+/g, ' ').trim() || '';
}

function toNumber(value?: number | string | null) {
  const parsed = typeof value === 'number' ? value : Number(value);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
}

function normalisePhotoUrl(value?: string) {
  const url = cleanText(value);
  if (!url) return undefined;
  return url.startsWith('//') ? `https:${url}` : url;
}

function normaliseLanguages(value?: string | string[] | null) {
  const values = Array.isArray(value) ? value : value?.split(',');
  return values?.map(cleanText).filter(Boolean) ?? [];
}

function normaliseQualifications(value?: string | string[] | null) {
  const values = Array.isArray(value) ? value : value?.split(',');
  return values?.map(cleanText).filter(Boolean) ?? [];
}

export function isPublishableBubbleTutorRecord(record: BubbleTutorRecord) {
  const rate = toNumber(record.hourly_rate);
  const qualifications = normaliseQualifications(
    record.qualifications ?? record.qualification_summary,
  );

  return (
    record.public_discovery_approved === true &&
    record.safeguarding_verified === true &&
    Boolean(cleanText(record._id)) &&
    Boolean(cleanText(record.Slug)) &&
    cleanText(record.fullname).length >= 2 &&
    cleanText(record.headline).length > 0 &&
    cleanText(record.bio).length > 0 &&
    cleanText(record.tutoring_experience).length > 0 &&
    (record.subjects ?? []).some((subject) => Boolean(cleanText(subject))) &&
    qualifications.length > 0 &&
    rate >= 15 &&
    rate <= 80
  );
}

function initialsFor(name: string) {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('');

  return initials || 'KT';
}

function tutorTags(record: BubbleTutorRecord) {
  const tags = new Set<string>();
  const subjects = (record.subjects ?? []).map(cleanText).filter(Boolean);
  const curricula = (record.curricula ?? []).map(cleanText).filter(Boolean);
  const searchable = [
    subjects.join(' '),
    curricula.join(' '),
    record.headline ?? '',
    record.bio ?? '',
    record.tutoring_experience ?? '',
  ].join(' ').toLowerCase();

  subjects.forEach((subject) => {
    const lower = subject.toLowerCase();
    if (lower === 'math' || lower === 'maths' || lower === 'mathematics') {
      tags.add('Maths');
    } else {
      tags.add(subject);
    }
  });

  curricula.forEach((curriculum) => {
    const lower = curriculum.toLowerCase();
    if (lower.includes('eleven plus') || lower.includes('11 plus')) {
      tags.add('11 Plus');
    } else if (lower.includes('a level')) {
      tags.add('A-Level');
    } else if (lower.includes('uk national')) {
      tags.add('UK Curriculum');
    } else {
      tags.add(curriculum);
    }
  });

  if (searchable.includes('eleven plus') || searchable.includes('11 plus')) {
    tags.add('11 Plus');
  }

  if (/\bmath(?:s|ematics)?\b/.test(searchable)) {
    tags.add('Maths');
  }

  if (searchable.includes('gcse')) {
    tags.add('GCSE');
  }

  if (searchable.includes('a-level') || searchable.includes('a level')) {
    tags.add('A-Level');
  }

  if (tags.has('Maths') && tags.has('GCSE')) {
    tags.add('GCSE Maths');
  }

  if (tags.has('Maths') && tags.has('11 Plus')) {
    tags.add('11 Plus Maths');
  }

  const orderedTags = Array.from(tags);
  const priorityTags = ['11 Plus', 'GCSE Maths', 'Maths', 'GCSE', 'A-Level'];
  const prioritisedTags = priorityTags.filter((tag) => orderedTags.includes(tag));
  const remainingTags = orderedTags.filter((tag) => !prioritisedTags.includes(tag));

  // Keep the complete taxonomy on the mapped tutor. TutorCard limits the
  // badges shown visually, while subject pages use these tags for filtering.
  return [...prioritisedTags, ...remainingTags];
}

export function mapBubbleTutor(record: BubbleTutorRecord, index: number): Tutor {
  const name = cleanText(record.fullname) || `KlaraLearn Tutor ${index + 1}`;
  const country = cleanText(record.country) || 'Global online';
  const tags = tutorTags(record);
  const slug = cleanText(record.Slug);
  const subject =
    (record.subjects ?? []).map(cleanText).filter(Boolean).join(' & ') ||
    cleanText(record.headline) ||
    tags.slice(0, 2).join(' & ') ||
    'Online tutor';

  return {
    id: cleanText(record._id) || `public-tutor-${index}`,
    name,
    flag: countryFlags[country.toLowerCase()] ?? '🌍',
    country,
    subject,
    rate: toNumber(record.hourly_rate),
    rating: toNumber(record.average_rating),
    reviews: Math.floor(toNumber(record.total_reviews)),
    bio:
      cleanText(record.bio) ||
      cleanText(record.tutoring_experience) ||
      cleanText(record.headline) ||
      'Experienced online tutor supporting UK learners.',
    tags,
    initials: initialsFor(name),
    photoUrl: normalisePhotoUrl(record.profile_photo),
    headline: cleanText(record.headline) || undefined,
    experience: cleanText(record.tutoring_experience) || undefined,
    languages: normaliseLanguages(record.languages),
    qualifications: normaliseQualifications(
      record.qualifications ?? record.qualification_summary,
    ),
    safeguardingVerified: record.safeguarding_verified === true,
    profileUrl: slug
      ? `https://app.klaralearn.com/publictutorcard/${encodeURIComponent(slug)}`
      : undefined,
    updatedAt: cleanText(record['Modified Date']) || undefined,
  };
}

export async function fetchPublicTutors(signal?: AbortSignal): Promise<Tutor[]> {
  const response = await fetch(PUBLIC_TUTORS_API_URL, {
    method: 'GET',
    headers: { Accept: 'application/json' },
    signal,
  });

  if (!response.ok) {
    throw new Error(`Tutor listings could not be loaded (${response.status}).`);
  }

  const payload = (await response.json()) as BubbleTutorResponse;
  const records = payload.response?.results;

  if (!Array.isArray(records)) {
    throw new Error('Tutor listings returned an unexpected response.');
  }

  const approvedRecords = records.filter(isPublishableBubbleTutorRecord);

  if (approvedRecords.length === 0) {
    throw new Error('No approved tutor profiles are currently available.');
  }

  return approvedRecords
    .map(mapBubbleTutor)
    .filter((tutor) => Boolean(tutor.profileUrl));
}