import React from "react";
import AboutImg1 from "../images/AboutImg1.jpeg";
import AboutImg2 from "../images/AboutImg2.jpeg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default function SliderComponent() {
  return (
    <>
      <div className="m-16 p-10">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper  w-auto"
        >
          <SwiperSlide>
            <img
              className="object-fill m-auto w-1/2 h-auto"
              src={AboutImg1}
              alt="image slide 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="object-fill m-auto w-1/2 h-auto"
              src={AboutImg2}
              alt="image slide 2"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="m-16 pb-10">
        <h1 class="mb-10 text-5xl font-bold text-yellow-300 text-center underline decoration-solid">
          Our Vision
        </h1>
        <p className="text-xl font-light leading-relaxed mt-6 mb-4 text-pink-400">
          PlateSeeker is a number plate recognition site that uses optical
          character recognition (OCR) technology to read and interpret license
          plate numbers from images. This site is can used for parking
          enforcement companies or residential complex to quickly and accurately
          identify vehicles.
          <br />
          <br />
          This number plate recognition site may also be available to the public
          for personal use, such as tracking a stolen vehicle or monitoring
          parking spaces in their residential complex. These sites typically
          require users to upload an image of vehicle, and then we use
          algorithms to analyze and extract the numbers and letters.
          <br />
          <br />
          In addition to identifying the license plate number, this site can
          also provide additional details about the vehicle, such as the make,
          number of previous owners, and whether the car has been involved in
          any accidents. By accessing a database of vehicle registration and
          history records, these sites can provide valuable insights to car
          buyers, law enforcement, and insurance companies. Car buyers can use
          these sites to obtain crucial information about a vehicle before
          making a purchase, while law enforcement and insurance companies can
          use the data to investigate and assess risk.
          <br />
          <br />
          Overall, PlateSeeker offers a fast and efficient way to gather
          important information about a vehicle, making them a valuable tool in
          many different industries.
        </p>
      </div>
    </>
  );
}
