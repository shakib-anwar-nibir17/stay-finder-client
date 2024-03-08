import About from "../components/Home/About/AboutSection/About";
import Banner from "../components/Home/Banner/Banner";
import Category from "../components/Home/Category/Category";
import CategoryHeader from "../components/Home/Category/CategoryHeader";
import ContactUs from "../components/Home/ContactUs/ContactUs";
import Team from "../components/Home/Team/Team";
import Testimonial from "../components/Home/Testimonials/Testimonial";

const Homepage = () => {
  return (
    <>
      <Banner />
      <CategoryHeader />
      <Category />
      <About />
      <Team />
      <Testimonial />
      <ContactUs />
    </>
  );
};

export default Homepage;
