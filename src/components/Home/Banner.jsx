import slider1 from "../../assets/images/Image00001.jpg";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Banner = () => {
  return (
    <div className="flex">
      <div className="w-1/2 flex items-center">
        <div className="space-y-4">
          <div
            className="text-5xl  text-custom-color-2 font-bold"
            style={{ lineHeight: "1.5" }}
          >
            Discover Your <span></span>
            <span className="text-custom-color">Perfect Stay</span>, Every Time{" "}
            <span></span>
            <span className="text-custom-color">Stay Finder</span> Your Ultimate
            Hotel Booking Companion!
          </div>
          <button className="btn bg-custom-color p-4 text-white hover:bg-border hover:bg-white hover:border-custom-color hover:text-custom-color">
            DISCOVER MORE
          </button>
        </div>
      </div>
      <div className="carousel w-1/2 h-[800px]">
        <div id="slide1" className="carousel-item w-full relative">
          <img src={slider1} className="w-full h-full" />
          <div className="absolute flex justify-between bottom-10 right-10 space-x-5   z-10">
            <a
              href="#slide2"
              className="btn btn-circle bg-custom-color text-white border border-custom-color hover:bg-custom-color text-4xl"
            >
              <AiOutlineArrowLeft></AiOutlineArrowLeft>
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-custom-color text-white border border-custom-color hover:bg-custom-color text-4xl"
            >
              <AiOutlineArrowRight></AiOutlineArrowRight>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
