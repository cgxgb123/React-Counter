import { useState } from "react";
import Counter from "./components/Counter.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Counter />
    </>
  );
}

export default App;
