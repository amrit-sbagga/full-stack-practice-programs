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

import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const fsp = fs.promises;

app.use(cors());

const DATA_PATH = path.join(__dirname, 'data.json');
app.use(express.json());

// helper
const readData = async() => {
  try {
    const data = await fsp.readFile(DATA_PATH, 'utf8');
    return JSON.parse(data);
  } catch  {
    return {notes:[]}
  }
}

// GET
app.get('/notes', async(req, res) => {
   const data = await readData();
   res.json(data.notes);
});


// POST
app.post('/notes', async(req, res) => {
    const text = typeof req.body?.text === 'string' ? req.body.text.trim() : '';
    if (!text) {
       return res.status(400).json({ error: "Text is required"});
    }

    const data = await readData();
    const newNote = {
      id: Date.now().toString(),
      text,
      createdAt: new Date().toISOString()
    }

    data.notes.push(newNote);
    await fsp.writeFile(DATA_PATH, JSON.stringify(data, null, 2));
    res.status(201).json(newNote);
});

// DELETE /notes/:id
app.delete('/notes/:id', async(req, res) => {
   const id = req.params.id;
   const data = await readData();

   const originalLength = data.notes.length;
   const filteredNotes = data.notes.filter(note => note.id !== id);
   data.notes = filteredNotes

   if(filteredNotes.length === originalLength){
     return res.status(404).json({error: "Note not found"});
   }

   await fsp.writeFile(DATA_PATH, JSON.stringify(data, null, 2));
   res.json({success: true});
});



const PORT = 3005;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
