import React from "react";

export default function Footer() {
  return (
    <div className="w-full bg-[#35055B]">
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white">
        <div className="">
          <h1 className="text-3xl font-bold text-pink-500 mb-4 cursor-not-allowed">
            Plate<span className="text-white">Seeker</span>
            <span className="text-yellow-300">.</span>
          </h1>
          <p className="font-normal my-4">
            This is a Number Plate Recognition website which also provides
            additional car details. This is created keeping in mind the Final
            Year Engineering Course Project.
          </p>
        </div>
        <hr className="lg:hidden border border-yellow-300" />
        <div className="lg:col-span-2 flex justify-around mt-10">
          <div>
            <h6 className="font-semibold underline text-gray-400 mb-3">
              Our Creators
            </h6>
            <ul>
              <li className="py-2 text-sm cursor-pointer hover:text-yellow-300">
                Spandan Das Barman
              </li>
              <li className="py-2 text-sm cursor-pointer hover:text-yellow-300">
                Saurabh Kumar
              </li>
              <li className="py-2 text-sm cursor-pointer hover:text-yellow-300">
                Arijit Laha
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold underline text-gray-400 mb-3">
              Our College
            </h6>
            <ul>
              <li className="py-2 text-sm cursor-pointer hover:text-yellow-300">
                STCET, Kolkata
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold underline text-gray-400 mb-3">
              Technologies Utilised
            </h6>
            <ul>
              <li className="py-2 text-sm cursor-pointer hover:text-yellow-300">
                Python
              </li>
              <li className="py-2 text-sm cursor-pointer hover:text-yellow-300">
                React JS
              </li>
              <li className="py-2 text-sm cursor-pointer hover:text-yellow-300">
                Django
              </li>
              <li className="py-2 text-sm cursor-pointer hover:text-yellow-300">
                Pytesseract
              </li>
              <li className="py-2 text-sm cursor-pointer hover:text-yellow-300">
                SQL Lite
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold underline text-gray-400 mb-3">
              Under The Guidance of
            </h6>
            <ul>
              <li className="py-2 text-sm cursor-pointer hover:text-yellow-300">
                {"   "}Dr. Sanchita Saha Ray
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="font-normal py-1 text-center bg-pink-500 text-[#35055B]">
        ©️ 2023 PlateSeeker. | All Rights Reserved
      </p>
    </div>
  );
}
