import PropTypes from "prop-types";
import InputField from "../FormInputs/InputField";
import CheckBoxDiv from "./CheckBoxDiv";
import CheckInCheckOut from "./CheckInCheckOut";
import PhotoForm from "./PhotoForm";

const PlaceUploadForm = ({ register, handleSubmit, handleFormSubmit }) => {
  return (
    <div className="border-2 border-custom-color mx-auto my-10 px-10 pb-10">
      <h1 className="text-3xl my-10 text-custom-color-2 text-center font-bold">
        Fill the Form
      </h1>
      {/* form starts */}
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <InputField
          type="text"
          name="title"
          header="Title"
          placeholder="Title for your place"
          register={register}
        />
        <InputField
          type="text"
          name="address"
          header="Address"
          placeholder="Address to your place"
          register={register}
        />
        <label className="label my-4">
          <span className="label-text font-bold text-2xl">
            Photos of Your Place
          </span>
        </label>
        <PhotoForm register={register} />
        {/* description field */}
        <div>
          <label className="label my-4">
            <span className="label-text font-bold text-2xl">Description</span>
          </label>

          <textarea
            {...register("description")}
            name="description"
            placeholder="Describe your place"
            className="textarea textarea-bordered textarea-lg w-full border-custom-color"
          ></textarea>
        </div>
        {/* description field */}
        <CheckBoxDiv register={register} />
        <div>
          <label className="label my-4">
            <span className="label-text font-bold text-2xl">Extra Info</span>
          </label>

          <textarea
            {...register("extra")}
            name="extra"
            placeholder="Extra info about your place"
            className="textarea textarea-bordered textarea-sm w-full border-custom-color"
          ></textarea>
        </div>
        {/* check in and check out time */}
        <CheckInCheckOut register={register} />
        <input
          className="bg-custom-color w-full text-white my-5 py-2 rounded-full hover:cursor-pointer"
          type="submit"
          value="Save"
        />
      </form>
      {/* form ends */}
    </div>
  );
};

PlaceUploadForm.propTypes = {
  register: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleFormSubmit: PropTypes.func,
  setPhotoLink: PropTypes.func,
  addPhotoByLink: PropTypes.func,
};

export default PlaceUploadForm;
