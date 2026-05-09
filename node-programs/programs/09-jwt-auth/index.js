/**
 * PROGRAM 09 — JWT Authentication
 *
 * Build an Express server with JWT-based login and protected routes.
 *
 * Use this hardcoded user list (no database needed):
 *   const USERS = [
 *     { id: 1, username: "alice", password: "password123", role: "admin" },
 *     { id: 2, username: "bob",   password: "pass456",     role: "user"  },
 *   ]
 *
 * Endpoints:
 *
 *   POST /login
 *     body: { username, password }
 *     → Find user by username, compare password (use bcryptjs.compare OR plain compare for now)
 *     → If valid: return { token: <JWT signed with secret "mysecret", expires in 1h> }
 *     → If invalid: 401 { error: "Invalid credentials" }
 *
 *   GET /profile   (protected)
 *     → Requires header: Authorization: Bearer <token>
 *     → Verify JWT, extract user info
 *     → Return { id, username, role }
 *     → If token missing or invalid: 401 { error: "Unauthorized" }
 *
 *   GET /admin     (protected + role check)
 *     → Same as /profile but also check role === "admin"
 *     → If role is not admin: 403 { error: "Forbidden" }
 *
 * Requirements:
 *   - Write a reusable `authenticate` middleware for protected routes
 *   - Write a reusable `authorize(role)` middleware for role checking
 *
 * Run: npm run 09
 */
