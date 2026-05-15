import path from "node:path";
import { fileURLToPath } from "node:url";
import * as grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROTO_PATH = path.join(__dirname, "book.proto");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const booksProto = grpc.loadPackageDefinition(packageDefinition);
const client = new booksProto.books.BookService(
  "localhost:50051",
  grpc.credentials.createInsecure(),
);

client.listBooks({}, (err, res) => {
  if (err) {
    console.error("ListBooks error:", err.message);
    process.exit(1);
  }
  console.log("ListBooks:", JSON.stringify(res, null, 2));
});

client.getBook({ id: "1" }, (err, res) => {
  if (err) {
    console.error("GetBook error:", err.message);
    process.exit(1);
  }
  console.log("GetBook id=1:", JSON.stringify(res, null, 2));
});

client.getBook({ id: "999" }, (err, res) => {
  if (err) {
    console.log("GetBook missing (expected):", err.code, err.message);
    return;
  }
  console.log("unexpected success", res);
});