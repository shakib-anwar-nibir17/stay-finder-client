import { Helmet } from "react-helmet-async";
import About from "../../components/Home/About/AboutSection/About";
import Banner from "../../components/Home/Banner/Banner";
import Category from "../../components/Home/Category/Category";
import CategoryHeader from "../../components/Home/Category/CategoryHeader";
import ContactUs from "../../components/Home/ContactUs/ContactUs";
import Team from "../../components/Home/Team/Team";
import Testimonial from "../../components/Home/Testimonials/Testimonial";
import Container from "../../components/Shared/Container";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>StayFinder | Vacation Homes & Condo Rentals</title>
      </Helmet>
      <Container>
        <Banner />
        <CategoryHeader />
        <Category />
        <Team />
        <About />
        <Testimonial />
        <ContactUs />
      </Container>
    </div>
  );
};

export default Home;
