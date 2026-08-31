import { strict as assert } from "node:assert";
import test from "node:test";
import handler from "./public-tutors";

type TestResponse = {
  statusCode: number;
  headers: Record<string, string>;
  body: unknown;
  setHeader(name: string, value: string): void;
  status(code: number): TestResponse;
  json(payload: unknown): void;
  end(): void;
};

function response(): TestResponse {
  const result = {
    statusCode: 200,
    headers: {},
    body: undefined,
    setHeader(name: string, value: string) {
      this.headers[name] = value;
    },
    status(code: number) {
      this.statusCode = code;
      return this;
    },
    json(payload: unknown) {
      this.body = payload;
    },
    end() {},
  };

  return result;
}

test("rejects unsupported methods without contacting Bubble", async () => {
  const res = response();

  await handler({ method: "POST" }, res);

  assert.equal(res.statusCode, 405);
  assert.deepEqual(res.headers, { Allow: "GET" });
  assert.deepEqual(res.body, { error: "Method not allowed." });
});

test("fails closed when the production Bubble source is not configured", async () => {
  const previousSource = process.env.BUBBLE_PUBLIC_TUTORS_SOURCE_URL;
  delete process.env.BUBBLE_PUBLIC_TUTORS_SOURCE_URL;

  try {
    const res = response();
    await handler({ method: "GET" }, res);

    assert.equal(res.statusCode, 503);
    assert.deepEqual(res.body, {
      error: "Tutor listings are not configured with an approved production source.",
    });
  } finally {
    if (previousSource === undefined) {
      delete process.env.BUBBLE_PUBLIC_TUTORS_SOURCE_URL;
    } else {
      process.env.BUBBLE_PUBLIC_TUTORS_SOURCE_URL = previousSource;
    }
  }
});

test("returns only approved public fields from the production Bubble feed", async () => {
  const previousSource = process.env.BUBBLE_PUBLIC_TUTORS_SOURCE_URL;
  const previousFetch = globalThis.fetch;
  process.env.BUBBLE_PUBLIC_TUTORS_SOURCE_URL =
    "https://edubridgegloballearning.com/api/1.1/obj/publictutorcard";

  globalThis.fetch = async () =>
    new Response(
      JSON.stringify({
        response: {
          results: [
            {
              _id: "approved-1",
              fullname: "Approved Tutor",
              headline: "Experienced mathematics tutor",
              bio: "A detailed public biography that is long enough for the tutor directory.",
              country: "United Kingdom",
              subjects: ["Mathematics"],
              curricula: ["GCSE"],
              hourly_rate: 25,
              average_rating: 4.9,
              total_reviews: 18,
              tutoring_experience:
                "More than five years supporting secondary-school learners.",
              Slug: "approved-tutor",
              public_discovery_approved: true,
              safeguarding_verified: true,
              qualifications: ["BSc Mathematics"],
              private_email: "must-not-be-returned@example.com",
            },
            {
              _id: "unapproved-1",
              fullname: "Unapproved Tutor",
              headline: "Experienced mathematics tutor",
              bio: "A detailed public biography that is long enough for the tutor directory.",
              subjects: ["Mathematics"],
              hourly_rate: 25,
              tutoring_experience:
                "More than five years supporting secondary-school learners.",
              Slug: "unapproved-tutor",
              public_discovery_approved: false,
              safeguarding_verified: true,
              qualifications: ["BSc Mathematics"],
            },
          ],
        },
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );

  try {
    const res = response();
    await handler({ method: "GET" }, res);

    assert.equal(res.statusCode, 200);
    assert.equal(res.headers["Cache-Control"], "no-store");

    const body = res.body as {
      response: { results: Array<Record<string, unknown>> };
    };
    assert.equal(body.response.results.length, 1);
    assert.equal(body.response.results[0]?.fullname, "Approved Tutor");
    assert.equal("private_email" in body.response.results[0]!, false);
    assert.equal("public_discovery_approved" in body.response.results[0]!, false);
    assert.equal("safeguarding_verified" in body.response.results[0]!, false);
  } finally {
    globalThis.fetch = previousFetch;
    if (previousSource === undefined) {
      delete process.env.BUBBLE_PUBLIC_TUTORS_SOURCE_URL;
    } else {
      process.env.BUBBLE_PUBLIC_TUTORS_SOURCE_URL = previousSource;
    }
  }
});