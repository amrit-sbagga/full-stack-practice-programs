# Program 16 — tRPC + Express

[tRPC](https://trpc.io) is **TypeScript-first**: routers and procedures are typed end-to-end. This practice slot assumes a **small Express app** that mounts the tRPC handler.

## Why TypeScript here

The main `node-programs` folder uses `"type": "module"` and `.js` for programs 01–12. For tRPC, idiomatic setup uses **TypeScript** (`router`, `procedure`, `z` from Zod). Options:

1. **Recommended:** implement under `programs/16-trpc-server/` with `server.ts`, run with `tsx` or compile with `tsc`.
2. **Alternative:** add a small `tsconfig.json` scoped to this folder.

## Suggested packages

```bash
npm install @trpc/server express cors zod
npm install -D typescript tsx @types/express @types/node
```

## Shape of the solution

- `router` with procedures (e.g. `book.list`, `book.byId`, `book.create`) matching the Book domain
- `createExpressMiddleware` from `@trpc/server/adapters/express` at `/trpc`
- Input validation with **Zod** on mutations
- PORT **3016**, CORS enabled for local tools (GraphQL prog 13 uses 3013, Apollo 3014)

## Call the API

Use the tRPC **HTTP batch link** format or the [tRPC client](https://trpc.io/docs/client/vanilla) from a tiny script. For quick checks, see tRPC docs or use **Postman** with the JSON body format your adapter expects.

## Run

```bash
npm run 16
```

(Wire the script to `tsx programs/16-trpc-server/server.ts` once the file exists.)
