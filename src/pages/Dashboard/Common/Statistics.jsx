import { Helmet } from "react-helmet-async";
import AdminStatistics from "../../../components/Dashboard/Statistics/AdminStatistics";
import GuestStatistics from "../../../components/Dashboard/Statistics/GuestStatistics";
import HostStatistics from "../../../components/Dashboard/Statistics/HostStatistics";
import useRole from "../../../hooks/useRole";

const Statistics = () => {
  const [role] = useRole();
  console.log(role);
  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      {role === "guest" && <GuestStatistics />}
      {role === "host" && <HostStatistics />}
      {role === "admin" && <AdminStatistics />}
    </div>
  );
};

export default Statistics;
