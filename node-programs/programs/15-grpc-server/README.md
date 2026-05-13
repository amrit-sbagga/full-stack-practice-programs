# Program 15 — gRPC service

gRPC uses **Protocol Buffers** (`.proto`) and **HTTP/2**. You typically run a **server** and a **client** in two processes (or one script that starts the server and runs a demo client).

## Suggested packages

```bash
cd node-programs
npm install @grpc/grpc-js @grpc/proto-loader
```

## Layout (when you code it)

- `book.proto` — service + messages (see requirements in `server.js` comment block)
- `server.js` — implements the service, listens on e.g. `0.0.0.0:50051`
- `client.js` (optional) — calls `GetBook` / `ListBooks` for manual verification

## Run

```bash
# terminal 1
node programs/15-grpc-server/server.js

# terminal 2
node programs/15-grpc-server/client.js
```

Or `npm run 15`.

## Tools

- [grpcurl](https://github.com/fullstorydev/grpcurl) can call methods without a custom client once you enable server reflection (optional stretch goal).
