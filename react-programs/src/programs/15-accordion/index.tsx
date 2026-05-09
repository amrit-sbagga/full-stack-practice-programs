/**
 * Program 15 — Accordion
 * Goal: A list of FAQ items. Clicking a title expands its answer panel.
 *       Only one panel is open at a time (exclusive expand).
 * Concepts: array state (or index state), conditional rendering, toggle
 */
import { useState } from "react";
import ProgramShell from "../ProgramShell";

const FAQ_ITEMS = [
  { id: 1, question: "What is React?", answer: "A JavaScript library for building user interfaces." },
  { id: 2, question: "What is a Hook?", answer: "Functions that let you use state and other React features in function components." },
  { id: 3, question: "What is useEffect?", answer: "A hook that runs side effects after rendering, like data fetching or subscriptions." },
  { id: 4, question: "What is useRef?", answer: "A hook that holds a mutable value that does not trigger re-renders." },
];

export default function Accordion() {
  const [openId, setOpenId] = useState<number | null>(null);

  // TODO: map FAQ_ITEMS to accordion rows
  // TODO: clicking a row toggles openId (open if closed, close if already open)
  // TODO: show answer panel only when item.id === openId

  return (
    <ProgramShell
      title="15 — Accordion"
      concepts={["toggle state", "conditional render", "exclusive expand"]}
    >
      <p className="text-slate-400 italic text-sm">TODO: accordion with exclusive expand for FAQ items</p>
    </ProgramShell>
  );
}
