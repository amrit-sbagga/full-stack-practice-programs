/**
 * PROGRAM 01 — Hello Express
 *
 * Build a basic Express server with the following endpoints:
 *
 *   GET  /           → responds with plain text: "Hello, World!"
 *   GET  /health     → responds with JSON: { status: "ok", uptime: <seconds since server started> }
 *   GET  /greet?name=John → responds with JSON: { message: "Hello, John!" }
 *                           if name is missing → { message: "Hello, Stranger!" }
 *
 * Requirements:
 *   - Server listens on PORT 3001
 *   - Log "Server running on http://localhost:3001" when started
 *
 * Run: npm run 01
 * Test: open browser or use curl / Postman / Thunder Client
 */
