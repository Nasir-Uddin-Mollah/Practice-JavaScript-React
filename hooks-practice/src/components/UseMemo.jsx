import React, { useState, useMemo } from "react";

const ExpensiveComponent = () => {
  const sum = () => {
    console.log("calculating...");
    let i = 0;
    for (i = 0; i <= 500000000; i++) {
      i++;
    }
    return i;
  };
  const total = useMemo(() => sum(), []);
  return <p>sum: {total}</p>;
};

export default function UseMemo() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <ExpensiveComponent />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Parent-Button
      </button>
      <p>Parent Button Re-renders: {count}</p>
    </div>
  );
}
