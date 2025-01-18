import React, { useState, useEffect, useRef } from "react";
import { Logo } from "../assets";
import { useMediaQuery } from "react-responsive";

const setUpIntersectionObserver = (element, setCurrentState, states) => {
  const handleAnimation = () => {
    let animationIndex = 0;
    const animate = () => {
      if (animationIndex < states.length) {
        setCurrentState(animationIndex);
        animationIndex++;
        setTimeout(animate, 2000);
      }
    };
    animate();
  };

  const intersectionCallback = (entries) => {
    const isIntersecting = entries[0].isIntersecting;
    if (isIntersecting) {
      handleAnimation();
    } else {
      setCurrentState(0);
    }
  };

  const intersectionObserver = new IntersectionObserver(intersectionCallback);
  intersectionObserver.observe(element);

  return () => intersectionObserver.disconnect();
};

const App = () => {
  const isLg = useMediaQuery({ query: "(min-width: 1024px)" });
  const states = [
    { text: "Downloading version 1.12.0...", progress: 25 },
    { text: "Extracting app...", progress: 50 },
    { text: "Installing application...", progress: 75 },
    { text: "Installed!", progress: 100 },
  ];

  const [currentState, setCurrentState] = useState(0);
  const installLinearRef = useRef(null);

  useEffect(() => {
    if (installLinearRef.current) {
      return setUpIntersectionObserver(installLinearRef.current, setCurrentState, states);
    }
  }, []);

  return (
    <div className="h-auto flex items-center justify-center">
      {/* Gradient Background */}
      <div
        className="relative bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-md"
        style={{ width: "100%", maxWidth: window.innerWidth >= 768 ? "576px" : "384px", height: "288px" }}
      >
        {/* Install Linear Box */}
        <div
          id="linear-box"
          ref={installLinearRef}
          className={
            isLg
              ? `absolute top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg w-80 sm:w-full max-w-md lg:translate-x-40 p-6`
              : `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg w-80 sm:w-full max-w-md lg:translate-x-1  p-2 sm:p-6`
          }
        >
          {/* Title */}
          <div className="sm:text-lg font-medium text-center">
            Install Linear
            <hr className="border-gray-300 border-t w-full mt-2" />
          </div>
          <div className="flex items-center mt-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src={Logo} alt="App Icon" className="h-12 w-12" />
            </div>
            {/* Text and Progress */}
            <div className="ml-4 w-full">
              <div className="text-base font-medium">
                {states[currentState]?.text}
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    currentState === states.length - 1
                      ? "bg-green-500"
                      : "bg-blue-500"
                  }`}
                  style={{ width: `${states[currentState]?.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
          {/* Final State Message */}
          {currentState === states.length - 1 && (
            <span className="mt-4 text-green-500 text-center font-semibold"></span>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
