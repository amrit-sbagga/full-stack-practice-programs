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
