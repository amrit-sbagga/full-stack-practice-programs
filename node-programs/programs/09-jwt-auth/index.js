/**
 * PROGRAM 09 — JWT Authentication
 *
 * Build an Express server with JWT-based login and protected routes.
 *
 * Use this hardcoded user list (no database needed):
 *   const USERS = [
 *     { id: 1, username: "alice", password: "password123", role: "admin" },
 *     { id: 2, username: "bob",   password: "pass456",     role: "user"  },
 *   ]
 *
 * Endpoints:
 *
 *   POST /login
 *     body: { username, password }
 *     → Find user by username, compare password (use bcryptjs.compare OR plain compare for now)
 *     → If valid: return { token: <JWT signed with secret "mysecret", expires in 1h> }
 *     → If invalid: 401 { error: "Invalid credentials" }
 *
 *   GET /profile   (protected)
 *     → Requires header: Authorization: Bearer <token>
 *     → Verify JWT, extract user info
 *     → Return { id, username, role }
 *     → If token missing or invalid: 401 { error: "Unauthorized" }
 *
 *   GET /admin     (protected + role check)
 *     → Same as /profile but also check role === "admin"
 *     → If role is not admin: 403 { error: "Forbidden" }
 *
 * Requirements:
 *   - Write a reusable `authenticate` middleware for protected routes
 *   - Write a reusable `authorize(role)` middleware for role checking
 *
 * Run: npm run 09
 */

import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';

const JWT_SECRET = "mysecret";
const PORT = 3009;

const USERS = [
 { id: 1, username: "alice", password: "password123", role: "admin" },
 { id: 2, username: "bob", password: "pass456", role: "user" },
];

const app = express();
app.use(cors());
app.use(express.json());

// middleware 
function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  if(!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = authHeader.slice("Bearer ".length).trim();
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    next();
  } catch {
   return res.status(401).json({ error: "Unauthorized" });
  }
}

// middleware
function authorize(requiredRole) {
 return (req, res, next) => {
   if(!req.user) {
     return res.status(401).json({ error: "Unauthorized" });
   }
   if(req.user.role !== requiredRole){
     return res.status(403).json({ error: "Forbidden" });
   }
   next();
 }
}

app.post('/login', (req, res) => {
 const { username, password } = req.body ?? {};
 if (
   typeof username !== "string" ||
   typeof password !== "string" ||
   !username ||
   !password
 ) {
   return res.status(400).json({ error: "Username and password required" });
 }

 const user = USERS.find((u) => u.username === username);
 if(!user || user.password !== password){
   return res.status(401).json({ error: "Invalid credentials" });
 }

 const token = jwt.sign(
   { id: user.id, username: user.username, role: user.role },
   JWT_SECRET,
   { expiresIn: '1h' }
 )
 res.json({ token })
});


app.get('/profile', authenticate, (req, res) => {
 const { id, username, role } = req.user;
 res.json({ id, username, role });
});

app.get('/admin', authenticate, authorize('admin'), (req, res) => {
 const { id, username, role } = req.user;
 res.json({ id, username, role });
});

app.listen(PORT, () => {
 console.log(`Program 09 listening on http://localhost:${PORT}`);
});