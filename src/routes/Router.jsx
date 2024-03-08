import { createBrowserRouter } from "react-router-dom";
import MyAccommodation from "../components/Account/MyAccommodation";
import MyBookings from "../components/Account/MyBookings";
import Main from "../layout/Main";
import AccountPage from "../pages/AccountPage";
import ErrorPage from "../pages/ErrorPage";
import Homepage from "../pages/Homepage";
import HotelDetailsPage from "../pages/HotelDetailsPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
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
            path: "my-bookings",
            element: <MyBookings />,
          },
          {
            path: "my-accommodation",
            element: <MyAccommodation />,
          },
        ],
      },
      {
        path: "/hotels/details/:id",
        element: <HotelDetailsPage />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/hotels/details/${params.id}`),
      },
    ],
  },
]);

export default Router;
