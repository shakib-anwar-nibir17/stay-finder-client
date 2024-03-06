import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import logo from "../../../assets/images/logo.png";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleSignOut = () => {
    logOut()
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };
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
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "bg-custom-color text-white hover:bg-custom-color"
              : " hover:border-custom-color hover:border hover:bg-white"
          }
        >
          Login
        </NavLink>
      </li>
      {!!user && (
        <li className="mr-2">
          <NavLink
            to="/account/profile"
            className={({ isActive }) =>
              isActive
                ? "bg-custom-color text-white hover:bg-custom-color"
                : " hover:border-custom-color hover:border hover:bg-white"
            }
          >
            Account
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar shadow-md">
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
          <Link className="flex items-center gap-2 border border-custom-color rounded-full py-2 px-4 ">
            <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 relative top-1"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              {!!user && (
                <div className="flex items-center gap-3">
                  <h1 className="text-custom-color font-bold">
                    {user.displayName}
                  </h1>
                  <button
                    onClick={handleSignOut}
                    className="btn btn-sm bg-custom-color-2 text-white hover:bg-red-500"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
