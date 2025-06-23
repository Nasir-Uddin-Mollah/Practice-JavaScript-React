import React, { useContext } from "react";
import { AppContext } from "./UseContext";

export default function User() {
  const { userName } = useContext(AppContext);
  return (
    <div>
      <h2>Name: {userName}</h2>
    </div>
  );
}
