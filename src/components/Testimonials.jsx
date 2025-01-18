import React from "react";
import { clickUp, CustomerStory, toDesktopBuilder, zebImg } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faDownload } from "@fortawesome/free-solid-svg-icons";
import { ClickUpTags, testimonials } from "../data";

const Testimonials = () => {
  return (
    <div id="testimonials" className="container">
      <h2 className="text-5xl leading-[3.75rem] font-semibold mb-14">
        Customer stories
      </h2>
      <div className="rounded-xl border flex flex-col lg:flex-row items-end">
        {/* left div */}
        <div className="flex flex-col gap-12 p-8">
          <div className="h-4 w-fit">
            <img src={clickUp} alt="" />
          </div>
          <h3 className="text-xl leading-relaxed">
            ClickUp used ToDesktop to get their desktop app in front of
            customers in days instead of months.
          </h3>
          <div id="tag-container" className="flex gap-3 flex-wrap">
            {ClickUpTags.map((item, index) => (
              <div
                key={index}
                // className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800"
                className="flex items-center gap-4 bg-yellow-100 px-3 py-1 rounded text-yellow-700 text-sm"
              >
                <FontAwesomeIcon icon={faCheck} />
                <span className="font-montserrat font-medium text-base">{item.name}</span>
              </div>
            ))}
          </div>
          <p className="font-body text-lg font-light text-zinc-500 mt-12">
            “ToDesktop provided us with a
            <span className="text-black"> polished desktop app</span> in no time.
            Their expert team guided us through a smooth migration from our
            outdated legacy desktop app, enabling us to deliver
            <span className="text-black">new and improved features</span> to our
            customers within days.”
          </p>
          <div id="user-card" className="flex gap-4">
            <div className="w-12">
              <img src={zebImg} alt="" className="rounded-full" />
            </div>
            <div className="flex flex-col">
              <h3>Zeb Evans</h3>
              <p className="text-gray-500">
                Founder & CEO,{" "}
                <a href="#" className="anchor-hover">
                  ClickUp
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* right div */}
        <div>
          <img src={CustomerStory} alt="" className="" />
        </div>
      </div>
      {testimonials?.length > 0 && (
        <div className="flex flex-col lg:flex-row justify-between gap-4 mt-6">
          {/* {testimonials} */}
          {testimonials.map((item, index) => (
            <div key={index} 
            className="rounded-2xl hover:gradient-hover-outer group mt-11 mb-20"
            
            >
              <div className="rounded-2xl gradient-hover-inner min-h-[380px] flex flex-col p-10 gap-6 lg:gap-10 justify-between">
                <div className="flex flex-col items-start gap-4">
                  <div className="w-12 h-12 bg-blue-200 flex items-center justify-center rounded-full">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-lg text-color-secondary">{item.text}</p>
                <div className="flex gap-4">
                  <div className="flex">
                    <div className="-mr-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                      <img
                        src={item.pic1}
                        className="min-w-16 min-h-16"
                        alt=""
                      />
                    </div>
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-white">
                      <img src={item.pic2} alt="" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h3>{item.name}</h3>
                    <a href="#" className="anchor-hover w-fit text-gray-500">
                      {item.company}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-col bg-black rounded-xl lg:flex-row mt-6 pt-6 lg:pt-10 justify-center">
        <div className="flex flex-col gap-4 p-12 pl-14 lg:flex-1">
          <span className="font-display font-medium uppercase tracking-tight text-zinc-300">
            Ready to start building?
          </span>
          <h2 className="text-4xl text-white lg:text-5xl tracking-tight">
            Create your desktop app for free*
          </h2>

          <p className="text-lg font-light text-gray-300 lg:text-lg">
            ToDesktop Builder will take you step-by-step through the process of
            creating your first desktop app in just a few minutes.
          </p>
          <div>
            <button className="bg-primary text-white py-3 px-6 lg:px-8 rounded-lg hover:bg-opacity-90 flex justify-center items-center gap-4">
              <FontAwesomeIcon icon={faDownload} />
              <span>Download ToDesktop Builder</span>
            </button>
          </div>
          <p className="text-gray-400 text-xs italic leading-tight">
            *You can create a desktop app and run it on your computer for free.
            You will only be charged if you want to create a distributable app
            for your customers.
          </p>
        </div>
        {/* right div */}
        <div className="flex w-[92.5%] h-96 lg:h-auto self-end lg:w-[60%] lg:justify-end">
          <img src={toDesktopBuilder} alt="" className="w-[700px] max-w-full" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
