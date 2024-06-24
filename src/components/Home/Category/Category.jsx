import AOS from "aos";
import "aos/dist/aos.css";
import image1 from "../../../assets/icons/01.png";
import image2 from "../../../assets/icons/02.png";
import image3 from "../../../assets/icons/03.png";
import image4 from "../../../assets/icons/04.png";
import image5 from "../../../assets/icons/05.png";
import image6 from "../../../assets/icons/06.png";
import image7 from "../../../assets/icons/07.png";
import image8 from "../../../assets/icons/08.png";
import image9 from "../../../assets/icons/09.png";
import image10 from "../../../assets/icons/10.png";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const hotels = [
    {
      id: 1,
      type: "Luxury Hotel",
      image: image1,
      amount: 50,
    },
    {
      id: 2,
      type: "Boutique Hotel",
      image: image2,
      amount: 30,
    },
    {
      id: 3,
      type: "Resort",
      image: image3,
      amount: 80,
    },
    {
      id: 4,
      type: "Business Hotel",
      image: image4,
      amount: 60,
    },
    {
      id: 5,
      type: "Beachfront Hotel",
      image: image5,
      amount: 40,
    },
    {
      id: 6,
      type: "Mountain Lodge",
      image: image6,
      amount: 25,
    },
    {
      id: 7,
      type: "Bed and Breakfast",
      image: image7,
      amount: 70,
    },
    {
      id: 8,
      type: "Spa Hotel",
      image: image8,
      amount: 45,
    },
    {
      id: 9,
      type: "Airport Hotel",
      image: image9,
      amount: 55,
    },
    {
      id: 10,
      type: "Budget Hotel",
      image: image10,
      amount: 90,
    },
  ];
  AOS.init();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5  gap-5 mt-20">
      {hotels.map((hotel) => (
        <CategoryCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

export default Category;
