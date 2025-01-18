import React, { useEffect } from "react";
import {
  faArrowRight,
  faFileCode,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";
import { faHand } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import leftDownArrow from "../assets/left-down-arrow.svg";
import rightDownArrow from "../assets/right-down-arrow.svg";
import {
  line1Items,
  line1ItemsLg,
  line2Items,
  line2ItemsLg,
  line3Items,
} from "../data.js";
import { setUpIntersectionObserver } from "../hook/useScrollAnimation.js";
import useIsLgScreen from "../hook/useIsLg.js";

const Hero = () => {
  const isLg = useIsLgScreen();

  useEffect(() => {
    const line1 = document.getElementById("line1");
    const line2 = document.getElementById("line2");
    const line3 = document.getElementById("line3");
    setUpIntersectionObserver(line1, true, 0.15, isLg);
    setUpIntersectionObserver(line2, false, 0.15, isLg);
    setUpIntersectionObserver(line3, true, 0.15, isLg);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-purple-50 via-orange-50 to-transparent">
      <div className="max-w-4xl mx-auto px-6 pt-6 pb-32 flex flex-col sm:text-center sm:items-center sm:pt-12">
        <div
          id="version-text"
          className="flex items-center my-6 gap-2 border border-yellow-300 bg-yellow-50 rounded-lg px-3 py-1 w-fit shadow-md hover:shadow-lg hover:-translate-y-1 transition group"
        >
          <div className="w-2 h-2 bg-yellow-400 rounded-full border border-yellow-600"></div>
          <p className="font-display font-medium text-yellow-600">v0.25.0</p>
          <FontAwesomeIcon
            className="text-yellow-600 group-hover:translate-x-1 transition duration-300"
            icon={faArrowRight}
          />
        </div>
        <div className="hidden sm:flex gap-8 my-6">
          <div className="flex justify-center items-center gap-2 text-gray-500 text-sm">
            <i>
              <FontAwesomeIcon icon={faFileCode} />
            </i>
            <p>Code Optional</p>
          </div>
          <div className="flex justify-center items-center gap-2 text-gray-500 text-sm">
            <i>
              <FontAwesomeIcon icon={faHand} />
            </i>
            <p>Drag & drop builder</p>
          </div>
          <div className="flex justify-center items-center gap-2 text-gray-500 text-sm">
            <i>
              <FontAwesomeIcon icon={faLaptop} />
            </i>
            <p>Windows, Mac, Linux</p>
          </div>
        </div>
        <h1 className="text-5xl font-semibold text-black leading-2 mt-4 sm:text-7xl">
          Web app to desktop app in minutes
        </h1>
        <p className="text-xl mt-8 sm:text-2xl text-text-color-primary sm:leading-normal ">
          Take your web app codebase and transform it into a cross platform
          desktop app with native functionality.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 sm:justify-center">
          <button className="px-6 py-3 font-semibold rounded-lg text-white bg-primary shadow-sm hover:bg-opacity-90">
            Download now
          </button>
          <button className="px-6 py-3 font-semibold rounded-lg bg-white border border-gray-400 hover:border-gray-800">
            Read Docs
          </button>
        </div>
      </div>
      {/* companies-container */}
      <div className="flex flex-col gap-8 overflow-hidden">
        <div className="flex justify-center gap-2 items-center">
          <img className="translate-y-2" src={leftDownArrow} alt="" />
          <span className="text-lg font-semibold">
            Apps powered by ToDesktop
          </span>
          <img
            className="translate-y-2 -scale-x-100"
            src={rightDownArrow}
            alt=""
          />
        </div>
        {/* companies-lines-group */}
        <div className="flex flex-col gap-4">
          <div
            id="line1"
            className="flex gap-4 w-screen -translate-x-48 transition-transform ease-linear"
          >
            {isLg ? (
              <>
                {line1ItemsLg.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-12 h-12 md:w-16 md:h-16"
                    />
                    <span className="text-[12px] md:text-[16px] font-semibold">
                      {item.name}
                    </span>
                  </div>
                ))}
              </>
            ) : (
              <>
                {line1Items.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-12 h-12 md:w-16 md:h-16"
                    />
                    <span className="text-[12px] md:text-[16px] font-semibold">
                      {item.name}
                    </span>
                  </div>
                ))}
              </>
            )}
          </div>

          <div
            id="line2"
            className="flex gap-4 w-screen -translate-x-36 transition-transform ease-linear"
          >
            {isLg ? (
              <>
                {/* img */}
                {line2ItemsLg.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32"
                  >
                    <img
                      src={item.img}
                      alt=""
                      className="w-12 h-12 md:w-16 md:h-16"
                    />
                    <span className="text-[12px] md:text-[16px] font-semibold">
                      {item.name}
                    </span>
                  </div>
                ))}
              </>
            ) : (
              <>
                {/* img */}
                {line2Items.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32"
                  >
                    <img
                      src={item.img}
                      alt=""
                      className="w-12 h-12 md:w-16 md:h-16"
                    />
                    <span className="text-[12px] md:text-[16px] font-semibold">
                      {item.name}
                    </span>
                  </div>
                ))}
              </>
            )}
          </div>

          <div
            id="line3"
            className="flex md:hidden gap-4 w-screen -translate-x-48 transition-transform ease-linear"
          >
            {/* img */}
            {line3Items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32"
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-12 h-12 md:w-16 md:h-16"
                />
                <span className="text-[12px] md:text-[16px] font-semibold">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
