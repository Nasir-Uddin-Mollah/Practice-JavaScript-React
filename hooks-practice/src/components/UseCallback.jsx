import React, { useCallback, useState, memo } from "react";

const Button = memo(({ onclick, children }) => {
  console.log(`rendering button: ${children}`);

  return <button onClick={onclick}>{children}</button>;
});

export default function UseCallback() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    console.log("inside increment");
    setCount((c) => c + 1);
  }, []);
  const decrement = useCallback(() => {
    console.log("inside decrement");
    setCount((c) => c - 1);
  }, []);

  return (
    <div>
      <h3>Count: {count}</h3>
      <Button onclick={increment}>Increment</Button>
      <Button onclick={decrement}>Decrement</Button>
    </div>
  );
}
