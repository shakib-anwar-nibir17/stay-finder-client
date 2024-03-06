import { createBrowserRouter } from "react-router-dom";
import MyBookings from "../components/Account/MyBookings";
import MyRecommendations from "../components/Account/MyRecommendations";
import Profile from "../components/Account/Profile";
import Main from "../layout/Main";
import AccountPage from "../pages/AccountPage";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/sign-up",
        element: <SignUpPage />,
      },
      {
        path: "/account",
        element: <AccountPage />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "my-bookings",
            element: <MyBookings />,
          },
          {
            path: "my-recommendations",
            element: <MyRecommendations />,
          },
        ],
      },
    ],
  },
]);

export default Router;
