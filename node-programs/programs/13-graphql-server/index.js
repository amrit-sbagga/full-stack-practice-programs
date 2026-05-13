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

import express from "express";
import cors from "cors";
import { buildSchema } from "graphql";
import { createHandler } from "graphql-http/lib/use/express";

const PORT = 3013;

const schema = buildSchema(`
   type Book {
     id: ID!
     title: String!
     author: String!
     year: Int!
   }

   type Query {
     book(id: ID!): Book
     books: [Book!]!
   }

   type Mutation {
     addBook(title: String!, author: String!, year: Int!): Book!
   }
`);

let nextId = 3;

const books = [
  { id: "1", title: "The Pragmatic Programmer", author: "Hunt & Thomas", year: 1999 },
  { id: "2", title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", year: 2017 },
];

// Top level keys books, book, addBook match Query & Mutation field names
// Resolver shape is: (args, contextValue, info)
// Root functions are invoked by graphql-js 
// defaultFieldResolver as: fn(args, contextValue, info)
// So the first parameter is the field's GraphQL arguments object.
const rootValue = {
  books: () => books,

  book: (args) => {
    const found = books.find((b) => b.id === args.id);
    return found ?? null;
  },

  addBook: (args) => {
    const { title, author, year } = args;
    const id = String(nextId++);
    const book = {
      id,
      title,
      author,
      year,
    };
    books.push(book);
    return book;
  },
};

const app = express();
app.use(cors());
app.use(express.json());


// createHandler -> wires graphql over http handler to express
// both GET & POST allowed
app.all("/graphql", createHandler({ schema, rootValue }));

app.listen(PORT, () => {
  console.log(`Program 13 — GraphQL listening on http://localhost:${PORT}/graphql`);
});

