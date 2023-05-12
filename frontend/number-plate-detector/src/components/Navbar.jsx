import React, { useState, useEffect } from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [navColor, setNavColor] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleClick = () => {
    setNav(false);
  };

  return (
    <div className={`w-full top-0 sticky z-20 bg-[#35055B] rounded-md`}>
      <div className="text-white flex justify-between items-center h-20 mx-auto max-w-[1240px] px-4">
        <h1 className="text-3xl font-bold text-pink-500 cursor-not-allowed">
          Plate<span className="text-white">Seeker</span>
          <span className="text-yellow-300">.</span>
        </h1>
        <ul className="hidden md:flex md:items-center">
          <li className="cursor-pointer mx-5">
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive
                  ? "text-yellow-300 border-b-2 border-yellow-300"
                  : "hover:text-yellow-300";
              }}
            >
              Home
            </NavLink>
          </li>
          <li className="cursor-pointer mx-5">
            <NavLink
              to="/service"
              className={({ isActive }) => {
                return isActive
                  ? "text-yellow-300 border-b-2 border-yellow-300"
                  : "hover:text-yellow-300";
              }}
            >
              Service
            </NavLink>
          </li>
          <li className="cursor-pointer mx-5">
            <NavLink
              to="/about"
              className={({ isActive }) => {
                return isActive
                  ? "text-yellow-300 border-b-2 border-yellow-300"
                  : "hover:text-yellow-300";
              }}
            >
              About
            </NavLink>
          </li>
          <NavLink to="/service">
            <li className="p-4 cursor-pointer">
              <button className="px-6 h-10 bg-gradient-to-r from-violet-800 to-pink-600 rounded-md font-semibold border border-pink-500 hover:shadow-lg hover:shadow-pink-500 text-yellow-300">
                Try now
              </button>
            </li>
          </NavLink>
        </ul>
      </div>
      <div className="bg-violet-800 h-[0.01vh]"></div>
    </div>
  );
}

export default Navbar;
