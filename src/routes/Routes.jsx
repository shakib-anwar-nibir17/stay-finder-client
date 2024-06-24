import { createBrowserRouter } from "react-router-dom";
import { getRoom } from "../api/rooms";
import DashboardLayout from "../layouts/DashboardLayout";
import Main from "../layouts/Main";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import Profile from "../pages/Dashboard/Common/Profile";
import MyBookings from "../pages/Dashboard/Guest/MyBookings";
import AddRoom from "../pages/Dashboard/Host/AddRoom";
import ManageBookings from "../pages/Dashboard/Host/ManageBookings";
import MyListings from "../pages/Dashboard/Host/MyListings";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import LoginPage from "../pages/LoginPage/LoginPage";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import RoomPage from "../pages/Rooms/Rooms";
import SignUp from "../pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import HostRoute from "./HostRoute";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/rooms",
        element: <RoomPage />,
      },
      {
        path: "/room/:id",
        element: (
          <PrivateRoute>
            <RoomDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => getRoom(params.id),
      },
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "add-room",
        element: (
          <PrivateRoute>
            <HostRoute>
              <AddRoom />
            </HostRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "my-listings",
        element: (
          <PrivateRoute>
            <HostRoute>
              <MyListings />
            </HostRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageUsers />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "my-bookings",
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-bookings",
        element: (
          <HostRoute>
            <ManageBookings />
          </HostRoute>
        ),
      },
    ],
  },
]);
