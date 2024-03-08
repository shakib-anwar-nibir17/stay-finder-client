import { BsFillBuildingsFill } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const AccountLinks = () => {
  const generateClassName = (isActive) => {
    const baseClassName =
      "py-2 px-6 rounded-3xl inline-flex items-center gap-2";
    if (isActive) {
      return `bg-custom-color text-white hover:bg-custom-color ${baseClassName}`;
    } else {
      return `text-custom-color-2 font-bold hover:border-custom-color hover:border hover:bg-white ${baseClassName}`;
    }
  };
  return (
    <nav className="w-full flex justify-center gap-5">
      <NavLink
        to="/account/my-bookings"
        className={({ isActive }) => generateClassName(isActive)}
      >
        <FaShoppingBag />
        My Bookings
      </NavLink>
      <NavLink
        to="/account/my-accommodation"
        className={({ isActive }) => generateClassName(isActive)}
      >
        <BsFillBuildingsFill />
        My Accommodations
      </NavLink>
    </nav>
  );
};

export default AccountLinks;
