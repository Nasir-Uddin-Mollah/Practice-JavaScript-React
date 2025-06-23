import React, { useRef } from "react";
import Button from "./Button";

export default function UseImperativeHandle() {
  const btnref = useRef(null);

  return (
    <div>
        <h3>UseImperativeHandle</h3>
      <button
        onClick={() => {
          btnref.current.alterToggle();
        }}
        style={{ margin: "5px" }}
      >
        Parent Button
      </button>
      <Button ref={btnref} />
    </div>
  );
}

// UseImperativeHandle hook use to call a function from another component.
