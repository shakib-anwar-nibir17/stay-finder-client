import PropTypes from "prop-types";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Slider = ({ id, ref1, ref2, slideImg, header, desc }) => {
  return (
    <div id={id} className="carousel-item relative w-full">
      <img src={slideImg} className="w-full h-full" />
      <div className="absolute w-1/2 bg-gradient-to-r from-[#00B98E] to-[#00000000] h-full text-white flex flex-col justify-center space-y-4">
        <h2 className="md:text-6xl text-2xl font-bold ml-5">{header}</h2>
        <p className="text-sm font-medium ml-5">{desc}</p>
        <div className="space-x-4 ml-5">
          <button className="bg-custom-color-2 font-bold border-custom-color-2 border-2 p-4 hover:bg-[#16bac5] rounded-xl">
            Discover More
          </button>
        </div>
      </div>
      <div className="absolute flex justify-end  md:bottom-0 md:right-0 space-x-5 md:mb-10 md:mr-10">
        <a
          href={`#${ref2}`}
          className="btn btn-circle bg-transparent text-white hover:bg-custom-color text-2xl"
        >
          <AiOutlineArrowLeft></AiOutlineArrowLeft>
        </a>
        <a
          href={`#${ref1}`}
          className="btn btn-circle bg-transparent text-white hover:bg-custom-color md:text-2xl"
        >
          <AiOutlineArrowRight></AiOutlineArrowRight>
        </a>
      </div>
    </div>
  );
};

Slider.propTypes = {
  id: PropTypes.string,
  header: PropTypes.string,
  desc: PropTypes.string,
  ref1: PropTypes.string,
  ref2: PropTypes.string,
  slideImg: PropTypes.string,
};

export default Slider;
