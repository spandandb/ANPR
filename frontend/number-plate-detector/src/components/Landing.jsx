import React from "react";
import bgImg from "../images/landing.jpg";
import Typed from "react-typed";
import { NavLink } from "react-router-dom";

export default function Landing() {
  return (
    <div id="home h-[50vh]">
      <img className="w-full" src={bgImg} alt="" />
      <div className="max-w-[800px] mx-auto text-center flex flex-col justify-left absolute top-1/2 left-1/4 -translate-x-1/2">
        <p className="text-white font-bold p-2 text-lg md:text-2xl">
          ONE STOP SOLUTION FOR SECURING YOUR
        </p>
        <h1 className="text-pink-500 text-6xl font-bold md:py-2">
          Residential Complex<span className="text-yellow-300">.</span>
        </h1>
        <div className="flex justify-center items-center">
          <p className="text-white text-md sm:text-xl md:text-3xl font-semibold py-2">
            We offer{" "}
          </p>
          <Typed
            className="text-yellow-300 font-bold text-md sm:text-xl md:text-3xl ml-2"
            strings={[
              "Number Plate Verification",
              "Vehicle Details Extraction",
            ]}
            typeSpeed={160}
            backSpeed={160}
            loop
          />
        </div>
        <div>
          <NavLink to="/service">
            <button
              className="my-5 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800
          hover:text-yellow-300"
            >
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Get Started
              </span>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
