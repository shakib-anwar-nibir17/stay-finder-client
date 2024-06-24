import AOS from "aos";
import "aos/dist/aos.css";

import { TiTick } from "react-icons/ti";
const AboutInfo = () => {
  const bulletPoints = [
    {
      id: 1,
      desc: "Providing insight into its dedication to serving diverse traveler needs.",
    },
    {
      id: 2,
      desc: "Communicates the platforms commitment to a wide array of accommodations.",
    },
    {
      id: 3,
      desc: "Provides a welcoming introduction to the platform and 24/7 supports guaranteed",
    },
  ];
  AOS.init();
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1000"
      className="text-custom-color-2 flex-1 px-12 my-6 md:my-0"
    >
      <h1 className="text-5xl font-bold">#1 Place To Find The Perfect Stay</h1>
      <div className="mt-6">
        <p>
          Welcome to our platform! We are dedicated to helping you discover your
          ideal accommodations, whether you are seeking a cozy getaway or a
          luxurious retreat.
        </p>
        <ul className="mt-6">
          {bulletPoints.map((point) => (
            <li key={point.id} className="inline-flex items-center gap-3">
              <TiTick className="text-3xl text-custom-color" /> {point.desc}
            </li>
          ))}
        </ul>
        <div>
          <button className="px-6 py-2 bg-custom-color text-white font-bold hover:bg-custom-color-2 mt-3">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
