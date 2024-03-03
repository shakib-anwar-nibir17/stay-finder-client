import { Outlet } from "react-router-dom";
import Banner from "../components/Home/Banner";
import Navbar from "../components/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Banner />
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
