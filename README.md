# Full Stack Practice Programs

Practice repo for React + Node.js programs.

## Structure

```
full-stack-practice-programs/
├── react-programs/       # Vite + React + TypeScript app (18 programs)
├── node-programs/        # Express/Node.js programs (12 programs)
└── fullstack-programs/   # React + Node combined programs (coming soon)
```

---

## React Programs

### Getting Started

```bash
cd react-programs
npm install
npm run dev
```

Open http://localhost:5173 — use the sidebar to navigate between programs.

### Program List

| # | Program | Concepts |
|---|---------|----------|
| 01 | Counter (incr / decr / reset) | useState, event handlers |
| 02 | Counter — Custom Hook | Custom hooks, encapsulation |
| 03 | Counter — useReducer | useReducer, action dispatch |
| 04 | Counter — Context | useContext, Provider pattern |
| 05 | Counter — Redux Toolkit | Redux slice, useSelector, useDispatch |
| 06 | Array → Table + Dropdown | Array map, controlled select |
| 07 | Fetch API → Table | useEffect, fetch/axios, loading state |
| 08 | Fetch + Search with Debounce | Debounce, filtering, async patterns |
| 09 | Start/Stop Timer | setInterval, useRef, cleanup |
| 10 | Change Page Color on Click | useState, inline styles |
| 11 | Form Validation | Controlled inputs, validation, error messages |
| 12 | Todo List (add / edit / delete) | CRUD state, list rendering, keys |
| 13 | Pagination with JSONPlaceholder | API pagination, prev/next buttons |
| 14 | Star Rating | Controlled component, hover state |
| 15 | Accordion | Toggle state, exclusive expand |
| 16 | Infinite Scroll | IntersectionObserver, paginated fetch |
| 17 | Stopwatch with Laps | useRef for interval, array state |
| 18 | Autocomplete / Typeahead | Debounce, dropdown, controlled input |

---

## Node Programs

### Getting Started

```bash
cd node-programs
npm install
npm run 01   # starts program 01 with nodemon
npm run 02   # starts program 02
# ... etc
```

Each Express program runs on **port 3001**. Run only one at a time.
Programs 06, 11, 12 are plain Node scripts (no server).

Test APIs with **curl**, **Postman**, **Bruno**, or the **REST Client** VS Code extension.

### Program List

| # | Program | Concepts |
|---|---------|----------|
| 01 | Hello Express | Express basics, query params, JSON response |
| 02 | REST API CRUD | GET/POST/PUT/DELETE, status codes, in-memory store |
| 03 | Custom Middleware | Logger, auth middleware, error handler middleware |
| 04 | Query Filter + Sort + Paginate | req.query, filter, sort, pagination |
| 05 | File Operations | fs.promises, read/write JSON file |
| 06 | Async / Promises | Promise, async/await, Promise.all, Promise.allSettled |
| 07 | Fetch External API | axios, proxy pattern, parallel requests |
| 08 | Error Handling | Custom error class, asyncHandler, global error handler |
| 09 | JWT Authentication | jsonwebtoken, bcryptjs, auth + role middleware |
| 10 | Rate Limiter | In-memory store, sliding window, 429 response |
| 11 | Event Emitter | EventEmitter, .on, .once, custom class, error event |
| 12 | Data Transformation | map, filter, reduce, sort, find — no for loops |

### curl Quick Reference

```bash
# GET
curl http://localhost:3001/users

# POST with JSON body
curl -X POST http://localhost:3001/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice","email":"alice@test.com"}'

# PUT
curl -X PUT http://localhost:3001/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated"}'

# DELETE
curl -X DELETE http://localhost:3001/users/1
```

---

## Git Commit Convention

```bash
# React
git add react-programs/src/programs/01-counter/
git commit -m "feat: 01 counter with incr/decr/reset"

# Node
git add node-programs/programs/01-hello-express/
git commit -m "feat: 01 hello express with health and greet endpoints"

git push
```
