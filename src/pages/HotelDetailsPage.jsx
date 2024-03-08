import { useLoaderData } from "react-router-dom";

const HotelDetailsPage = () => {
  const hotel = useLoaderData();
  console.log(hotel);
  return <div>hello</div>;
};

export default HotelDetailsPage;
