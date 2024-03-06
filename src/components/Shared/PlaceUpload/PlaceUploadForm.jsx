import PropTypes from "prop-types";
import InputField from "../FormInputs/InputField";
const PlaceUploadForm = ({ register }) => {
  return (
    <div className="border-2 border-custom-color my-10 px-10 pb-10">
      <h1 className="text-3xl my-10 text-custom-color-2">Fill the Form</h1>
      {/* form starts */}
      <form>
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
        <div className="flex gap-4 items-center relative">
          <div className="grow">
            <InputField
              type="text"
              name="image-link-text"
              header="Upload by Link"
              placeholder="paste your image url"
              register={register}
            />
          </div>
          <button className="bg-custom-color-2 text-white px-4 py-2 mt-11 rounded-xl">
            Add
          </button>
        </div>
      </form>
      {/* form ends */}
    </div>
  );
};

PlaceUploadForm.propTypes = {
  register: PropTypes.func,
};

export default PlaceUploadForm;
