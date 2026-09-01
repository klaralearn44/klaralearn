import assert from "node:assert/strict";
import test from "node:test";
import {
  getPublicTutorConfig,
  isPublishableTutorRecord,
  sourceRecordsFromPayload,
} from "./public-tutors";

const environment = {
  BUBBLE_PUBLIC_TUTORS_SOURCE_URL:
    "https://app.klaralearn.com/api/1.1/obj/publictutorcard",
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

test("allows complete records from the public production inventory", () => {
  assert.equal(isPublishableTutorRecord(approvedRecord, config), true);
  assert.equal(
    isPublishableTutorRecord({ ...approvedRecord, hourly_rate: 6 }, config),
    true,
  );
  assert.equal(isPublishableTutorRecord({ ...approvedRecord, bio: "Short." }, config), false);
});

test("accepts only the exact KlaraLearn production source", () => {
  assert.equal(
    getPublicTutorConfig({
      BUBBLE_PUBLIC_TUTORS_SOURCE_URL:
        "https://app.klaralearn.com/api/1.1/obj/publictutorcard",
    })?.sourceUrl,
    "https://app.klaralearn.com/api/1.1/obj/publictutorcard",
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
        "https://app.klaralearn.com/api/1.1/obj/other-record",
    }),
    null,
  );
});

test("defaults to the production feed and does not infer review fields", () => {
  const availableConfig = getPublicTutorConfig({});
  if (!availableConfig) throw new Error("Available inventory must create a config.");

  assert.equal(
    availableConfig.sourceUrl,
    "https://app.klaralearn.com/api/1.1/obj/publictutorcard",
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