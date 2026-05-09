/**
 * PROGRAM 07 — Fetch External API from Node
 *
 * Build an Express server that acts as a proxy/aggregator for JSONPlaceholder APIs.
 *
 * Endpoints:
 *
 *   GET /users
 *     → Fetch https://jsonplaceholder.typicode.com/users
 *     → Return only: id, name, email, city (from address.city)
 *
 *   GET /users/:id/posts
 *     → Fetch user by id AND their posts in parallel (Promise.all)
 *     → API: https://jsonplaceholder.typicode.com/users/:id
 *     →      https://jsonplaceholder.typicode.com/posts?userId=:id
 *     → Return: { user: { id, name }, posts: [{ id, title }] }
 *     → 404 if user not found
 *
 *   GET /posts/search?q=query
 *     → Fetch https://jsonplaceholder.typicode.com/posts
 *     → Filter posts where title includes the query (case-insensitive)
 *     → Return matching posts array
 *
 * Requirements:
 *   - Use axios for all HTTP requests
 *   - Handle network errors (return 500 with error message)
 *
 * Run: npm run 07
 */
