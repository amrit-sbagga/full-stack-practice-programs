/**
 * Program 17 — Stopwatch with Laps
 * Goal: A stopwatch that ticks in centiseconds (10ms). Buttons:
 *   Start / Stop — toggle running state
 *   Lap          — record current time to a laps array (only when running)
 *   Reset        — stop + clear time + clear laps
 * Display: MM:SS.cs  (e.g. 01:23.45)
 * Concepts: useRef for interval, array state for laps, time formatting
 */
import { useRef, useState } from "react";
import ProgramShell from "../ProgramShell";

export default function Stopwatch() {
  const [time, setTime] = useState(0); // in centiseconds (10ms units)
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // TODO: start() → setInterval 10ms, increment time by 1
  // TODO: stop()  → clearInterval
  // TODO: lap()   → setLaps(prev => [...prev, time])
  // TODO: reset() → stop + setTime(0) + setLaps([])
  // TODO: format time → MM:SS.cs

  return (
    <ProgramShell
      title="17 — Stopwatch with Laps"
      concepts={["useRef", "setInterval", "array state for laps", "time formatting"]}
    >
      <p className="text-slate-400 italic text-sm">TODO: stopwatch display + Start/Stop/Lap/Reset buttons + laps list</p>
    </ProgramShell>
  );
}
