/**
 * PROGRAM 06 — Async / Promises
 *
 * This program is NOT an Express server — it's a plain Node.js script.
 * Run it with: npm run 06
 *
 * Tasks to implement:
 *
 * Task 1 — Convert callback to Promise
 *   Write a function `readFileAsync(path)` that wraps fs.readFile
 *   in a Promise (without using fs.promises).
 *
 * Task 2 — Promise chaining
 *   Using Task 1, read the file "input.txt" (create it with some text),
 *   convert its content to uppercase, then write it to "output.txt".
 *   Chain with .then() — no async/await for this task.
 *
 * Task 3 — async/await
 *   Do the same as Task 2 but using async/await and try/catch.
 *
 * Task 4 — Promise.all
 *   Simulate 3 async operations (use setTimeout wrapped in a Promise):
 *     - fetchUser()   → resolves after 500ms with { id: 1, name: "Alice" }
 *     - fetchPosts()  → resolves after 300ms with [{ id: 1, title: "Hello" }]
 *     - fetchConfig() → resolves after 200ms with { theme: "dark" }
 *   Run all 3 in parallel with Promise.all and log the combined results.
 *
 * Task 5 — Promise.allSettled
 *   Same as Task 4 but fetchPosts() rejects after 300ms.
 *   Use Promise.allSettled and log which succeeded and which failed.
 */
