import { Outlet } from "react-router-dom";
import AccountLinks from "../components/Account/AccountLinks";

const AccountPage = () => {
  return (
    <div>
      <h1>Account Page</h1>
      <AccountLinks />
      <Outlet />
    </div>
  );
};

export default AccountPage;
