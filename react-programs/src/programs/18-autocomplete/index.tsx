/**
 * Program 18 — Autocomplete / Typeahead
 * Goal: An input field that shows a dropdown of matching suggestions as the user types.
 *       Clicking a suggestion fills the input. Debounce the suggestions at 300ms.
 *       Close dropdown when input is empty or user clicks outside.
 * Concepts: debounce, controlled input, conditional dropdown, useRef (click outside), filtering
 *
 * Data: use a static FRUITS array (or fetch from API if confident)
 */
import { useEffect, useRef, useState } from "react";
import ProgramShell from "../ProgramShell";

const FRUITS = [
  "Apple", "Apricot", "Avocado", "Banana", "Blueberry", "Cherry",
  "Coconut", "Grape", "Guava", "Kiwi", "Lemon", "Lime", "Mango",
  "Orange", "Papaya", "Peach", "Pear", "Pineapple", "Plum", "Strawberry",
];

export default function Autocomplete() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // TODO: debounce query → debouncedQuery (300ms)
  // TODO: filter FRUITS by debouncedQuery → setSuggestions (show only if query non-empty)
  // TODO: clicking a suggestion → setQuery(suggestion), setOpen(false)
  // TODO: click-outside handler using containerRef to close dropdown
  // TODO: render input + dropdown list of suggestions

  return (
    <ProgramShell
      title="18 — Autocomplete / Typeahead"
      concepts={["debounce", "controlled input", "click outside", "dropdown"]}
    >
      <p className="text-slate-400 italic text-sm">TODO: autocomplete input with debounced suggestion dropdown</p>
    </ProgramShell>
  );
}
