import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <ExampleText textProp={"Hello"} color={"red"} />
      <ExampleText textProp={"World"} color={"blue"}></ExampleText>
      <ExampleText textProp={"And Me"} color={"yellow"} />
    </>
  );
}

function ExampleText({ textProp, color }) {
  return (
    <div>
      <h1 style={{ color: color }}>{textProp}</h1>
    </div>
  );
}

export default App;
