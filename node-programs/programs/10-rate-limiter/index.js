/**
 * PROGRAM 10 — Rate Limiter (Build from Scratch)
 *
 * Implement a simple rate limiter middleware WITHOUT any external library.
 * Use an in-memory store (plain JS object) to track request counts per IP.
 *
 * Rate limit rules:
 *   - Max 5 requests per 60 seconds per IP address
 *   - After limit is reached: respond 429 { error: "Too Many Requests", retryAfter: <seconds> }
 *   - Add response headers:
 *       X-RateLimit-Limit: 5
 *       X-RateLimit-Remaining: <remaining requests>
 *       X-RateLimit-Reset: <timestamp when window resets>
 *
 * Endpoints:
 *   GET /         → { message: "Request successful", remaining: N }
 *   GET /limited  → same, but apply rate limiter only to this route
 *
 * Hint: store { count, resetTime } per IP, check if resetTime has passed to reset count
 *
 * Run: npm run 10
 * Test: hit the endpoint 6+ times quickly with curl or Postman
 */

import express from "express";
import cors from "cors";

const app = express();
const PORT = 3010;
const WINDOW_MS = 60_000;
const LIMIT = 5;

const store = Object.create(null);

function clientIp(req) {
  return req.ip || req.socket.remoteAddress || "unknown";
}

function rateLimiter(req, res, next) {
  const ip = clientIp(req);
  const now = Date.now();

  let record = store[ip];

  if (!record || now >= record.resetTime) {
    record = { count: 0, resetTime: now + WINDOW_MS };
    store[ip] = record;
  }

  const resetEpochSeconds = Math.ceil(record.resetTime / 1000);
  res.setHeader("X-RateLimit-Limit", String(LIMIT));
  res.setHeader("X-RateLimit-Reset", String(resetEpochSeconds));

  if (record.count >= LIMIT) {
    const retryAfter = Math.max(1, Math.ceil((record.resetTime - now) / 1000));
    res.setHeader("X-RateLimit-Remaining", "0");
    return res.status(429).json({
      error: "Too Many Requests",
      retryAfter,
    });
  }

  record.count += 1;
  const remaining = LIMIT - record.count;
  res.setHeader("X-RateLimit-Remaining", String(remaining));
  res.locals.rateLimitRemaining = remaining;
  next();
}

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "Request successful", remaining: null });
});

app.get("/limited", rateLimiter, (_req, res) => {
  res.json({
    message: "Request successful",
    remaining: res.locals.rateLimitRemaining,
  });
});

app.listen(PORT, () => {
  console.log(`Program 10 listening on http://localhost:${PORT}`);
});
