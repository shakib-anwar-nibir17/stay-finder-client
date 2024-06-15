/* eslint-disable react/prop-types */
import { SquareLoader } from "react-spinners";

const Loader = ({ smallHeight }) => {
  return (
    <div
      className={` ${smallHeight ? "h-[250px]" : "h-[70vh]"}
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      <SquareLoader size={100} color="#00B98E" />
    </div>
  );
};

export default Loader;
