/**
 * PROGRAM 13 — GraphQL API (Express + graphql-http)
 *
 * Goal: expose a small read/write API over GraphQL using the **official** stack:
 *   `graphql` + `graphql-http` + Express (no Apollo in this program — that is program 14).
 *
 * Install:
 *   npm install graphql graphql-http
 *
 * Domain (in-memory only, like REST CRUD practice):
 *   Book { id: ID!, title: String!, author: String!, year: Int! }
 *
 * Schema requirements:
 *   - Query: book(id: ID!): Book — returns one book or null if missing
 *   - Query: books: [Book!]! — returns all books (non-null list; entries can exist)
 *   - Mutation: addBook(title: String!, author: String!, year: Int!): Book!
 *       → creates a book with auto-increment id, appends to store, returns the new Book
 *
 * Server requirements:
 *   - Listen on PORT 3013
 *   - Mount GraphQL HTTP handler at POST /graphql (graphql-http default pattern)
 *   - Seed at least 2 books in memory on startup
 *   - Use CORS if you test from a browser
 *
 * Docs: https://github.com/graphql/graphql-http
 *
 * Manual test:
 *   curl -s -X POST http://localhost:3013/graphql \
 *     -H "Content-Type: application/json" \
 *     -d '{"query":"{ books { id title author year } }"}'
 *
 * Run: npm run 13
 */

console.log(
  "Program 13 — GraphQL (graphql-http): implement in programs/13-graphql-server/index.js",
);
process.exit(0);
