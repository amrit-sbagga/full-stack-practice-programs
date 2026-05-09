import { useEffect, useRef, useState } from 'react';
/**
 * PROGRAM 09 — Start / Stop Timer
 *
 * Build a timer that counts up in seconds.
 *
 * Requirements:
 *   - Display the elapsed time in MM:SS format (e.g. 01:23)
 *   - A "Start" button begins counting
 *   - A "Stop" button pauses the count (Start resumes from where it stopped)
 *   - A "Reset" button stops and resets to 00:00
 *   - The Start button should be disabled while running; Stop disabled while stopped
 */

function formatTime(seconds: number) {
  const mm = Math.floor(seconds / 60).toString().padStart(2, '0');
  const ss = (seconds % 60).toString().padStart(2, '0');
  return `${mm}:${ss}`;
}

export default function Timer() {
  const [elapsedTime, setElapsedTime] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null); 
  const [isRunning, setIsRunning] = useState(false);
  
  useEffect(() => {
    return () => {
     clearInterval(timerRef.current!);
    }
  }, [])
  
  const startTimer = () => {
    if(timerRef.current) return;
    
    timerRef.current = setInterval(() => {
      setElapsedTime(prev=> prev + 1);
    }, 1000);
    setIsRunning(true);
  }
  
  const stopTimer = () => {
    clearInterval(timerRef.current!);
    timerRef.current = null;
    setIsRunning(false);
  }
  
  const resetTimer = () => {
    setElapsedTime(0);
    clearInterval(timerRef.current!);
    timerRef.current = null;
    setIsRunning(false);
  }
  
  return <>
    <p style={{'marginBottom':'16px'}}>{formatTime(elapsedTime)}</p>
    <button disabled={isRunning}
      onClick={startTimer} style={{'marginRight':'16px', 'padding': '8px 12px'}}>
      Start
    </button>
    <button disabled={!isRunning}
      onClick={stopTimer} style={{'marginRight':'16px', 'padding': '8px 12px'}}>
      Stop
    </button>
    <button onClick={resetTimer} style={{'marginRight':'16px', 'padding': '8px 12px'}}>
      Reset
    </button>
  </>;
}