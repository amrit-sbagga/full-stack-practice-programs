/**
 * PROGRAM 03 — Custom Middleware
 *
 * Build an Express server demonstrating three types of middleware:
 *
 * 1. Logger Middleware (global)
 *    - Runs on every request
 *    - Logs: [TIMESTAMP] METHOD /path  (e.g. [2026-05-10T10:00:00] GET /users)
 *
 * 2. Auth Middleware (route-level)
 *    - Checks for header: x-api-key: secret123
 *    - If missing or wrong → respond 401 { error: "Unauthorized" }
 *    - If correct → allow request through
 *
 * 3. Error Handler Middleware (global, at the end)
 *    - Catches any error thrown in routes
 *    - Responds with 500 { error: "Internal Server Error", message: err.message }
 *
 * Endpoints:
 *   GET /public          → accessible without auth → { message: "Public route" }
 *   GET /private         → protected by auth middleware → { message: "Private route" }
 *   GET /crash           → intentionally throws an error (to test error handler)
 *
 * Run: npm run 03
 */
