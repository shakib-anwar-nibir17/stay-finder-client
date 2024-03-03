import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="mr-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-custom-color text-white hover:bg-custom-color"
              : " hover:border-custom-color hover:border hover:bg-white"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="mr-2">
        <NavLink
          to="/booking"
          className={({ isActive }) =>
            isActive
              ? "bg-custom-color text-white hover:bg-custom-color"
              : " hover:border-custom-color hover:border hover:bg-white"
          }
        >
          Booking
        </NavLink>
      </li>
      <li className="mr-2">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "bg-custom-color text-white hover:bg-custom-color"
              : " hover:border-custom-color hover:border hover:bg-white"
          }
        >
          About
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="flex items-center">
            <Link to="/">
              <img className="w-20 h-20" src={logo} alt="" />
            </Link>
            <h1 className="text-3xl font-bold">
              STAY <span className="text-custom-color">FINDER</span>
            </h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
