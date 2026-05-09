/**
 * Program 02 — Counter (Custom Hook)
 * Goal: Same counter UI but logic lives inside a custom hook `useCounter`.
 * Concepts: custom hooks, separation of concerns, hook return values
 */
import ProgramShell from "../ProgramShell";

// TODO: create useCounter hook that returns { count, increment, decrement, reset }
function useCounter(initial = 0) {
  // TODO: implement
  return { count: initial, increment: () => {}, decrement: () => {}, reset: () => {} };
}

export default function CounterCustomHook() {
  const { count, increment, decrement, reset } = useCounter(0);

  // TODO: render count and three buttons using the hook values

  return (
    <ProgramShell title="02 — Counter (Custom Hook)" concepts={["custom hook", "useCounter", "encapsulation"]}>
      <p className="text-slate-400 italic text-sm">TODO: implement custom hook and counter UI</p>
    </ProgramShell>
  );
}
