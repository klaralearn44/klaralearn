import assert from 'node:assert/strict';
import test from 'node:test';
import {
  isPublishableBubbleTutorRecord,
  mapBubbleTutor,
  type BubbleTutorRecord,
} from './tutor-api';

function map(record: BubbleTutorRecord) {
  return mapBubbleTutor(record, 0);
}

test('maps a complete Bubble tutor record into the public tutor shape', () => {
  const tutor = map({
    _id: 'tutor-123',
    fullname: '  Amara Smith  ',
    country: 'Nigeria',
    subjects: ['Mathematics', 'English'],
    curricula: ['UK National Curriculum', 'GCSE'],
    hourly_rate: '22',
    average_rating: '4.9',
    total_reviews: '142',
    profile_photo: 'https://cdn.example.com/amara.jpg',
    headline: 'Patient maths and English tutor',
    bio: 'Helps UK learners build confidence.',
    tutoring_experience: 'Ten years of online tutoring.',
  });

  assert.deepEqual(
    {
      id: tutor.id,
      name: tutor.name,
      flag: tutor.flag,
      country: tutor.country,
      subject: tutor.subject,
      rate: tutor.rate,
      rating: tutor.rating,
      reviews: tutor.reviews,
      photoUrl: tutor.photoUrl,
      headline: tutor.headline,
      experience: tutor.experience,
    },
    {
      id: 'tutor-123',
      name: 'Amara Smith',
      flag: '🇳🇬',
      country: 'Nigeria',
      subject: 'Mathematics & English',
      rate: 22,
      rating: 4.9,
      reviews: 142,
      photoUrl: 'https://cdn.example.com/amara.jpg',
      headline: 'Patient maths and English tutor',
      experience: 'Ten years of online tutoring.',
    },
  );
  assert.ok(tutor.tags.includes('Maths'));
  assert.ok(tutor.tags.includes('GCSE Maths'));
  assert.ok(tutor.tags.includes('UK Curriculum'));
  assert.equal(tutor.initials, 'AS');
});

test('derives Maths for a record whose only subject signal is its headline', () => {
  const tutor = map({
    _id: 'headline-maths',
    fullname: 'Maya Patel',
    headline: 'Experienced mathematics tutor for primary learners',
  });

  assert.equal(tutor.subject, 'Experienced mathematics tutor for primary learners');
  assert.ok(tutor.tags.includes('Maths'));
  assert.ok(tutor.tags.slice(0, 5).includes('Maths'));
});

test('maps every common 11 Plus curriculum spelling to the routing tag', () => {
  const tutor = map({
    fullname: 'Oliver Jones',
    subjects: ['English'],
    curricula: [
      'KS2',
      'GL Assessment',
      'CEM',
      'Grammar School Preparation',
      '11 Plus',
      'UK National Curriculum',
    ],
  });

  assert.ok(tutor.tags.includes('11 Plus'));
  assert.ok(tutor.tags.slice(0, 5).includes('11 Plus'));
});

test('keeps routing tags available even when a tutor has many visual tags', () => {
  const tutor = map({
    fullname: 'Aisha Khan',
    subjects: ['Chemistry', 'Physics', 'Biology', 'History', 'Geography', 'Maths'],
    curricula: ['KS3', 'GCSE', '11 Plus'],
  });

  // The card may show only five badges, but the full model is used by page
  // filters. Both relevant routes must still find this tutor.
  assert.ok(tutor.tags.length > 5);
  assert.ok(tutor.tags.includes('11 Plus'));
  assert.ok(tutor.tags.includes('Maths'));
  assert.ok(tutor.tags.includes('GCSE Maths'));
  assert.ok(tutor.tags.includes('Science'));
  assert.ok(tutor.tags.slice(0, 5).includes('11 Plus'));
  assert.ok(tutor.tags.slice(0, 5).includes('Maths'));
  assert.ok(tutor.tags.includes('11 Plus')); // 11 Plus page predicate
  assert.ok(tutor.tags.includes('Maths') || tutor.tags.includes('GCSE Maths')); // maths page predicate
});

test('handles absent optional fields without throwing or inventing optional values', () => {
  const tutor = map({ fullname: 'New Tutor' });

  assert.equal(tutor.name, 'New Tutor');
  assert.equal(tutor.country, 'Global online');
  assert.equal(tutor.subject, 'Online tutor');
  assert.equal(tutor.rate, 0);
  assert.equal(tutor.rating, 0);
  assert.equal(tutor.reviews, 0);
  assert.equal(tutor.photoUrl, undefined);
  assert.equal(tutor.headline, undefined);
  assert.equal(tutor.experience, undefined);
  assert.deepEqual(tutor.tags, []);
});

test('normalises protocol-relative profile photo URLs', () => {
  const tutor = map({
    fullname: 'Photo Tutor',
    profile_photo: '  //cdn.example.com/profile.png  ',
  });

  assert.equal(tutor.photoUrl, 'https://cdn.example.com/profile.png');
});

test('requires complete, credible availability data before a tutor is public', () => {
  const record: BubbleTutorRecord = {
    _id: 'available-tutor',
    fullname: 'Amara Smith',
    Slug: 'amara-smith',
    subjects: ['Mathematics'],
    hourly_rate: 22,
    headline: 'GCSE maths tutor',
    bio: 'Patient, structured support for GCSE learners who want to build lasting confidence.',
    tutoring_experience: 'Ten years of online maths tutoring.',
  };

  assert.equal(isPublishableBubbleTutorRecord(record), true);
  assert.equal(
    isPublishableBubbleTutorRecord({
      ...record,
      public_discovery_approved: false,
      safeguarding_verified: false,
    }),
    true,
  );
  assert.equal(
    isPublishableBubbleTutorRecord({ ...record, hourly_rate: 6 }),
    true,
  );
  assert.equal(
    isPublishableBubbleTutorRecord({ ...record, bio: 'Too short.' }),
    false,
  );
});