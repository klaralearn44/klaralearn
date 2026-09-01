import { strict as assert } from "node:assert";
import test from "node:test";
import handler from "../api/public-tutors";

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

test("fails closed when the Bubble source is outside the approved allowlist", async () => {
  const previousSource = process.env.BUBBLE_PUBLIC_TUTORS_SOURCE_URL;
  process.env.BUBBLE_PUBLIC_TUTORS_SOURCE_URL =
    "https://example.com/api/public-tutors";

  try {
    const res = response();
    await handler({ method: "GET" }, res);

    assert.equal(res.statusCode, 503);
    assert.deepEqual(res.body, {
      error: "Tutor listings are not configured with an approved Bubble source.",
    });
  } finally {
    if (previousSource === undefined) {
      delete process.env.BUBBLE_PUBLIC_TUTORS_SOURCE_URL;
    } else {
      process.env.BUBBLE_PUBLIC_TUTORS_SOURCE_URL = previousSource;
    }
  }
});

test("uses the live production feed as available public inventory", async () => {
  const previousSource = process.env.BUBBLE_PUBLIC_TUTORS_SOURCE_URL;
  const previousFetch = globalThis.fetch;
  delete process.env.BUBBLE_PUBLIC_TUTORS_SOURCE_URL;

  globalThis.fetch = async (input) => {
    assert.equal(
      input,
      "https://app.klaralearn.com/api/1.1/obj/publictutorcard",
    );

    return new Response(
      JSON.stringify({
        response: {
          results: [
            {
              _id: "available-1",
              fullname: "Available Tutor",
              headline: "Experienced mathematics tutor",
              bio: "A detailed public biography that is long enough for the tutor directory.",
              subjects: ["Mathematics"],
              hourly_rate: 5,
              tutoring_experience:
                "More than five years supporting secondary-school learners.",
              Slug: "available-tutor",
            },
          ],
        },
      }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  };

  try {
    const res = response();
    await handler({ method: "GET" }, res);

    assert.equal(res.statusCode, 200);
    const body = res.body as {
      response: { results: Array<Record<string, unknown>> };
    };
    assert.equal(body.response.results.length, 1);
    assert.equal(
      "safeguarding_verified" in body.response.results[0]!,
      false,
    );
    assert.deepEqual(body.response.results[0]?.qualifications, []);
  } finally {
    globalThis.fetch = previousFetch;
    if (previousSource === undefined) {
      delete process.env.BUBBLE_PUBLIC_TUTORS_SOURCE_URL;
    } else {
      process.env.BUBBLE_PUBLIC_TUTORS_SOURCE_URL = previousSource;
    }
  }
});

test("returns complete records with only public fields from the production Bubble feed", async () => {
  const previousSource = process.env.BUBBLE_PUBLIC_TUTORS_SOURCE_URL;
  const previousFetch = globalThis.fetch;
  process.env.BUBBLE_PUBLIC_TUTORS_SOURCE_URL =
    "https://app.klaralearn.com/api/1.1/obj/publictutorcard";

  globalThis.fetch = async () =>
    new Response(
      JSON.stringify({
        response: {
          results: [
            {
              _id: "available-1",
              fullname: "Available Tutor",
              headline: "Experienced mathematics tutor",
              bio: "A detailed public biography that is long enough for the tutor directory.",
              country: "United Kingdom",
              subjects: ["Mathematics"],
              curricula: ["GCSE"],
              hourly_rate: 5,
              average_rating: 4.9,
              total_reviews: 18,
              tutoring_experience:
                "More than five years supporting secondary-school learners.",
              Slug: "available-tutor",
              private_email: "must-not-be-returned@example.com",
            },
            {
              _id: "incomplete-1",
              fullname: "Incomplete Tutor",
              headline: "Experienced mathematics tutor",
              bio: "Too short.",
              subjects: ["Mathematics"],
              hourly_rate: 6,
              tutoring_experience:
                "More than five years supporting secondary-school learners.",
              Slug: "incomplete-tutor",
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
    assert.equal(body.response.results[0]?.fullname, "Available Tutor");
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