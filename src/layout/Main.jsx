import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
