import assert from "node:assert/strict";
import test from "node:test";
import {
  getPublicTutorConfig,
  isPublishableTutorRecord,
  sourceRecordsFromPayload,
} from "./public-tutors";

const environment = {
  BUBBLE_PUBLIC_TUTORS_SOURCE_URL:
    "https://edubridgegloballearning.com/api/1.1/obj/publictutorcard",
  PUBLIC_TUTOR_SLUGS: "approved-maths-tutor",
};

const config = getPublicTutorConfig(environment);
if (!config) throw new Error("Test environment must create a tutor config.");

const approvedRecord = {
  _id: "tutor-1",
  fullname: "Amara Smith",
  Slug: "approved-maths-tutor",
  subjects: ["Mathematics"],
  hourly_rate: 22,
  headline: "GCSE maths tutor",
  bio: "Patient, structured support for GCSE learners who want to build lasting confidence.",
  tutoring_experience: "Ten years of online maths tutoring.",
  qualifications: ["PhD Mathematics"],
  public_discovery_approved: true,
  safeguarding_verified: true,
};

test("allows only fully reviewed records in the explicit public inventory", () => {
  assert.equal(isPublishableTutorRecord(approvedRecord, config), true);
  assert.equal(
    isPublishableTutorRecord(
      { ...approvedRecord, public_discovery_approved: false },
      config,
    ),
    false,
  );
  assert.equal(
    isPublishableTutorRecord(
      { ...approvedRecord, safeguarding_verified: false },
      config,
    ),
    false,
  );
  assert.equal(
    isPublishableTutorRecord({ ...approvedRecord, qualifications: [] }, config),
    false,
  );
  assert.equal(
    isPublishableTutorRecord({ ...approvedRecord, hourly_rate: 6 }, config),
    false,
  );
  assert.equal(
    isPublishableTutorRecord({ ...approvedRecord, Slug: "other-tutor" }, config),
    false,
  );
});

test("accepts only the exact KlaraLearn production or version-test source", () => {
  assert.equal(
    getPublicTutorConfig({
      BUBBLE_PUBLIC_TUTORS_SOURCE_URL:
        "https://edubridgegloballearning.com/version-test/api/1.1/obj/publictutorcard",
    })?.requiresReview,
    false,
  );
  assert.equal(
    getPublicTutorConfig({
      BUBBLE_PUBLIC_TUTORS_SOURCE_URL:
        "https://tutors.example.com/api/1.1/obj/publictutorcard",
    }),
    null,
  );
  assert.equal(
    getPublicTutorConfig({
      BUBBLE_PUBLIC_TUTORS_SOURCE_URL:
        "https://edubridgegloballearning.com/api/1.1/obj/other-record",
    }),
    null,
  );
});

test("uses the version-test feed as available, not reviewed, inventory", () => {
  const availableConfig = getPublicTutorConfig({});
  if (!availableConfig) throw new Error("Available inventory must create a config.");

  assert.equal(availableConfig.requiresReview, false);
  assert.equal(
    availableConfig.sourceUrl,
    "https://edubridgegloballearning.com/version-test/api/1.1/obj/publictutorcard",
  );
  assert.equal(
    isPublishableTutorRecord(
      {
        ...approvedRecord,
        bio: "Patient, structured support for GCSE learners who want to build lasting confidence.",
        public_discovery_approved: undefined,
        safeguarding_verified: undefined,
        qualifications: undefined,
      },
      availableConfig,
    ),
    true,
  );
});

test("accepts only the expected Bubble response envelope", () => {
  assert.deepEqual(sourceRecordsFromPayload({ response: { results: [] } }), []);
  assert.deepEqual(
    sourceRecordsFromPayload({ response: { results: [null, approvedRecord] } }),
    [approvedRecord],
  );
  assert.equal(sourceRecordsFromPayload({ response: { results: {} } }), null);
});