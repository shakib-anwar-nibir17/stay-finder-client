import { NavLink } from "react-router-dom";

const NavMenu = () => {
  const activeLink = "bg-custom-color text-white rounded-full";
  const normalLink = "";
  return (
    <ul className="flex items-center justify-between gap-6 text-custom-color-2">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        <li className="cursor-pointer  rounded-full  px-6 py-2 hover:text-white hover:bg-custom-color">
          Home
        </li>
      </NavLink>
      <NavLink
        to="/service"
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        <li className="cursor-pointer  rounded-full px-6 py-2 hover:text-white hover:bg-custom-color">
          Services
        </li>
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        <li className="cursor-pointer  rounded-full px-6 py-2 hover:text-white hover:bg-custom-color">
          About
        </li>
      </NavLink>
    </ul>
  );
};

export default NavMenu;
