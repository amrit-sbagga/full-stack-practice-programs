/**
 * PROGRAM 15 — Accordion
 *
 * Build an accordion FAQ component using the items below.
 *
 * Requirements:
 *   - Clicking a question expands its answer panel
 *   - Only one panel can be open at a time (clicking another closes the current one)
 *   - Clicking an open panel closes it
 *   - Show a visual indicator (e.g. + / −) for open/closed state
 */

const FAQ_ITEMS = [
  { id: 1, question: "What is React?", answer: "A JavaScript library for building user interfaces." },
  { id: 2, question: "What is a Hook?", answer: "Functions that let you use state and other React features in function components." },
  { id: 3, question: "What is useEffect?", answer: "A hook that runs side effects after rendering, like data fetching or subscriptions." },
  { id: 4, question: "What is useRef?", answer: "A hook that holds a mutable value that does not trigger re-renders." },
];

export default function Accordion() {
  return <div />;
}
