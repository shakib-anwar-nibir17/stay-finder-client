/* eslint-disable react/prop-types */
const ToggleBtn = ({ toggleHandler }) => {
  return (
    <>
      <label
        htmlFor="Toggle3"
        className="inline-flex w-full justify-center items-center px-2 rounded-md cursor-pointer text-gray-800"
      >
        <input
          onChange={toggleHandler}
          id="Toggle3"
          type="checkbox"
          className="hidden peer"
        />
        <span className="px-4 py-1 rounded-l-md bg-[#00B98E] peer-checked:bg-[#0E2E50] text-white">
          Guest
        </span>
        <span className="px-4 py-1 rounded-r-md bg-[#0E2E50] peer-checked:bg-[#00B98E] text-white">
          Host
        </span>
      </label>
    </>
  );
};

export default ToggleBtn;
