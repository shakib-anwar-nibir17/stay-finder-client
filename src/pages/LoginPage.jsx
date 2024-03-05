import LoginAnimation from "../Animations/LoginAnimation";
import LoginForm from "../components/Login/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <LoginAnimation />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
