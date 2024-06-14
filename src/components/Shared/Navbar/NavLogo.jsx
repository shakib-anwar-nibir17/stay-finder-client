import { Link } from "react-router-dom";
import logoImg from "../../../assets/images/logo copy.png";

const NavLogo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img
        className="hidden md:block"
        src={logoImg}
        alt="logo"
        width="60"
        height="60"
      />
      <h1 className="text-3xl font-bold hidden md:block">
        STAY <span className="text-custom-color">FINDER</span>
      </h1>
    </Link>
  );
};

export default NavLogo;
