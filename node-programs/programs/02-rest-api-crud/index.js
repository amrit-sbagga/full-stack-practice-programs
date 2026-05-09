/**
 * PROGRAM 02 — REST API CRUD (In-Memory)
 *
 * Build a full CRUD REST API for a "users" resource using an in-memory array.
 * No database needed — store data in a plain JS array.
 *
 * Endpoints:
 *   GET    /users          → return all users
 *   GET    /users/:id      → return user by id, 404 if not found
 *   POST   /users          → create new user (body: { name, email }), return created user with id
 *   PUT    /users/:id      → update user by id (body: { name?, email? }), 404 if not found
 *   DELETE /users/:id      → delete user by id, 404 if not found
 *
 * Requirements:
 *   - Use express.json() middleware to parse request body
 *   - Assign auto-incremented IDs (start from 1)
 *   - Return appropriate HTTP status codes:
 *       200 for success, 201 for created, 404 for not found, 400 for bad request
 *   - Validate that name and email are present on POST, return 400 if missing
 *
 * Run: npm run 02
 * Test with Postman or Any REST API Testing Tool
 */

import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const usersArray = [
  { id: 1, name: "Amrit1", email: "amrit.sbagga1@gmail.com" },
  { id: 2, name: "Amrit2", email: "amrit.sbagga2@gmail.com" },
  { id: 3, name: "Amrit3", email: "amrit.sbagga3@gmail.com" },
  { id: 4, name: "Amrit4", email: "amrit.sbagga4@gmail.com" },
];

app.get("/users", (req, res) => {
  res.status(200).json({ users: usersArray });
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const found = usersArray.find((user) => user.id === Number(id));
  if (!found) {
    return res.status(404).json({ message: "User not found!" });
  }
  res.status(200).json({ user: found });
});

app.post("/users", (req, res) => {
  if (!req.body.name || !req.body.email) {
    return res.status(400).json({ message: "name and email are required" });
  }

  const newUser = {
    id: usersArray.length + 1,
    name: req.body.name,
    email: req.body.email,
  };
  usersArray.push(newUser);
  res.status(201).json({
    message: "User created successfully!",
    user: newUser,
  });
});

app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = usersArray.find((user) => user.id === Number(id));
  if (!user) {
    return res.status(404).json({ message: "User not found!" });
  }

  if (req.body.name) {
    user.name = req.body.name;
  }

  if (req.body.email) {
    user.email = req.body.email;
  }

  res.status(200).json({ message: "User updated!", user });
});

app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  const index = usersArray.findIndex((user) => user.id === Number(id));
  if (index === -1) {
    return res.status(404).json({ message: "User not found!" });
  } 

  const deletedUser = usersArray.splice(index, 1);
  res.status(200).json({ message: "User deleted!", user: deletedUser[0] });
});

const PORT_NO = 3001;
app.listen(PORT_NO, () => {
  console.log(`Server running on http://localhost:${PORT_NO}`);
});
