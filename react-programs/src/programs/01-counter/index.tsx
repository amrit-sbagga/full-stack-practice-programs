import React, { useState } from "react";
/**
 * PROGRAM 01 — Counter
 *
 * Build a counter app with:
 *   - A number display showing the current count (starts at 0)
 *   - An "Increment" button that adds 1
 *   - A "Decrement" button that subtracts 1
 *   - A "Reset" button that sets the count back to 0
 */

function Counter() {
  const [count, setCount] = useState(0);

  // const handleIncrement = () => {
  //   setCount(prev => prev + 1)
  // }

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <div style={{ marginBottom: "12px" }}>Count is : {count}</div>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        style={{ marginRight: "12px" }}
      >
        Increment
      </button>
      <button onClick={handleDecrement} style={{ marginRight: "12px" }}>
        Decrement
      </button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default Counter;
