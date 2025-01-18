import React from "react";
import Toggle from "./TogglePrice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { pricingDetails } from "../data";

const Pricing = () => {
  return (
    <div id="pricing" className="container mx-auto py-12">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center mb-12">
        <h2 className="text-5xl font-semibold leading-tight mb-8 lg:mb-0">
          Choose a plan that fits <br className="hidden sm:block" /> your needs
        </h2>
        <Toggle />
      </div>

      {/* Pricing Cards Section */}
      <div className="grid gap-8 lg:grid-cols-3">
        {pricingDetails.map((item, index) => (
          <div
            key={index}
            className="flex flex-col p-8 bg-gray-50 border border-gray-300 rounded-2xl shadow-sm"
          >
            <h3 className="text-4xl leading-10 text-gray-900 font-semibold">
              {item.title}
            </h3>
            <p className="mt-4 text-lg leading-tight text-gray-700">
              {item.text}
            </p>
            {item?.price && (
              <h3 className="text-2xl mt-8 font-semibold">{item?.price}</h3>
            )}

            {item.subTitle && (
              <h6 className="text-md mt-10 uppercase tracking-wide text-gray-600">
                {item.subTitle}
              </h6>
            )}
            <ul className="mt-6 flex-grow space-y-3">
              {item.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700">
                  <FontAwesomeIcon
                    icon={feature.icon}
                    className={`${
                      feature.icon === "faXmark"
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  />
                  <p className="text-lg text-gray-800">{feature.text}</p>
                </li>
              ))}
            </ul>
            <button
              className={
                item.id === 3
                  ? `text-white bg-primary font-semibold text-lg leading-7 py-3 px-8 rounded-lg w-full mt-10 shadow-sm ring-1 ring-gray-400`
                  : `text-primary font-semibold text-lg leading-7 py-3 px-8 bg-white rounded-lg w-full mt-10 shadow-sm ring-1 ring-gray-400`
              }
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
