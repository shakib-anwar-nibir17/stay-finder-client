import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import InputField from "../Shared/FormInputs/InputField";
import SignUpBanner from "./SignUpBanner";

const SignUpForm = () => {
  const { register, handleSubmit } = useForm();
  const { createUser, handleUpdateProfile, logOut } = useAuth();
  const navigate = useNavigate();

  const submitForm = (formData) => {
    createUser(formData.email, formData.password)
      .then((res) => {
        console.log(res.user);
        //update profile
        handleUpdateProfile(formData.name).then(() => {
          logOut()
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
          Swal.fire({
            icon: "success",
            text: "You have successfully Registered",
          });
          navigate("/login");
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex h-screen items-center justify-center p-6 md:p-0">
      <div className="flex h-full w-full overflow-hidden rounded-xl shadow-md  md:h-[90%] md:w-[80%] lg:h-[80%]">
        <SignUpBanner />
        {/* input side  */}
        <div className="flex w-full flex-col justify-center bg-white py-6 lg:w-[70%]">
          <h2 className="pb-8 text-center text-3xl font-bold text-[#00B98E]">
            Sign up Here
          </h2>
          <form
            onSubmit={handleSubmit(submitForm)}
            className="lg:card-body w-[60%] mx-auto"
          >
            <InputField
              register={register}
              name="name"
              header="Name"
              placeholder="Your name"
              type="text"
            />
            <InputField
              register={register}
              name="email"
              header="Email"
              placeholder="Your email"
              type="email"
            />
            <InputField
              register={register}
              name="password"
              header="Password"
              placeholder="password"
              type="password"
            />
            <div className="form-control mt-6">
              <button className="btn bg-custom-color text-white font-semibold hover:bg-custom-color-2">
                Sign in
              </button>
            </div>
          </form>
          {/* divider  */}
          <div className="my-4 flex items-center px-8">
            <hr className="flex-1" />
            <div className="mx-4 text-gray-400">OR</div>
            <hr className="flex-1" />
          </div>
          {/* sign with google */}
          <button>
            <div className="mx-auto flex h-[50px] w-[200px] items-center overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow">
              <div className="flex h-full w-[50%] items-center bg-[#00B98E] pl-4 text-sm text-white">
                Sign With
              </div>
              <span className="right-0 top-0 h-0 w-0 -rotate-90 border-b-[50px] border-r-[50px] border-b-transparent border-r-[#00B98E] group-hover:hidden"></span>
              <span className="pr-4 text-4xl font-bold text-[#00B98E]">G+</span>
            </div>
          </button>
          <p className="text-center font-medium mt-8 mb-10">
            Already have an account?
            <span className="text-custom-color ml-2">
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
