/**
 * PROGRAM 05 — File Operations (fs module)
 *
 * Build an Express server that reads from and writes to a local JSON file.
 * Use the file `data.json` in the same folder as your storage.
 *
 * Create data.json with initial content:
 *   { "notes": [] }
 *
 * Endpoints:
 *   GET  /notes         → read data.json and return all notes
 *   POST /notes         → read data.json, append { id, text, createdAt } to notes array,
 *                         write back to file, return the new note
 *                         body: { text: "my note" }
 *   DELETE /notes/:id   → read data.json, remove note by id, write back, return { success: true }
 *
 * Requirements:
 *   - Use fs.promises (async/await) — not the callback version
 *   - Handle file-not-found error gracefully (start with empty notes array)
 *   - Return 400 if text is missing on POST
 *
 * Run: npm run 05
 */
