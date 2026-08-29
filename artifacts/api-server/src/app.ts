import express, { type Express } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();

const configuredCorsOrigins = new Set(
  (process.env.PUBLIC_CORS_ORIGINS ?? "")
    .split(",")
    .map((origin) => origin.trim().replace(/\/$/, ""))
    .filter(Boolean),
);

if (process.env.NODE_ENV === "production" && configuredCorsOrigins.size === 0) {
  throw new Error(
    "PUBLIC_CORS_ORIGINS is required in production. Set it to the exact frontend origins.",
  );
}

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(
  cors({
    origin: (origin, callback) => {
      // Non-browser health checks and same-origin requests have no Origin header.
      if (!origin || configuredCorsOrigins.size === 0) {
        callback(null, true);
        return;
      }

      callback(
        null,
        configuredCorsOrigins.has(origin.replace(/\/$/, "")),
      );
    },
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
