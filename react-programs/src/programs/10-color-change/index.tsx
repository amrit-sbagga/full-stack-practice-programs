/**
 * Program 10 — Change Page Color on Button Click
 * Goal: Clicking a color button changes the background color of the content area.
 *       Show which color is currently active.
 * Concepts: useState, inline styles (or dynamic className), event handling
 *
 * Colors to offer: White, Red, Blue, Green, Yellow, Purple
 */
import { useState } from "react";
import ProgramShell from "../ProgramShell";

const COLORS = [
  { label: "White", value: "#ffffff" },
  { label: "Red", value: "#fca5a5" },
  { label: "Blue", value: "#93c5fd" },
  { label: "Green", value: "#86efac" },
  { label: "Yellow", value: "#fde68a" },
  { label: "Purple", value: "#d8b4fe" },
];

export default function ColorChange() {
  const [bgColor, setBgColor] = useState("#ffffff");

  // TODO: render a row of color buttons
  // TODO: apply bgColor as background style to the color preview area
  // TODO: highlight the active color button

  return (
    <ProgramShell
      title="10 — Change Page Color"
      concepts={["useState", "inline styles", "dynamic className"]}
    >
      <p className="text-slate-400 italic text-sm">TODO: color buttons that change the background area below</p>
    </ProgramShell>
  );
}
