import PropTypes from "prop-types";

const PhotoForm = ({ register }) => {
  return (
    <div className="flex gap-4 items-center relative">
      <div className="grow">
        <div className="space-x-3">
          <input
            {...register("image-1")}
            type="text"
            name="image-1"
            placeholder="paste your image url"
            className="input input-bordered border-custom-color"
            required
          />
          <input
            {...register("image-2")}
            type="text"
            name="image-2"
            placeholder="paste your image url"
            className="input input-bordered border-custom-color"
            required
          />
          <input
            {...register("image-3")}
            type="text"
            name="image-3"
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
