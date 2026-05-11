/**
 * PROGRAM 08 — Error Handling
 *
 * Build an Express server with proper error handling patterns.
 *
 * Requirements:
 *
 * 1. Create a custom error class AppError that extends Error:
 *    - constructor(message, statusCode)
 *    - Properties: message, statusCode, isOperational: true
 *
 * 2. Create an async wrapper utility `asyncHandler(fn)`:
 *    - Wraps an async route handler
 *    - Automatically catches rejected promises and calls next(err)
 *    - So route handlers don't need individual try/catch blocks
 *
 * 3. Global error handler middleware (at the very end):
 *    - If err.isOperational → respond with err.statusCode and err.message
 *    - Otherwise → respond with 500 "Internal Server Error"
 *
 * Endpoints:
 *   GET /ok                    → { message: "Everything is fine" }
 *   GET /not-found             → throw new AppError("Resource not found", 404)
 *   GET /bad-request           → throw new AppError("Invalid input", 400)
 *   GET /crash                 → throw a plain new Error("Unexpected crash")
 *   GET /async-fail            → async route that rejects (use asyncHandler)
 *
 * Run: npm run 08
 */

import express from "express";
import cors from "cors";

const app = express();
const PORT = 3008;

app.use(cors());
app.use(express.json());

class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = "AppError";
    this.statusCode = statusCode;
    this.isOperational = true;
  }
}

function asyncHandler(fn) {
  return function asyncHandlerWrapped(req, res, next) {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

app.get("/ok", (req, res) => {
  res.json({ message: "Everything is fine" });
});

app.get(
  "/not-found",
  asyncHandler(async () => {
    throw new AppError("Resource not found", 404);
  }),
);

app.get(
  "/bad-request",
  asyncHandler(async () => {
    throw new AppError("Invalid input", 400);
  }),
);

app.get(
  "/crash",
  asyncHandler(async () => {
    throw new Error("Unexpected crash");
  }),
);

app.get(
  "/async-fail",
  asyncHandler(async () => {
    await Promise.reject(new Error("Async rejected"));
  }),
);

app.use((err, req, res, next) => {
  if (err.isOperational) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  res.status(500).json({ message: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Program 08 listening on http://localhost:${PORT}`);
});
