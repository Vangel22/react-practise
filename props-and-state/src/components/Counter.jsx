import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Count {count}</h2>
      <button
        onClick={() => {
          // State batching
          //   setCount(count);
          //   setCount((c) => c + 1);
          //   setCount(42);
          // setCount(count + 5);
          // setCount(count + 5);
          // setCount((prev) => prev + 5);
          setCount((prev) => prev + 5);
          //   alert(count);
        }}
      >
        + 5
      </button>
    </>
  );
};
