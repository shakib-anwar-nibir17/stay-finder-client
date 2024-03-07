import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import PlaceUploadForm from "../Shared/PlaceUpload/PlaceUploadForm";

const MyAccommodation = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm();
  const [show, setShow] = useState(false);
  const handleFormSubmit = (data) => {
    console.log(data);
    const hotelDoc = {
      hotelInfo: data,
      owner: user?.displayName,
      email: user?.email,
    };
    console.log(hotelDoc);
    axiosPublic
      .post("/hotels", hotelDoc)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            text: "You have successfully added you accommodations",
          });
        }
      })
      .catch((err) => console.log(err));
    reset();
  };

  return (
    <>
      <div className="min-h-screen">
        <div className="min-h-80">
          <button
            onClick={() => {
              setShow(!show);
            }}
            className="py-2 px-6 bg-sky-700 text-white rounded-full font-bold"
          >
            Add New Places
          </button>
          {show && (
            <PlaceUploadForm
              register={register}
              handleSubmit={handleSubmit}
              handleFormSubmit={handleFormSubmit}
            />
          )}
        </div>
        <div className="">Hello</div>
      </div>
    </>
  );
};

MyAccommodation.propTypes = {
  register: PropTypes.func,
};

export default MyAccommodation;
