import { Button } from "antd";
import backgroundVideo from "../../assets/images/banner_video.mp4";
import search from "../../assets/images/landSearch.png";

const HeroSection = () => {
  return (
    <div className="relative h-screen lg:h-[600px] flex justify-center items-center text-center">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={backgroundVideo}
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
      <div className="relative z-20">
        <div className="flex justify-center items-center text-center flex-col">
          <h2 className="text-5xl font-bold text-white">
            Your Portal to World Wide is <br /> Exquisite Real Estate
          </h2>

          <p className="text-[#F9FAFB] mt-8  mb-12">
            Seamlessly connecting you to the heartbeat of India is prime
            properties.
          </p>
          <div>
            <Button type="default" style={{ padding: 8 }}>
              <span>
                <img src={search} alt="" />
              </span>
              <span className="ml-1 ">Find Products</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
