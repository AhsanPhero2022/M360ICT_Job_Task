import ourTeam1 from "../../assets/images/ourTeam1.jpeg";
import ourTeam2 from "../../assets/images/ourTeam2.jpeg";
import ourTeam3 from "../../assets/images/ourTeam3.jpeg";

const OurTeam = () => {
  const teamImages = [ourTeam1, ourTeam2, ourTeam3];

  return (
    <div className="mx-auto   mt-[80px] mb-[65px] w-full">
      <div className="lg:mx-32">
        {/* Title Section */}
        <div className="flex items-center space-x-[16px] mb-[16px]">
          <div className="w-[51px] border-t-[4px] border-[#EE6611]"></div>
          <div className="text-[#EE6611] font-poppins text-[18px] font-semibold leading-[21.6px]">
            Our team
          </div>
        </div>
        <div className="text-left text-[#111827] font-inter lg:text-[40px] font-bold leading-[48px] mb-[64px]">
          Discover the Faces Behind Our Success
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px]">
          {teamImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt="Team member"
              className="w-[280px] h-[350px] sm:max-w-[384px] sm:max-h-[417px] object-cover mx-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
