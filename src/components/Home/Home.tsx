import HeroSection from "./HeroSection";
import Testimonials from "./Testimonials";

import OurTeam from "./OurTeam";
import OurStory from "./OurStory";
import Users from "./Users";
import OtherServices from "./OthersService";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Users />
      <OurStory />
      <OurTeam />
      <Testimonials />
      <OtherServices />
    </div>
  );
};

export default Home;
