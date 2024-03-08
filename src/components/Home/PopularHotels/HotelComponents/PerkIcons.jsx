/* eslint-disable react/prop-types */
import { CgGym } from "react-icons/cg";
import { FaHotTub, FaSwimmingPool, FaWifi } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { GiSaloon } from "react-icons/gi";
import { IoCarSportSharp } from "react-icons/io5";
import { MdNoDrinks, MdPets, MdTheaters } from "react-icons/md";
const PerkIcons = ({ hotelInfo }) => {
  return (
    <div className="space-x-2">
      {hotelInfo.Wifi && (
        <div className="badge badge-outline">
          <FaWifi />
        </div>
      )}
      {hotelInfo.Gym && (
        <div className="badge badge-outline">
          <CgGym />
        </div>
      )}
      {hotelInfo.Spa && (
        <div className="badge badge-outline">
          <FaHotTub />
        </div>
      )}
      {hotelInfo["Swimming-Pool"] && (
        <div className="badge badge-outline">
          <FaSwimmingPool />
        </div>
      )}
      {hotelInfo.Kitchen && (
        <div className="badge badge-outline">
          <FaKitchenSet />
        </div>
      )}
      {hotelInfo.Saloon && (
        <div className="badge badge-outline">
          <GiSaloon />
        </div>
      )}
      {hotelInfo.Parking && (
        <div className="badge badge-outline">
          <IoCarSportSharp />
        </div>
      )}
      {hotelInfo["Bar&Cafe"] && (
        <div className="badge badge-outline">
          <MdNoDrinks />
        </div>
      )}
      {hotelInfo["Pets Friendly"] && (
        <div className="badge badge-outline">
          <MdPets />
        </div>
      )}
      {hotelInfo.Theater && (
        <div className="badge badge-outline">
          <MdTheaters />
        </div>
      )}
    </div>
  );
};

export default PerkIcons;
