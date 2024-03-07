import PropTypes from "prop-types";

const InputField = ({ register, header, type, name, placeholder }) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text font-bold text-2xl">{header}</span>
      </label>
      <input
        {...register(name)}
        type={type}
        name={name}
        placeholder={placeholder}
        className="input input-bordered border-custom-color"
        defaultValue=""
        required
      />
    </div>
  );
};

InputField.propTypes = {
  header: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  error: PropTypes.string,
};

export default InputField;
