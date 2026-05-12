# Program 10 — Rate Limiter

Express server with an in-memory rate limiter (no extra npm packages for limiting). Only **`GET /limited`** is throttled; **`GET /`** is not.

## Run the server

From the **`node-programs`** directory (parent of `programs/`):

```bash
npm run 10
```

Default base URL: **`http://localhost:3010`**

## APIs

| Method | Path | Rate limited | Response |
|--------|------|--------------|----------|
| GET | `/` | No | `{ "message": "Request successful", "remaining": null }` |
| GET | `/limited` | Yes (5 req / 60s per IP) | `{ "message": "Request successful", "remaining": <number> }` |

When the limit is exceeded, **`GET /limited`** returns **429** with:

```json
{ "error": "Too Many Requests", "retryAfter": <seconds> }
```

Response headers (especially on **`/limited`**):

- **`X-RateLimit-Limit`**: max requests per window (`5`)
- **`X-RateLimit-Remaining`**: requests left in the current window after this response (or `0` on 429)
- **`X-RateLimit-Reset`**: Unix time in **seconds** when the current window ends

## Examples (curl)

**Health-style route (no limit):**

```bash
curl -s http://localhost:3010/
```

**Rate-limited route — print status and body six times (expect 429 on the 6th):**

```bash
for i in 1 2 3 4 5 6; do
  echo -n "Request $i: "
  curl -s -o /tmp/p10-body.txt -w "%{http_code}\n" http://localhost:3010/limited
  cat /tmp/p10-body.txt
  echo
done
```

**Inspect rate-limit headers:**

```bash
curl -s -D - -o /dev/null http://localhost:3010/limited | grep -i x-ratelimit
```

**After a 429**, wait **`retryAfter`** seconds (or until after **`X-RateLimit-Reset`**), then call **`/limited`** again; you should get **200** and a fresh window.

## Notes

- Counts are keyed by **client IP** (`req.ip` or socket address). Local testing from your machine uses one bucket.
- State is **in memory**; restarting the server clears all counters.
