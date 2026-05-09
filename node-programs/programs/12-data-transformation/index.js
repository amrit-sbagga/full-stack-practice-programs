/**
 * PROGRAM 12 — Data Transformation (Pure Node.js)
 *
 * This is a plain Node.js script (no Express). Run with: npm run 12
 *
 * Given the dataset below, complete each task using array methods.
 * Do NOT use for loops — use map, filter, reduce, sort, find, etc.
 *
 * Dataset:
 */

const employees = [
  { id: 1, name: "Alice",   dept: "Engineering", salary: 95000, active: true  },
  { id: 2, name: "Bob",     dept: "Marketing",   salary: 72000, active: true  },
  { id: 3, name: "Carol",   dept: "Engineering", salary: 105000, active: false },
  { id: 4, name: "Dave",    dept: "HR",          salary: 68000, active: true  },
  { id: 5, name: "Eve",     dept: "Engineering", salary: 88000, active: true  },
  { id: 6, name: "Frank",   dept: "Marketing",   salary: 76000, active: false },
  { id: 7, name: "Grace",   dept: "HR",          salary: 71000, active: true  },
];

/**
 * Task 1 — Filter active employees only
 * Expected: array of employees where active === true
 *
 * Task 2 — Get all unique department names
 * Expected: ["Engineering", "Marketing", "HR"]
 *
 * Task 3 — Total salary bill for active employees
 * Expected: single number (sum of salaries)
 *
 * Task 4 — Average salary per department
 * Expected: { Engineering: 91000, Marketing: 72000, HR: 69500 }  (approx)
 *
 * Task 5 — Sort all employees by salary descending
 * Expected: array ordered highest to lowest salary
 *
 * Task 6 — Get names of Engineering employees earning > 90000
 * Expected: ["Alice", "Carol"]
 *
 * Task 7 — Transform to a lookup map by id
 * Expected: { 1: { ...alice }, 2: { ...bob }, ... }
 *
 * Task 8 — Find the highest paid active employee
 * Expected: single employee object
 *
 * Log the result of each task with a label, e.g:
 *   console.log("Task 1:", result1)
 */
