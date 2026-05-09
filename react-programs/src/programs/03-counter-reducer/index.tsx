/**
 * Program 03 — Counter (useReducer)
 * Goal: Same counter UI using useReducer instead of useState.
 * Concepts: useReducer, action types, reducer function, dispatch
 */
import { useReducer } from "react";
import ProgramShell from "../ProgramShell";

type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };
interface State { count: number }

// TODO: implement reducer function
function reducer(state: State, action: Action): State {
  return state; // replace with switch/case
}

export default function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  // TODO: render count and dispatch buttons

  return (
    <ProgramShell title="03 — Counter (useReducer)" concepts={["useReducer", "dispatch", "action types"]}>
      <p className="text-slate-400 italic text-sm">TODO: implement reducer and counter UI</p>
    </ProgramShell>
  );
}
