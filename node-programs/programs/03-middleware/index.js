/**
 * PROGRAM 03 — Custom Middleware
 *
 * Build an Express server demonstrating three types of middleware:
 *
 * 1. Logger Middleware (global)
 *    - Runs on every request
 *    - Logs: [TIMESTAMP] METHOD /path  (e.g. [2026-05-10T10:00:00] GET /users)
 *
 * 2. Auth Middleware (route-level)
 *    - Checks for header: x-api-key: secret123
 *    - If missing or wrong → respond 401 { error: "Unauthorized" }
 *    - If correct → allow request through
 *
 * 3. Error Handler Middleware (global, at the end)
 *    - Catches any error thrown in routes
 *    - Responds with 500 { error: "Internal Server Error", message: err.message }
 *
 * Endpoints:
 *   GET /public          → accessible without auth → { message: "Public route" }
 *   GET /private         → protected by auth middleware → { message: "Private route" }
 *   GET /crash           → intentionally throws an error (to test error handler)
 *
 * Run: npm run 03
 */

import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// global logger middleware
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const path = req.path;
  console.log(`[${timestamp}] ${method} ${path}`);

  next();
});

// auth middleware
const authMiddleWare = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (apiKey !== "secret123") {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
};

// endpoints
app.get("/public", (req, res) => {
  res.json({ message: "Public route" });
});

// protected by auth-middleware
app.get("/private", authMiddleWare, (req, res) => {
  res.json({ message: "Private route" });
});

// intentionally throw err to test error handler
app.get("/crash", (req, res) => {
  throw new Error("Intentional crash for testing");
});

// error middleware
app.use((err, req, res, next) => {
  res
    .status(500)
    .json({ error: "Internal Server Error", message: err.message });
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
