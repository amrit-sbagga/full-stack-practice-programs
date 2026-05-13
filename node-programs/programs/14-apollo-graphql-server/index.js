/**
 * PROGRAM 14 — GraphQL API (Express + Apollo Server)
 *
 * Goal: implement the **same Book domain and schema shape** as program 13, but with
 * **@apollo/server** and the Express middleware integration so you can compare stacks.
 *
 * Install:
 *   npm install graphql @apollo/server
 *   (Express + cors already in this repo)
 *
 * Domain (match program 13):
 *   Book { id: ID!, title: String!, author: String!, year: Int! }
 *
 * Schema requirements (same operations as prog 13):
 *   - Query: book(id: ID!): Book
 *   - Query: books: [Book!]!
 *   - Mutation: addBook(title: String!, author: String!, year: Int!): Book!
 *
 * Server requirements:
 *   - Listen on PORT **3014** (program 13 uses 3013 — run one at a time)
 *   - Mount Apollo with `expressMiddleware` at **/graphql** (or `/` — document your choice)
 *   - Seed at least 2 books in memory on startup
 *   - Use `ApolloServer` + `startStandaloneServer` is an alternative, but for practice prefer
 *     **Express + expressMiddleware** to mirror real apps
 *
 * Docs: https://www.apollographql.com/docs/apollo-server/api/express-middleware
 *
 * Run: npm run 14
 */

console.log(
  "Program 14 — GraphQL (Apollo Server): implement in programs/14-apollo-graphql-server/index.js",
);
process.exit(0);
