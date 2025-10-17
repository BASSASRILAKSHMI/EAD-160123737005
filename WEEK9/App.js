import React from "react";
 import Student from "./Components/PropsExample";

function App() {
  return (
    <div>
      <h1>Props Example</h1>
      <Student name="Srilakshmi" age={21} college="CBIT" />
    </div>
  );
}

export default App;
