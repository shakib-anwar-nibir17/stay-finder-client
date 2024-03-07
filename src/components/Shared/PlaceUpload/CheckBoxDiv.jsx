import PropTypes from "prop-types";
import { CgGym } from "react-icons/cg";
import { FaHotTub, FaSwimmingPool, FaWifi } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { GiSaloon } from "react-icons/gi";
import { IoCarSportSharp } from "react-icons/io5";
import { MdNoDrinks, MdPets, MdTheaters } from "react-icons/md";
import CheckBox from "../FormInputs/CheckBox";
const CheckBoxDiv = ({ register }) => {
  return (
    <div>
      <label className="label my-4">
        <span className="label-text font-bold text-2xl">
          Perks of your Place
        </span>
      </label>
      <div className="grid grid-cols-5 gap-3">
        <CheckBox register={register} name="Parking" Icons={IoCarSportSharp} />
        <CheckBox register={register} name="Wifi" Icons={FaWifi} />
        <CheckBox register={register} name="Pets Friendly" Icons={MdPets} />
        <CheckBox register={register} name="Kitchen" Icons={FaKitchenSet} />
        <CheckBox register={register} name="Gym" Icons={CgGym} />
        <CheckBox register={register} name="Spa" Icons={FaHotTub} />
        <CheckBox
          register={register}
          name="Swimming-Pool"
          Icons={FaSwimmingPool}
        />
        <CheckBox register={register} name="Theater" Icons={MdTheaters} />
        <CheckBox register={register} name="Bar&Cafe" Icons={MdNoDrinks} />
        <CheckBox register={register} name="Saloon" Icons={GiSaloon} />
      </div>
    </div>
  );
};

CheckBoxDiv.propTypes = {
  register: PropTypes.func,
};

export default CheckBoxDiv;
