import type { ChangeEvent, KeyboardEvent } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

/**
 * PROGRAM 18 — Autocomplete / Typeahead
 *
 * Build an autocomplete input using the FRUITS list below.
 *
 * Requirements:
 *   - As the user types, show a dropdown of matching fruit names (case-insensitive)
 *   - Debounce the filtering by 300ms
 *   - Clicking a suggestion fills the input and closes the dropdown
 *   - Pressing Escape closes the dropdown without changing the input
 *   - Clicking outside the component closes the dropdown
 *   - Show "No results" if nothing matches
 */

const FRUITS = [
  "Apple",
  "Apricot",
  "Avocado",
  "Banana",
  "Blueberry",
  "Cherry",
  "Coconut",
  "Grape",
  "Guava",
  "Kiwi",
  "Lemon",
  "Lime",
  "Mango",
  "Orange",
  "Papaya",
  "Peach",
  "Pear",
  "Pineapple",
  "Plum",
  "Strawberry",
];

export default function Autocomplete() {
  const [input, setInput] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  //  const [selectedValue, setSelectedValue] = useState('');
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedValue(input);
    }, 300);

    return () => clearTimeout(id);
  }, [input]);

  // click outside handler
  useEffect(() => {
    if (!open) return;
  
    const handlePointerDown = (e: MouseEvent) => {
      const el = rootRef.current;
      if (el && !el.contains(e.target as Node)) {
        setOpen(false);
      }
    };
  
    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, [open]);


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setOpen(true);
  };

  const query = debouncedValue.trim().toLowerCase();

  const filteredList = useMemo(() => {
    if (!query) return [];
    return FRUITS.filter((fruit) => fruit.toLowerCase().includes(query));
  }, [query]);

  // const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
  //   setSelectedValue(e.target.value);
  // }

  // Escape key handler
  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
    }
  };

  return (
    <div ref={rootRef}>
      <input
        style={{ padding: "8px 12px" }}
        type="text"
        placeholder="Search Value"
        value={input}
        onKeyDown={handleInputKeyDown}
        onChange={handleChange}
      />
      {open && query && filteredList.length === 0 && <p>No results</p>}

      {open && query && filteredList.length > 0 && 
         (<ul style={{'marginTop' : '12px', listStyle: 'none', padding: 0}}>
          {
            filteredList.map((fruit) => (
               <li key={fruit}>
                  <button type="button"
                    onClick={() => {
                      setInput(fruit);
                      setOpen(false);
                      // optional
                      setDebouncedValue(fruit);
                    }}> 
                    {fruit}
                  </button>
                </li>
            ))
          }
        </ul>)
      }

      {/* {filteredList && filteredList.length > 0 && (
        <div style={{ marginTop: "12px" }}>
          <select
            style={{ padding: "8px 12px" }}
            onChange={handleSelectChange}
            value={selectedValue}
          >
            {filteredList.map((fruit) => (
              <option key={fruit} value={fruit}>
                {fruit}
              </option>
            ))}
          </select>
        </div>
      )} */}
    </div>
  );
}
