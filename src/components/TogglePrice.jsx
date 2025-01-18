// src/components/Toggle.js
import React, { useState } from "react";

const Toggle = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <div className="flex bg-gray-100 rounded-lg p-1 shadow-md">
        {/* Monthly Option */}
        <button
          onClick={() => setIsYearly(false)}
          className={`px-8 py-2 rounded-lg transition-colors duration-300 ${
            !isYearly
              ? "text-lg bg-white text-black shadow-sm"
              : "text-lg text-gray-500 hover:text-black"
          }`}
        >
          Monthly
        </button>

        {/* Yearly Option */}
        <button
          onClick={() => setIsYearly(true)}
          className={`relative px-5 py-2 rounded-lg transition-colors duration-300 ${
            isYearly
              ? "text-lg bg-white text-black shadow-sm"
              : "text-lg text-gray-500 hover:text-black"
          }`}
        >
          Yearly
          {isYearly && (
            <span className="absolute -top-2 right-2 text-xs bg-blue-100 text-blue-600 font-semibold px-2 py-1 rounded-full shadow-sm">
              -20%
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Toggle;
