import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseState from "./components/UseState";
import UseReducer from "./components/UseReducer";
import UseEffect from "./components/UseEffect";
import UseRef from "./components/UseRef";
import UseLayoutEffect from "./components/UseLayoutEffect";
import UseImperativeHandle from "./components/UseImperativeHandle";
import UseContext from "./components/UseContext";
import UseMemo from "./components/UseMemo";
import UseCallback from "./components/UseCallback";

function App() {
  return (
    <>
      <UseState />
      <hr />
      <UseReducer />
      <hr />
      <UseEffect />
      <hr />
      <UseRef />
      <hr />
      <UseLayoutEffect />
      <hr />
      <UseImperativeHandle />
      <hr />
      <UseContext />
      <hr />
      <UseMemo />
      <hr />
      <UseCallback />
    </>
  );
}

export default App;
