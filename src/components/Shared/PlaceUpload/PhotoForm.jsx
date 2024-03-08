import PropTypes from "prop-types";

const PhotoForm = ({ register }) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="grow">
        <div className="space-x-3">
          <input
            {...register("image1")}
            type="text"
            name="image1"
            placeholder="paste your image url"
            className="input input-bordered border-custom-color"
            required
          />
          <input
            {...register("image2")}
            type="text"
            name="image2"
            placeholder="paste your image url"
            className="input input-bordered border-custom-color"
            required
          />
          <input
            {...register("image3")}
            type="text"
            name="image3"
            placeholder="paste your image url"
            className="input input-bordered border-custom-color"
            required
          />
        </div>
      </div>
    </div>
  );
};

PhotoForm.propTypes = {
  register: PropTypes.func,
};

export default PhotoForm;
