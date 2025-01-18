import React from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { steps2Item, steps3Item, stepsItem } from "../data.js";
import { rocket, upload } from "../assets";
import AnimatedUI from "./AnimatedUI";

const Steps = () => {
  return (
    <div className="flex flex-col gap-6 container">
      <h2 className="text-5xl sm:font-semibold mb-14">How it works</h2>

      {/* Step 1 */}
      <div className="rounded-xl border px-8 py-12 flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col gap-6 lg:w-1/2">
          <span className="border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium font-display">
            Step 1
          </span>
          <h3 className="text-4xl">Bootstrap straight from your web app</h3>
          <p className="text-lg font-light">
            Copy and paste your web app URL into ToDesktop. Customize your app
            design, app icon, and window frame UI with no code.
          </p>
          <ul className="grid grid-cols-2 gap-2">
            {stepsItem.map((item) => (
              <li className="flex gap-4 items-center" key={item.id}>
                <FontAwesomeIcon className="text-gray-500" icon={faCheck} />
                <a
                  className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80"
                  href={item.href}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-12 lg:w-1/2">
          <img src={upload} alt="Upload Illustration" />
        </div>
      </div>

      {/* Step 2 */}
      <div className="rounded-xl border px-8 py-12 flex flex-col lg:flex-row justify-between mt-10">
        <div className="flex flex-col gap-6 lg:w-1/2">
          <span className="border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium font-display">
            Step 2
          </span>
          <h3 className="text-4xl">
            Add desktop code to customize your web app
          </h3>
          <p className="text-lg font-light">
            No need to create a new repository, just add code from our desktop
            APIs to your codebase and get access to system-level functionality.
          </p>
          <ul className="grid grid-cols-2 gap-2">
            {steps2Item.map((item) => (
              <li className="flex gap-4 items-center" key={item.id}>
                <FontAwesomeIcon className="text-gray-500" icon={faCheck} />
                <a
                  className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80"
                  href={item.href}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-12 lg:w-1/2">
          <img src={upload} alt="Upload Illustration" />
        </div>
      </div>

      {/* Step 3 */}
      <div className="rounded-xl border px-8 py-12 flex flex-col lg:flex-row justify-between mt-10">
        <div className="flex flex-col gap-6 lg:w-1/2">
          <span className="border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium font-display">
            Step 3
          </span>
          <h3 className="text-4xl flex items-center">
            Publish
            <a
              className="ml-4"
              href="https://www.flaticon.com/free-icons/rocket"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={rocket} width="30px" alt="Rocket Icon" />
            </a>
          </h3>
          <p className="text-lg font-light">
            One-click will publish your desktop app to your customers and give
            you a download link to put on your website.
          </p>
          <ul className="grid grid-cols-2 gap-2">
            {steps3Item.map((item) => (
              <li className="flex gap-4 items-center" key={item.id}>
                <FontAwesomeIcon className="text-gray-500" icon={faCheck} />
                <a
                  className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80"
                  href={item.href}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Animated UI for Step 3 */}
        <div className="pt-12 lg:w-1/2">
          <AnimatedUI />
        </div>
      </div>
    </div>
  );
};

export default Steps;
