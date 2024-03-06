import { NavLink } from "react-router-dom";

const AccountLinks = () => {
  return (
    <nav className="w-full flex justify-center gap-5">
      <NavLink
        to="/account/profile"
        className={({ isActive }) =>
          isActive
            ? "bg-custom-color text-white hover:bg-custom-color py-2 px-6 rounded-3xl"
            : " hover:border-custom-color hover:border hover:bg-white py-2 px-6"
        }
      >
        My Profile
      </NavLink>
      <NavLink
        to="/account/my-bookings"
        className={({ isActive }) =>
          isActive
            ? "bg-custom-color text-white hover:bg-custom-color py-2 px-6 rounded-3xl"
            : " hover:border-custom-color hover:border hover:bg-white py-2 px-6 rounded-3xl"
        }
      >
        My Bookings
      </NavLink>
      <NavLink
        to="/account/my-recommendations"
        className={({ isActive }) =>
          isActive
            ? "bg-custom-color text-white hover:bg-custom-color py-2 px-6 rounded-3xl"
            : " hover:border-custom-color hover:border hover:bg-white py-2 px-6 rounded-3xl"
        }
      >
        My Recommendations
      </NavLink>
    </nav>
  );
};

export default AccountLinks;
