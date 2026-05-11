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
import { useState } from "react";

const FAQ_ITEMS = [
  {
    id: 1,
    question: "What is React?",
    answer: "A JavaScript library for building user interfaces.",
  },
  {
    id: 2,
    question: "What is a Hook?",
    answer:
      "Functions that let you use state and other React features in function components.",
  },
  {
    id: 3,
    question: "What is useEffect?",
    answer:
      "A hook that runs side effects after rendering, like data fetching or subscriptions.",
  },
  {
    id: 4,
    question: "What is useRef?",
    answer:
      "A hook that holds a mutable value that does not trigger re-renders.",
  },
];

export default function Accordion() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div style={{ maxWidth: 560, margin: "0 auto", padding: 16 }}>
      {FAQ_ITEMS.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `faq-panel-${item.id}`;
        const headerId = `faq-header-${item.id}`;

        return (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              marginBottom: "8px",
              overflow: "hidden",
            }}
          >
            <button
              type="button"
              id={headerId}
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 14px",
                border: "none",
                background: "#f7f7f7",
                cursor: "pointer",
                textAlign: "left",
                fontWeight: "600",
              }}
            >
              <span>{item.question}</span>
              <span aria-hidden style={{ fontSize: 18, marginLeft: 8 }}>
                {isOpen ? "-" : "+"}
              </span>
            </button>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={headerId}
                style={{ padding: "12px 14px", background: "#fff" }}
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
