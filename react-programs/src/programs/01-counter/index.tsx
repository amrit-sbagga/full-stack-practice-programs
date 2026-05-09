/**
 * Program 01 — Counter (useState)
 * Goal: Display a count with Increment, Decrement, and Reset buttons.
 * Concepts: useState, event handlers, conditional styling
 */
import { useState } from "react";
import ProgramShell from "../ProgramShell";

export default function Counter() {
  const [count, setCount] = useState(0);

  // TODO: implement increment, decrement, reset handlers
  // TODO: render the count and three buttons

  return (
    <ProgramShell title="01 — Counter (useState)" concepts={["useState", "event handlers"]}>
      <p className="text-slate-400 italic text-sm">TODO: implement counter here</p>
    </ProgramShell>
  );
}
