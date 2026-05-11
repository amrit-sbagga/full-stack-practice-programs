import { useEffect, useRef, useState } from "react";

/**
 * PROGRAM 17 — Stopwatch with Laps
 *
 * Build a stopwatch that counts in centiseconds (10ms ticks).
 *
 * Requirements:
 *   - Display time in MM:SS.cs format (e.g. 01:23.45)
 *   - "Start" begins counting, "Stop" pauses it
 *   - "Lap" records the current time to a laps list (only when running)
 *   - "Reset" stops the watch, clears the time and all laps
 *   - Show the laps list below with lap number and recorded time
 */

type Lap = {
  lapNumber: number;
  lapTime: string;
};

export default function Stopwatch() {
  const [elapsedCs, setElapsedCs] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState<Lap[]>([]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isRunning) return;

    timerRef.current = setInterval(() => {
      setElapsedCs((prev) => prev + 1);
    }, 10);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isRunning]);

  function formatCentiseconds(totalCs: number) {
    const mm = Math.floor(totalCs / 6000);
    const ss = Math.floor((totalCs % 6000) / 100);
    const cs = totalCs % 100;

    const MM = String(mm).padStart(2, "0");
    const SS = String(ss).padStart(2, "0");
    const CS = String(cs).padStart(2, "0");

    return `${MM}:${SS}.${CS}`;
  }

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const recordLap = () => {
    if (!isRunning) return;

    setLaps((prev) => [
      ...prev,
      {
        lapNumber: prev.length + 1,
        lapTime: formatCentiseconds(elapsedCs),
      },
    ]);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setElapsedCs(0);
    setLaps([]);
  };

  return (
    <div>
      <p>{formatCentiseconds(elapsedCs)}</p>

      <button
        style={{ margin: "12px 4px" }}
        type="button"
        disabled={isRunning}
        onClick={startTimer}
      >
        Start
      </button>
      <button
        style={{ margin: "12px 4px" }}
        type="button"
        disabled={!isRunning}
        onClick={stopTimer}
      >
        Stop
      </button>
      <button
        style={{ margin: "12px 4px" }}
        type="button"
        disabled={!isRunning}
        onClick={recordLap}
      >
        Lap
      </button>
      <button style={{ margin: "12px 4px" }} type="button" onClick={resetTimer}>
        Reset
      </button>

      <ul>
        {laps.map((lap) => (
          <li key={lap.lapNumber}>
            Lap {lap.lapNumber}: {lap.lapTime}
          </li>
        ))}
      </ul>
    </div>
  );
}
