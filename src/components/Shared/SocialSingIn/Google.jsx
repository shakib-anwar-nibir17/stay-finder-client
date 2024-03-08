import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Google = () => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const newUser = result.user;
        const userInfo = {
          email: newUser.email,
          name: newUser.displayName,
        };
        axiosPublic
          .post("/users", userInfo)
          .then((res) => {
            console.log(res.data);
            Swal.fire({
              title: "Success",
              icon: "success",
            });
          })
          .catch((error) => console.log(error));
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <button onClick={handleGoogleSignIn}>
      <div className="mx-auto flex h-[50px] w-[200px] items-center overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow">
        <div className="flex h-full w-[50%] items-center bg-[#00B98E] pl-4 text-sm text-white">
          Sign With
        </div>
        <span className="right-0 top-0 h-0 w-0 -rotate-90 border-b-[50px] border-r-[50px] border-b-transparent border-r-[#00B98E] group-hover:hidden"></span>
        <span className="pr-4 text-4xl font-bold text-[#00B98E]">G+</span>
      </div>
    </button>
  );
};

export default Google;
