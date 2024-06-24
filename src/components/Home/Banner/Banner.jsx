import slider1 from "../../../assets/images/Image00001.jpg";
import slider2 from "../../../assets/images/Image00002.jpg";
import slider3 from "../../../assets/images/Image00003.jpg";
import slider4 from "../../../assets/images/Image00004.jpg";

import Slider from "./Slider";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[800px] bg-white">
        <Slider
          id="slide1"
          header="Right Price, Best Deal!"
          desc="With Stay Finder, discovering your ideal accommodation is just the beginning. We guarantee to match you with the perfect stay at the right price, ensuring you seal the deal on your dream getaway without breaking the bank."
          ref1="slide2"
          ref2="slide4"
          slideImg={slider1}
        />
        <Slider
          id="slide2"
          header="Seamless Stays Await"
          desc="Say goodbye to travel hassles and hello to seamless stays with Stay Finder. Explore and unlock destinations effortlessly, knowing that our app guarantees a hassle-free booking experience, leaving you to focus on creating unforgettable memories."
          ref1="slide3"
          ref2="slide1"
          slideImg={slider2}
        />
        <Slider
          id="slide3"
          header="Navigate, Book, Relax"
          desc="No matter where your travels take you, Stay Finder ensures a stress-free journey from start to finish. Navigate through endless options, book with ease, and relax knowing that Stay Finder is your reliable companion for all your accommodation needs"
          ref1="slide4"
          ref2="slide2"
          slideImg={slider3}
        />
        <Slider
          id="slide4"
          header="Elevate Your Getaways"
          desc=" Elevate your travel experiences with Stay Finder as your trusted companion. Let us help you find the perfect stay that suits your preferences, ensuring that every getaway is nothing short of exceptional. Discover unparalleled comfort and convenience with Stay Finder"
          ref1="slide1"
          ref2="slide3"
          slideImg={slider4}
        />
      </div>
    </div>
  );
};

export default Banner;
