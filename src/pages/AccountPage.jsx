import { Outlet } from "react-router-dom";
import AccountLinks from "../components/Account/AccountLinks";

const AccountPage = () => {
  return (
    <div className="min-h-screen">
      <div className="mt-8">
        <AccountLinks />
      </div>
      <Outlet />
    </div>
  );
};

export default AccountPage;
