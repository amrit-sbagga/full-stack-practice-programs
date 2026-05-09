/**
 * Program 06 — Array of Objects → Table + Dropdown
 * Goal: Given an array of user objects, display them in an HTML table
 *       AND in a <select> dropdown. Selecting from the dropdown highlights the row.
 * Concepts: Array.map, controlled <select>, conditional className, table rendering
 */
import { useState } from "react";
import ProgramShell from "../ProgramShell";

const USERS = [
  { id: 1, name: "Alice", role: "Admin", age: 28 },
  { id: 2, name: "Bob", role: "Editor", age: 34 },
  { id: 3, name: "Carol", role: "Viewer", age: 22 },
  { id: 4, name: "Dave", role: "Editor", age: 45 },
  { id: 5, name: "Eve", role: "Admin", age: 31 },
];

export default function ArrayTableDropdown() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // TODO: render a <select> that sets selectedId
  // TODO: render a <table> with headers: Name, Role, Age
  //       highlight the row whose id === selectedId

  return (
    <ProgramShell
      title="06 — Array → Table + Dropdown"
      concepts={["Array.map", "controlled select", "conditional className", "table"]}
    >
      <p className="text-slate-400 italic text-sm">TODO: render dropdown and table from USERS array</p>
    </ProgramShell>
  );
}
