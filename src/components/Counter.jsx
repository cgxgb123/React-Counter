import { useEffect, useRef, useState } from "react";
import reactLogo from "../assets/react.svg";

const Counter = () => {
  const savedCount = Number(localStorage.getItem("count")) || 0;

  const [count, setCount] = useState(savedCount);
  const [history, setHistory] = useState([savedCount]);

  const updateCount = (newCount) => {
    setCount(newCount);
    setHistory((prev) => [...prev, newCount]);
  };
  const resetCounter = () => {
    setCount(0);
    setHistory([0]);
    localStorage.removeItem("count");
  };
  const saveTimeout = useRef(null);

  useEffect(() => {
    saveTimeout.current = setTimeout(() => {
      localStorage.setItem("count", count);
    }, 300);

    return () => {
      clearTimeout(saveTimeout.current);
    };
  }, [count]);

  const [step, setStep] = useState(1);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowUp") {
        updateCount(count + step);
      }
      if (e.key === "ArrowDown") {
        updateCount(count - step);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [count, step]);

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
          <button
            onClick={resetCounter}
            className="w-auto bg-gray-700 text-white py-2 rounded mb-4"
          >
            Reset
          </button>
        </div>
        <p className="text-sm text-gray-600">History: {history.join(", ")}</p>
      </div>
    </div>
  );
};

export default Counter;
