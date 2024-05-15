import { Link } from "react-router-dom";
import logoImg from "../../../assets/images/logo copy.png";

const NavLogo = () => {
  return (
    <Link to="/">
      <img
        className="hidden md:block"
        src={logoImg}
        alt="logo"
        width="60"
        height="60"
      />
    </Link>
  );
};

export default NavLogo;
