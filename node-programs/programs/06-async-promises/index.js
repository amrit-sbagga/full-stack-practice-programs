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

import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const fsp = fs.promises;

// TASK-1
const readFileAsync = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);
const DATA_PATH = path.join(__dirname, "input.txt");

const OUTPUT_DATA_PATH = path.join(__dirname, "output.txt");

// TASK-2
// readFileAsync(DATA_PATH)
//   .then((data) => {
//     const upperCaseData = data.toUpperCase();
//     return upperCaseData;
//   })
//   .then((upperCaseData) => {
//     return fsp.writeFile(OUTPUT_DATA_PATH, upperCaseData);
//   })
//   .catch((err) => console.error(err));

// TASK-3
const readAndWriteToFile = async () => {
  try {
    const data = await readFileAsync(DATA_PATH);
    const upperCaseData = data.toUpperCase();
    await fsp.writeFile(OUTPUT_DATA_PATH, upperCaseData);
  } catch (err) {
    console.error(err);
  }
};

// TASK-4
const fetchUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Alice" });
    }, 500);
  });
};

const fetchPosts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([{ id: 1, title: "Hello" }]);
    }, 300);
  });
};

const fetchConfig = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ theme: "dark" });
    }, 200);
  });
};

const runAllOperations = async () => {
  const result = await Promise.all([fetchUser(), fetchPosts(), fetchConfig()]);
  console.log(result);
};

// TASK-5
const fetchPostsRejected = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject([{ id: 1, title: "Hello" }]);
    }, 300);
  });
};

const runAllWithSettled = async () => {
  await Promise.allSettled([
    fetchUser(),
    fetchPostsRejected(),
    fetchConfig(),
  ]).then((results) => {
    // console.log(results)
    results.forEach((result, index) => {
      const label = ["fetchUser", "fetchPosts(rejected)", "fetchConfig"][index];
      if (result.status === "fulfilled") {
        console.log(
          `${label} fulfilled:`,
          JSON.stringify(result.value, null, 2),
        );
      } else {
        console.log(
          `${label} rejected:`,
          JSON.stringify(result.reason, null, 2),
        );
      }
    });
  });
};

// invoke tasks
async function main() {
  await readFileAsync(DATA_PATH)
    .then((data) => {
      const upperCaseData = data.toUpperCase();
      return upperCaseData;
    })
    .then((upperCaseData) => {
      return fsp.writeFile(OUTPUT_DATA_PATH, upperCaseData);
    })
    // .catch((err) => console.error(err));

  await readAndWriteToFile();

  await runAllOperations();
  await runAllWithSettled();

  console.log("All tasks completed successfully");
}

main().catch(console.error);
