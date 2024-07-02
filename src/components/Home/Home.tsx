import HeroSection from "./HeroSection";
import ProductsSample from "../pages/AllProducts/ProductsSample";
import Testimonials from "./Testimonials";
import OtherServices from "./OthersService";
import OurTeam from "./OurTeam";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <OtherServices />
      <OurTeam />
      <ProductsSample />
      <Testimonials />
    </div>
  );
};

export default Home;
