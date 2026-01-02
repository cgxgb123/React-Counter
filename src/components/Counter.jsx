import { useState } from "react";
import reactLogo from "../assets/react.svg";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-80 text-center">
        <a href="https://www.linkedin.com/in/christiangblunt/" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1 className="text-xl font-bold mb-4">React Counter</h1>

        <div className="text-4xl font-semibold mb-4">{count}</div>

        <div className="flex gap-2">
          <button
            onClick={() => setCount(count - 1)}
            className="flex-1 bg-red-500 text-white py-2 rounded"
          >
            -
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="flex-1 bg-green-500 text-white py-2 rounded"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
