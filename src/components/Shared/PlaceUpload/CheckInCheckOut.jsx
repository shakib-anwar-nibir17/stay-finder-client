import PropTypes from "prop-types";

const CheckInCheckOut = ({ register }) => {
  return (
    <div>
      <label className="label my-4">
        <span className="label-text font-bold text-2xl">
          Check in and Check out time
        </span>
      </label>
      <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
        <div>
          <h3 className="mt-2 -mb-1 text-custom-color-2 font-medium">
            Check in time
          </h3>
          <input
            {...register("check-in-time")}
            className="input input-bordered border-custom-color mt-2"
            type="text"
            name="check-in-time"
            placeholder="14"
          />
        </div>
        <div>
          <h3 className="mt-2 -mb-1 text-custom-color-2 font-medium">
            Check out time
          </h3>
          <input
            type="text"
            className="input input-bordered border-custom-color mt-2"
            {...register("check-out-time")}
            name="check-out-time"
            placeholder="11"
          />
        </div>
        <div>
          <h3 className="mt-2 -mb-1 text-custom-color-2 font-medium">
            Max number of guests
          </h3>
          <input
            type="number"
            className="input input-bordered border-custom-color mt-2"
            {...register("guest-number")}
            name="guest-number"
          />
        </div>
        <div>
          <h3 className="mt-2 -mb-1 text-custom-color-2 font-medium">
            Price per night
          </h3>
          <input
            type="number"
            className="input input-bordered border-custom-color mt-2"
            {...register("price")}
            name="price"
          />
        </div>
      </div>
    </div>
  );
};

CheckInCheckOut.propTypes = {
  register: PropTypes.func,
};

export default CheckInCheckOut;
