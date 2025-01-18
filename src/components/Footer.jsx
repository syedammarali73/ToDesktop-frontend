import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/logo.avif";
import { yCombinator } from "../assets";

const Footer = () => {
  return (
    <footer className="container">
      <div className="rounded-lg border bg-gray-50 flex flex-col items-center px-8 py-12 gap-8 lg:flex-row-reverse lg:border-none lg:bg-gray-50">
        <a href="#" className="font-light font-display">
          Documentation
        </a>
        <div className="flex gap-8 text-lg">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
          <a href="" id="brand" className="flex gap-2 items-center flex-1">
            <img src={logo} alt="" className="object-cover max-w-12 max-h-12" />
            <span className="text-lg font-medium font-display">ToDesktop</span>
          </a>
      </div>

      <div className="flex flex-col gap-6 items-center justify-center my-12">
      <div className="flex gap-2 items-center justify-center">
        <img className="w-4 h-4" src={yCombinator} alt="" />
        <p className="text-sm text-gray-600">A Y Combinator company.</p>
      </div>
      <p className="text-sm text-gray-400">© 2025 ToDesktop, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
