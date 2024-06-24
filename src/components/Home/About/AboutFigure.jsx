import figure from "../../../assets/images/The-Oberoi-Amarvilas-Agra-2.jpg";

const AboutFigure = () => {
  return (
    <>
      <div
        style={{ clipPath: "polygon(0 0, 19% 0, 58% 100%, 0% 100%)" }}
        className="bg-custom-color flex-1 min-h-[600px] p-10 box-border relative hidden lg:block"
      ></div>
      <div className="lg:absolute px-4 lg:px-20">
        <img className="w-[400px] lg:w-[700px] h-[500px]" src={figure} alt="" />
      </div>
    </>
  );
};

export default AboutFigure;

// style={{ clipPath: "polygon(0 0, 19% 0, 58% 100%, 0% 100%)" }}
