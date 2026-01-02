import { useState } from "react";
import reactLogo from "../assets/react.svg";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([0]);

  const updateCount = (newCount) => {
    setCount(newCount);
    setHistory((prev) => [...prev, newCount]);
  };
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-96">
        <a href="https://www.linkedin.com/in/christiangblunt/" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1 className="text-xl font-bold text-center mb-4">React Counter</h1>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value) || 1)}
          className="border rounded px-2 py-1 w-20"
        />
        <div className="text-4xl font-semibold text-center mb-4">{count}</div>
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => updateCount(count - step)}
            className="flex-1 bg-red-500 text-white py-2 rounded"
          >
            -
          </button>
          <button
            onClick={() => updateCount(count + step)}
            className="flex-1 bg-green-500 text-white py-2 rounded"
          >
            +
          </button>
        </div>
        <p className="text-sm text-gray-600">History: {history.join(", ")}</p>
      </div>
    </div>
  );
};

export default Counter;
