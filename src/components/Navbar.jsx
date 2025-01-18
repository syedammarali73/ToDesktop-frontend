import React, { useState } from "react";
import { logo } from "../assets";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import electronLogo from "../assets/electron-icon.E8mrXtZM.svg";
import {Link} from "react-router"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-3 bg-white flex justify-between items-center">
      <Link to={'/'} id="brand" className="flex gap-2 items-center flex-1">
        <img src={logo} alt="" className="object-cover max-w-12 max-h-12" />
        <span className="text-lg font-medium font-display">ToDesktop</span>
      </Link>
      <div id="nav-menu" className="hidden lg:flex gap-12">
        <a href="#pricing" className="font-semibold hover:text-primary">
          Pricing
        </a>
        <a href="#" className="font-semibold hover:text-primary">
          Docs
        </a>
        <Link to={"#"} className="font-semibold hover:text-primary">
          Changelog
        </Link>
        <Link to={'/blog'} className="font-semibold hover:text-primary">
          Blogs
        </Link>
        <Link to={"#"} className="font-semibold hover:text-primary">
          Login
        </Link>
      </div>

      <div className="hidden lg:flex flex-1 justify-end">
      <button className="lg:flex items-center gap-2 border border-gray-400 hover:border-gray-600 px-6 py-2 rounded-lg">
        <img src={electronLogo} alt="" />
        <span>Electron Developers</span>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
      </div>
      <button className="p-2 lg:hidden" onClick={handleMenu}>
        <i className="text-gray-600">
          <FontAwesomeIcon icon={faBars} />
        </i>
      </button>

      <div className={isMenuOpen ? `hidden fixed bg-white inset-0 p-3` : 'z-10 lg:hidden fixed bg-white inset-0 p-3'} onClick={handleMenu}>
        <div id="nav-bar" className="flex justify-between">
          <Link to={"/"} id="brand" className="flex gap-2 items-center">
            <img src={logo} alt="" className="object-cover max-w-12 max-h-12" />
            <span className="text-lg font-medium font-display">ToDesktop</span>
          </Link>

          <button className="p-2 lg:hidden" onClick={handleMenu}>
            <i className="text-gray-600">
            <FontAwesomeIcon icon={faXmark} />
            </i>
          </button>
        </div>
        <div className="flex flex-col mt-6">
        <a href="#pricing" className="font-medium p-3 m-3 hover:bg-gray-50 block rounded-lg">
          Pricing
        </a>
        <Link to={"#"} className="font-medium p-3 m-3 hover:bg-gray-50 block rounded-lg">
          Docs
        </Link>
        <Link to={"#"} className="font-medium p-3 m-3 hover:bg-gray-50 block rounded-lg">
          Changelog
        </Link>
        <Link to={"/blog"} className="font-medium p-3 m-3 hover:bg-gray-50 block rounded-lg">
          Blogs
        </Link>
        <Link to={"#"} className="font-medium p-3 m-3 hover:bg-gray-50 block rounded-lg">
          Login
        </Link>
        </div>
        <div className="h-[1px] bg-gray-300"></div>

        <button className="mt-6 w-full flex gap-2 items-center px-6 py-4 rounded-lg hover:bg-gray-50">
        <img src={electronLogo} alt="" />
        <span>Electron Developers</span>
      </button>
      </div>
    </nav>
  );
};

export default Navbar;
