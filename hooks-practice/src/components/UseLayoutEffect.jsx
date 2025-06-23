import React, { useState, useEffect, useLayoutEffect } from "react";

export default function UseLayoutEffect() {
  // useEffect(() => {
  //   console.log("1st console");
  // }, []);

  // useLayoutEffect(() => {
  //   console.log("2nd console");
  // }, []);

  // useEffect(() => {
  //   console.log("3rd console");
  // }, []);
  //useLayoutEffect will run first.

  const [num, setNum] = useState(0);

  //   useEffect(() => {
  //     if (num === 0) setNum(10 + Math.random() * 35);
  //   }, [num]);
  useLayoutEffect(() => {
    if (num === 0) setNum(10 + Math.random() * 35);
  }, [num]);

  return (
    <div>
      <h4>UseLayoutEffect</h4>
      <h3>NUM = {num}</h3>
      <button
        onClick={() => {
          setNum(0);
        }}
      >
        Click
      </button>
    </div>
  );
}
