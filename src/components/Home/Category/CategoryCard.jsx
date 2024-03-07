import PropTypes from "prop-types";
const CategoryCard = ({ hotel }) => {
  const { id, type, image, amount } = hotel;
  const duration = 500 + id * 100;

  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration={duration}
      className="bg-[#effdf5] p-4 rounded-md"
    >
      <div className="w-full p-6 bg-white border-2 border-dashed text-custom-color-2 before:block before:absolute  hover:before:bg-custom-color before:w-0 before:h-0 hover:before:h-full hover:before:w-full before:-top-0 before:-left-0 before:duration-500  before:-z-10 relative inline-block transform hover:text-white bg-transparent overflow-hidden border-custom-color duration-500">
        <div className="space-y-6 flex flex-col justify-center items-center">
          <button className="bg-white border-2 rounded-full">
            <img
              className="border-2 border-custom-color rounded-full border-dotted p-4"
              src={image}
              alt=""
            />
          </button>
          <h6 className="font-bold text-2xl text-center">{type}</h6>
          <button className="text-white bg-custom-color-2 py-2 px-6 rounded-full">
            {amount} Options
          </button>
        </div>
      </div>
    </div>
  );
};

CategoryCard.propTypes = {
  hotel: PropTypes.object,
};

export default CategoryCard;
