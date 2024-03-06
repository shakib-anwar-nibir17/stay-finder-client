import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import PlaceUploadForm from "../Shared/PlaceUpload/PlaceUploadForm";

const MyAccommodation = () => {
  const { register } = useForm();
  const [show, setShow] = useState(false);
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
          {show && <PlaceUploadForm register={register} />}
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
