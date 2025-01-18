import React from "react";
import { details } from "../data";

const BentoGrid = () => {
  return (
    <div className="container">
      <h2 className="text-5xl sm:font-semibold mb-14 leading-tight">
        ToDesktop handles <br className="hidden sm:flex" /> the details
      </h2>
      {/* grid-container */}
      <div
        className="flex flex-col gap-6 lg:grid lg:grid-cols-3"
        style={{ gridAutoRows: "96px" }}
      >
        <div className="row-start-1 row-end-3 group rounded-2xl bg-slate-200 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 p-[1px]">
          <div className="bg-slate-50 hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 rounded-2xl w-full h-full flex flex-col p-6 gap-6 items-center">
            <h3 className="text-2xl">{details[0].name}</h3>
            <img src={details[0].img} alt="" />
          </div>
        </div>

        <div className="row-start-1 row-end-4 group rounded-2xl bg-slate-200 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 p-[1px]">
          <div className="bg-slate-50 hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 rounded-2xl w-full h-full flex flex-col p-6 gap-6 items-center">
            <h3 className="text-2xl">{details[1].name}</h3>
            <img src={details[1].img} alt="" />
            <p className="text-lg text-center">{details[1].text}</p>
          </div>
        </div>

        <div className="row-start-1 row-end-3 group rounded-2xl bg-slate-200 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 p-[1px]">
          <div className="bg-slate-50 hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 rounded-2xl w-full h-full flex flex-col p-6 gap-6 items-center">
            <h3 className="text-2xl">{details[2].name}</h3>
            <img src={details[2].img} alt="" />
          </div>
        </div>

        <div className="row-start-3 row-end-6 group rounded-2xl bg-slate-200 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 p-[1px]">
          <div className="bg-slate-50 hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 rounded-2xl w-full h-full flex flex-col p-6 gap-6 items-center">
            <h3 className="text-2xl">{details[3].name}</h3>
            <img src={details[3].name} alt="" />
            <p className="text-lg text-center">{details[3].text}</p>
          </div>
        </div>

        <div className="row-start-4 row-end-6 group rounded-2xl bg-slate-200 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 p-[1px]">
          <div className="bg-slate-50 hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 rounded-2xl w-full h-full flex flex-col p-6 gap-6 items-center">
            <h3 className="text-2xl">{details[4].name}</h3>
            <img src={details[4].img} alt="" />
          </div>
        </div>

        <div className="row-start-3 row-end-6 group rounded-2xl bg-slate-200 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 p-[1px]">
          <div className="bg-slate-50 hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 rounded-2xl w-full h-full flex flex-col p-6 gap-6 items-center">
            <h3 className="text-2xl">{details[5].name}</h3>
            <img src={details[5].img} alt="" />
            <p className="text-lg text-center">{details[5].text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
