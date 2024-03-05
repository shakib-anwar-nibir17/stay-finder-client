import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import InputField from "../Shared/FormInputs/InputField";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const { userSignIn } = useAuth();
  const navigate = useNavigate();

  const submitForm = (formData) => {
    userSignIn(formData.email, formData.password)
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Check if you have typed the correct password or email",
        });
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Invalid Login Credential",
          text: "Check if you have typed the correct password or email",
        });
      });
  };
  return (
    <div className="rounded-md w-full px-6 lg:px-0 lg:w-1/3  mt-10">
      <h2 className="text-4xl text-custom-color  font-bold mt-12 text-center">
        Please Login
      </h2>
      <form onSubmit={handleSubmit(submitForm)} className="lg:card-body w-full">
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
      <div className="my-4 flex items-center px-8">
        <hr className="flex-1" />
        <div className="mx-4 text-gray-400">OR</div>
        <hr className="flex-1" />
      </div>
      <p className="text-center font-medium mt-8 mb-10">
        Do not have an account?
        <span className="text-custom-color ml-2">
          <Link to="/sign-up">Sign Up</Link>
        </span>
      </p>
    </div>
  );
};

export default LoginForm;
