/**
 * Program 12 — Todo List (Add / Edit / Delete)
 * Goal: A full CRUD todo app.
 *   - Add new todo via an input + button
 *   - Edit existing todo inline (click edit → show input pre-filled)
 *   - Delete a todo
 *   - Mark a todo as complete (checkbox)
 * Concepts: array state, unique IDs (Date.now()), list rendering, conditional rendering
 */
import { useState } from "react";
import ProgramShell from "../ProgramShell";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  // TODO: addTodo()   → append { id: Date.now(), text: input, done: false }
  // TODO: deleteTodo(id)
  // TODO: toggleDone(id)
  // TODO: startEdit(todo) → setEditId + setEditText
  // TODO: saveEdit(id)    → update text, clear editId
  // TODO: render input + Add button, then list of todos

  return (
    <ProgramShell
      title="12 — Todo List (CRUD)"
      concepts={["array state", "list rendering", "inline edit", "CRUD"]}
    >
      <p className="text-slate-400 italic text-sm">TODO: add/edit/delete/complete todos</p>
    </ProgramShell>
  );
}
