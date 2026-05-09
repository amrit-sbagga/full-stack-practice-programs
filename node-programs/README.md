# Node.js Practice Programs

12 Node.js / Express programs for HackerRank test prep.

## How to Run

```bash
cd node-programs
npm install         # only needed once

npm run 01          # runs program 01 with nodemon (auto-restarts on save)
npm run 02          # runs program 02
# ... etc
```

Each Express program runs on **port 3001**. Only run one at a time.
Programs 06, 11, 12 are plain Node scripts (no server).

Test your endpoints with **Postman**, **Thunder Client** (VS Code extension), or `curl`.

## Programs

| # | Program | Key Concepts |
|---|---------|-------------|
| 01 | Hello Express | Express basics, query params, JSON response |
| 02 | REST API CRUD | GET/POST/PUT/DELETE, status codes, in-memory store |
| 03 | Custom Middleware | Logger, auth, error handler middleware |
| 04 | Query Filter + Sort + Paginate | req.query, filter, sort, pagination |
| 05 | File Operations | fs.promises, read/write JSON file |
| 06 | Async / Promises | Promise, async/await, Promise.all, Promise.allSettled |
| 07 | Fetch External API | axios, proxy pattern, parallel requests |
| 08 | Error Handling | Custom error class, asyncHandler wrapper, global handler |
| 09 | JWT Auth | jsonwebtoken, bcryptjs, authenticate middleware, role check |
| 10 | Rate Limiter | In-memory store, sliding window, 429 response |
| 11 | Event Emitter | EventEmitter, .on, .once, custom class, error event |
| 12 | Data Transformation | map, filter, reduce, sort, find — no for loops |

## Testing Tools

- **Thunder Client** — VS Code extension, works like Postman
- **curl** examples:
  ```bash
  curl http://localhost:3001/
  curl -X POST http://localhost:3001/users -H "Content-Type: application/json" -d '{"name":"Alice","email":"alice@test.com"}'
  curl http://localhost:3001/users/1
  curl -X DELETE http://localhost:3001/users/1
  ```

## Git Commit Convention

```bash
git add node-programs/programs/01-hello-express/
git commit -m "feat: 01 hello express with query greet"
git push
```
