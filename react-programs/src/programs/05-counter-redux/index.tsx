/**
 * Program 05 — Counter (Redux Toolkit)
 * Goal: Same counter UI powered by a Redux slice.
 * Concepts: createSlice, configureStore, useSelector, useDispatch
 *
 * The slice is already set up in src/store/counterSlice.ts
 * Import: { increment, decrement, reset } from "../../store/counterSlice"
 * Import: { useAppDispatch, useAppSelector } from "../../store/hooks"
 */
import ProgramShell from "../ProgramShell";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { increment, decrement, reset } from "../../store/counterSlice";

export default function CounterRedux() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  // TODO: render count and dispatch increment / decrement / reset on button clicks

  return (
    <ProgramShell title="05 — Counter (Redux Toolkit)" concepts={["Redux Toolkit", "createSlice", "useSelector", "useDispatch"]}>
      <p className="text-slate-400 italic text-sm">
        TODO: render count ({count}) and wire up dispatch(increment()), dispatch(decrement()), dispatch(reset())
      </p>
    </ProgramShell>
  );
}
