import useHotels from "../../../Hooks/useHotels";
import HotelCard from "./HotelComponents/HotelCard";

const PopularHotels = () => {
  const [allHotels] = useHotels();
  console.log(allHotels);
  return (
    <>
      <div className="mt-20 text-center text-custom-color-2">
        <h1 className="text-6xl  font-bold text-center">Featured Hotels</h1>
      </div>
      <div className="grid grid-cols-3 space-y-4 mt-10">
        {allHotels.map((hotel) => (
          <HotelCard key={hotel._id} hotel={hotel}></HotelCard>
        ))}
      </div>
    </>
  );
};

export default PopularHotels;
