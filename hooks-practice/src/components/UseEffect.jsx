import React, { useState, useEffect } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count > 0) {
      document.title = `Messages (${count})`;
    } else {
      document.title = `Messages`;
    }
  }, [count]);

  
  const [widthCount, setWidthCount] = useState(window.screen.width);
  const actualWidth = () => {
    setWidthCount(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", actualWidth);
    return () => {
      window.removeEventListener("resize", actualWidth);
    };
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count = {count}</button>
      <h3>Current Screen Size - {widthCount}</h3>
    </div>
  );
}
