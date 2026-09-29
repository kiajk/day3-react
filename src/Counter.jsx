import { useState } from "react";

function Counter() {
  const [count, newCount] = useState(0);

  return (
    <>
      <h2>Counter</h2>

      <p>{count}</p>

      <button onClick={() => newCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => count > 0 && newCount(count - 1)}>
        Decrease
      </button>

      <button onClick={() => newCount(0)}>
        Reset
      </button>
    </>
  );
}

export default Counter;