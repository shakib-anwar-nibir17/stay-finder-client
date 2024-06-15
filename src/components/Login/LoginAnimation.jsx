import Lottie from "lottie-react";
import loginAnimation from "../../assets/animation-data/login_animation.json";
const LoginAnimation = () => {
  return (
    <div className="w-1/4 mt-10">
      <Lottie animationData={loginAnimation} />
    </div>
  );
};

export default LoginAnimation;
