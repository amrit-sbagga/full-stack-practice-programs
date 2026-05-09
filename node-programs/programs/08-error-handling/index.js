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
