import React, { useState } from "react";

export default function UseState() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const [inputValue, setInputValue] = useState("Type Something...");

  return (
    <div>
      <button onClick={increment}>Count = {count}</button>
      <br />
      <br />
      <input
        type="text"
        placeholder="Type Something..."
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h3>Your Input = {inputValue}</h3>
    </div>
  );
}
