import Login from "../../components/Login/Login";
import LoginAnimation from "../../components/Login/LoginAnimation";

const LoginPage = () => {
  return (
    <div className="flex items-center gap-10 justify-center">
      <div className="p-4 text-sm border border-teal-500 my-10">
        <h1>TEST AUTHENTICATION DETAILS</h1>
        <p>Guest: testuser1@gmail.com</p>
        <p>Host: testhost@gmail.com</p>
        <p>Admin: admin1@gmail.com</p>
        <p>Pass: 12345678</p>
      </div>
      <LoginAnimation />
      <Login />
    </div>
  );
};

export default LoginPage;
