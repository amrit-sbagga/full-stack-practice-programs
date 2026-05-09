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

import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    uptime: Math.floor(process.uptime()),
  });
});

app.get("/greet", (req, res) => {
  const queryName = req.query.name;
  if (queryName) {
    res.json({ message: `Hello, ${queryName}!` });
  } else {
    res.json({ message: "Hello, Stranger!" });
  }
});

const PORT_NO = 3001;
app.listen(PORT_NO, () => {
  console.log(`Server running on http://localhost:${PORT_NO}`);
});
