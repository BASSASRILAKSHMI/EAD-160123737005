import React from "react";
import Counter from "./Components/counter"; // uppercase
import Timer from "./Components/Timer";
import Greet from "./Components/Greet";

function App() {
  return (
    <div>
      <Greet />
      <Counter />
      <Timer />
    </div>
  );
}

export default App;
