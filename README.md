# Full Stack Practice Programs

Practice repo for React + Node.js programs — built to prep for HackerRank full-stack tests.

## Structure

```
full-stack-practice-programs/
├── react-programs/       # Vite + React + TypeScript app (all 18 React programs)
├── node-programs/        # Express/Node programs (coming soon)
└── fullstack-programs/   # React + Node combined programs (coming soon)
```

## React Programs

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
| 11 | Form Validation | Controlled inputs, regex, error messages |
| 12 | Todo List (add / edit / delete) | CRUD state, list rendering, keys |
| 13 | Pagination with JSONPlaceholder | API pagination, prev/next buttons |
| 14 | Star Rating | Controlled component, hover state |
| 15 | Accordion | Toggle state, array rendering |
| 16 | Infinite Scroll | IntersectionObserver, paginated fetch |
| 17 | Stopwatch with Laps | useRef for interval, array state |
| 18 | Autocomplete / Typeahead | Debounce, dropdown, controlled input |

## Getting Started

```bash
cd react-programs
npm install
npm run dev
```

Open http://localhost:5173 — use the sidebar to navigate between programs.

## Git Commit Convention

```
feat: 01 counter with incr/decr/reset
feat: 07 fetch API table with loading state
```
