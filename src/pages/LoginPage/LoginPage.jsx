import Login from "../../components/Login/Login";
import LoginAnimation from "../../components/Login/LoginAnimation";

const LoginPage = () => {
  return (
    <div className="flex items-center gap-10 justify-center">
      <LoginAnimation />
      <Login />
    </div>
  );
};

export default LoginPage;
