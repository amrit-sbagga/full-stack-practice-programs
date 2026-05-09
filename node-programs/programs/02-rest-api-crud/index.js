/**
 * PROGRAM 02 — REST API CRUD (In-Memory)
 *
 * Build a full CRUD REST API for a "users" resource using an in-memory array.
 * No database needed — store data in a plain JS array.
 *
 * Endpoints:
 *   GET    /users          → return all users
 *   GET    /users/:id      → return user by id, 404 if not found
 *   POST   /users          → create new user (body: { name, email }), return created user with id
 *   PUT    /users/:id      → update user by id (body: { name?, email? }), 404 if not found
 *   DELETE /users/:id      → delete user by id, 404 if not found
 *
 * Requirements:
 *   - Use express.json() middleware to parse request body
 *   - Assign auto-incremented IDs (start from 1)
 *   - Return appropriate HTTP status codes:
 *       200 for success, 201 for created, 404 for not found, 400 for bad request
 *   - Validate that name and email are present on POST, return 400 if missing
 *
 * Run: npm run 02
 * Test with Postman or Thunder Client
 */
