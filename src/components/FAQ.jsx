import React from "react";
import { Faqs } from "../data";
import ToggleFAQ from "./ToggleFAQ";

const FAQ = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-5xl font-semibold leading-tight mb-8">FAQs</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {Faqs.map((item) => {
          return <ToggleFAQ item={item} key={item.id} />;
        })}
      </div>
      <p className="mt-8 text-lg"><span className="text-gray-700">More questions? Visit our</span> <span className="cursor-pointer anchor-hover">docs.</span> <span className="text-gray-700">Or</span> <span className="cursor-pointer anchor-hover">send us a message.</span></p>
    </div>
  );
};

export default FAQ;
