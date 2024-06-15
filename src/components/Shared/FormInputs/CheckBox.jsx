import PropTypes from "prop-types";

const CheckBox = ({ register, name, Icons }) => {
  return (
    <>
      <div>
        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer text-custom-color-2 font-bold border-custom-color">
          <input {...register(name)} type="checkbox" name={name} />
          <Icons />
          <span>{name}</span>
        </label>
      </div>
    </>
  );
};

CheckBox.propTypes = {
  register: PropTypes.func,
  name: PropTypes.string,
  Icons: PropTypes.elementType,
};

export default CheckBox;
