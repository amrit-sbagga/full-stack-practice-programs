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

import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
const BASE = "https://jsonplaceholder.typicode.com";
const PORT = 3007;

app.use(cors());
app.use(express.json());

app.get("/users", async (req, res) => {
  try {
    const { data } = await axios.get(`${BASE}/users`);
    const users = data.map((u) => ({
      id: u.id,
      name: u.name,
      email: u.email,
      city: u.address?.city ?? "",
    }));
    res.json(users);
  } catch (err) {
    const message =
      axios.isAxiosError(err) && err.message ? err.message : "Network Error";
    res.status(500).json({ error: message });
  }
});

app.get("/users/:id/posts", async (req, res) => {
  const { id } = req.params;
  try {
    const [userRes, postRes] = await Promise.all([
      axios.get(`${BASE}/users/${id}`),
      axios.get(`${BASE}/posts`, { params: { userId: id } }),
    ]);

    const user = userRes.data;
    res.json({
      user: { id: user.id, name: user.name },
      posts: postRes.data.map((p) => ({ id: p.id, title: p.title })),
    });
  } catch (err) {
    if (axios.isAxiosError(err) && err.response?.status === 404) {
      return res.status(404).json({ error: "User not found" });
    }
    const message =
      axios.isAxiosError(err) && err.message ? err.message : "Network Error";
    res.status(500).json({ error: message });
  }
});

app.get("/posts/search", async (req, res) => {
  try {
    const raw = req.query.q;
    const q =
      raw === undefined || raw === null ? "" : String(raw).trim().toLowerCase();

    const { data } = await axios.get(`${BASE}/posts`);

    if (!q) {
      return res.json([]);
    }

    const matches = data.filter((p) =>
      String(p.title).toLowerCase().includes(q),
    );
    res.json(matches);
  } catch (err) {
    const message =
      axios.isAxiosError(err) && err.message ? err.message : "Network Error";
    res.status(500).json({ error: message });
  }
});

app.listen(PORT, () => {
  console.log(`Program 07 listening on http://localhost:${PORT}`);
});
