import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
// import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";
import { Tldraw, track, useEditor } from "tldraw";

function App() {
  return (
    <div>
      <h2>collaborative drawing app</h2>
      <div style={{ position: "fixed", inset: 0, margin: "120px" }}>
        <Tldraw />
      </div>
    </div>
  );
}

export default App;
