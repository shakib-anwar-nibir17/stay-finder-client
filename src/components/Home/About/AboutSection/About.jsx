import AboutFigure from "../AboutFigure";
import AboutInfo from "../AboutInfo";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center mt-20">
      <AboutFigure />
      <AboutInfo />
    </div>
  );
};

export default About;
