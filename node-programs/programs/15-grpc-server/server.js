/**
 * PROGRAM 15 — gRPC server (Node + @grpc/grpc-js)
 *
 * Goal: define a contract in a .proto file and implement a unary RPC service in Node,
 * mirroring the same "Book" domain as programs 13–14 (GraphQL) for consistency.
 *
 * Files to add when implementing:
 *   - book.proto   — package + service + messages
 *   - server.js    — this file: load proto, implement handlers, start server
 *   - client.js    — optional: smoke-test calls from command line
 *
 * Proto sketch (you write the exact syntax):
 *   service BookService {
 *     rpc GetBook (GetBookRequest) returns (Book);
 *     rpc ListBooks (Empty) returns (ListBooksResponse);
 *   }
 *   message Book { string id = 1; string title = 2; string author = 3; int32 year = 4; }
 *   message GetBookRequest { string id = 1; }
 *   message ListBooksResponse { repeated Book books = 1; }
 *   message Empty {}
 *
 * Behaviour:
 *   - In-memory store; seed at least 2 books on startup (string ids e.g. "1", "2")
 *   - GetBook: if id missing → gRPC NOT_FOUND (status code 5) with a clear message
 *   - ListBooks: return all books
 *
 * Server requirements:
 *   - Listen on port 50051 (default gRPC dev port)
 *   - Use grpc-js ServerCredentials.createInsecure() for local practice
 *   - Log "gRPC BookService listening on 0.0.0.0:50051" on start
 *
 * Install:
 *   npm install @grpc/grpc-js @grpc/proto-loader
 *
 * Run server: npm run 15   (or node programs/15-grpc-server/server.js)
 */

console.log(
  "Program 15 — gRPC: add book.proto and implement server.js (see comment block).",
);
process.exit(0);
