/**
 * Program 09 — Start/Stop Timer
 * Goal: Display a timer (MM:SS) with Start, Stop, and Reset buttons.
 *       Timer ticks every second using setInterval.
 * Concepts: useRef (to store interval ID), useState, setInterval, clearInterval, cleanup
 *
 * Key insight: store the interval ID in a useRef so it persists across re-renders
 * without triggering re-renders itself.
 */
import { useEffect, useRef, useState } from "react";
import ProgramShell from "../ProgramShell";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // TODO: start() → setInterval that increments seconds every 1000ms, store in intervalRef
  // TODO: stop() → clearInterval(intervalRef.current)
  // TODO: reset() → stop + setSeconds(0)
  // TODO: format seconds into MM:SS display
  // TODO: clean up interval on unmount (return clearInterval in useEffect)

  return (
    <ProgramShell
      title="09 — Start/Stop Timer"
      concepts={["useRef", "setInterval", "clearInterval", "cleanup"]}
    >
      <p className="text-slate-400 italic text-sm">TODO: timer display + Start / Stop / Reset buttons</p>
    </ProgramShell>
  );
}
