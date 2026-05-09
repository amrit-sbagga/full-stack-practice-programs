/**
 * PROGRAM 02 — Counter using a Custom Hook
 *
 * Same counter UI as Program 01 (Increment / Decrement / Reset),
 * but ALL the counter logic must live inside a custom hook called useCounter.
 *
 * The component itself should only call the hook and render the UI.
 * The hook should accept an optional initial value.
 */

// custom hook
import useCounter from "./useCounter";

function CounterCustomHook() {
  const {
    count, 
    incrementCounter, 
    decrementCounter,
    resetCounter
  } = useCounter(0);
  
  return <>
    <div style={{"marginBottom":"12px"}}>Count (using Custom Hook) is : {count}</div>
     <button onClick={incrementCounter}
        style={{"marginRight":"12px"}}
     >
       Increment
     </button>
     <button onClick={decrementCounter}
     style={{"marginRight":"12px"}}
     >
       Decrement
     </button>
     <button onClick={resetCounter}>
       Reset
     </button>
  </>
}

export default CounterCustomHook;
