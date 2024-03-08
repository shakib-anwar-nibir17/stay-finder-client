import About from "../components/Home/About/AboutSection/About";
import Banner from "../components/Home/Banner/Banner";
import Category from "../components/Home/Category/Category";
import CategoryHeader from "../components/Home/Category/CategoryHeader";
import Team from "../components/Home/Team/Team";

const Homepage = () => {
  return (
    <>
      <Banner />
      <CategoryHeader />
      <Category />
      <About />
      <Team />
    </>
  );
};

export default Homepage;
