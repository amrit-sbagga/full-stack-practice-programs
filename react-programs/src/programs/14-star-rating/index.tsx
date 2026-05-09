/**
 * Program 14 — Star Rating
 * Goal: Render N stars (default 5). User can click to set a rating.
 *       Hovered stars should preview the rating before clicking.
 * Concepts: controlled component, hover state with useRef or useState, array rendering
 *
 * Stars: use ★ (filled) and ☆ (empty) — or any character/icon
 */
import { useState } from "react";
import ProgramShell from "../ProgramShell";

const TOTAL_STARS = 5;

export default function StarRating() {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

  // TODO: render TOTAL_STARS stars
  // TODO: on mouseEnter(star) → setHovered(star), on mouseLeave → setHovered(0)
  // TODO: on click(star) → setRating(star)
  // TODO: filled = index <= (hovered || rating)

  return (
    <ProgramShell
      title="14 — Star Rating"
      concepts={["hover state", "controlled component", "array rendering"]}
    >
      <p className="text-slate-400 italic text-sm">
        TODO: clickable star rating component (current: {rating}/{TOTAL_STARS})
      </p>
    </ProgramShell>
  );
}
