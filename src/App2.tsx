import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserForm from "./forms/UserForm";
import { UseLayoutEffectSample } from "./hooks/useLayoutEffect";
import UseRefSample from "./hooks/useRefSample";

function App2() {
  const [active, setActive] = useState<boolean>(true);

  return (
    <div className="App">
      <UserForm />
      <button onClick={() => setActive(!active)}>Active or Passive</button>
      {active && <UseLayoutEffectSample />}
      <UseRefSample />
    </div>
  );
}

export default App2;
