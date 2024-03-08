import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PerkIcons from "./PerkIcons";

const HotelCard = ({ hotel }) => {
  const { _id, hotelInfo } = hotel;
  return (
    <div className="card w-96 bg-base-100 shadow-xl py-6 border border-custom-color">
      <figure>
        <img className="w-80 h-60" src={hotelInfo.image1} alt="hotel_img" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-custom-color-2">
          {hotelInfo.title}
          <div className="text-sm text-custom-color font-medium">
            {hotelInfo.address}
          </div>
        </h2>
        <button className="text-white text-sm font-bold bg-sky-700 py-2 px-8 rounded-3xl w-36">
          {hotelInfo.price}$$/night
        </button>
        <div className="card-actions justify-end">
          <PerkIcons hotelInfo={hotelInfo} />
        </div>
        <div className="space-x-3">
          <button className="px-6 py-2 bg-custom-color text-white font-bold  mt-3">
            Book Now
          </button>
          <Link to={`/hotels/details/${_id}`}>
            <button className="px-6 py-2 bg-custom-color-2 text-white font-bold mt-3">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

HotelCard.propTypes = {
  hotel: PropTypes.object,
};
export default HotelCard;
