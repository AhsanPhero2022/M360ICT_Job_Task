import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { StarFilled } from "@ant-design/icons";

const Testimonials = () => {
  const images = [
    {
      id: 1,
      src: "https://s3-alpha-sig.figma.com/img/fb5a/76c6/7dd5d90ad7deab022a7cccb3794e247b?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FNd1ZAXrWaB7LVBGclyUIps4-fmLEMHD6FhHuU~uy5qns4Ax~sv2ncysxcSTjh07h0P6NFVFaj7iCUWLe06dnIb1u9rKvfFDZpa4vFu4JdgMgq~JH2m6C07bVFYSLnpnbRKAUoqAXKjfFxVmOlBmDRG83gAUm6QbR8B1fARfA4-X2bRwnvzWbd0xUCIhQwTSqF5kdj4lJlq6w5mhqyQ5wh9xYmL8VlspQ8GBqSKuTbW2G3vBrfWg49A3zbI7FUHDJaAvHeL95giFp-1X~Y4w2BIy6-jwyYGoWulUsxzYTjiSLQvJOMk0B5k0FM~Uk3vcFc0cvp709NLnjl54w9-fgQ__",
      alt: "Slide 1",
      name: "Tony Stark",
      title: "Marketing Manager",
      description:
        "The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and solution solutionsolutiontravel. It's the peace of mind I was looking for.",
    },
    {
      id: 2,
      src: "https://s3-alpha-sig.figma.com/img/5983/c948/e34a2ed36077d50d510f822ee9c75459?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JVBLOy-3lRR95elqX1dhLhUk1I6G2Ptwrb9~G0FdgVLt6GTKv1OB1c65VNzpGvQIZSJW5NDL-19iHsR89ASGSzvwOKvvsbGpOqbPZi9PIoyfQ25TMKAdlCfp2xUdB45joQBfj-4B3E831aEVRUTt1Ri3b7-lplkXjVhlwMh5KruxihUqD46mEHz-cf9DvbtKZDkDVpZZ1yon4pPC5BiuEtgckxdfro7RrsTJzd40YmaNZzqu90D1qKrKP4Qp3nGKNaf8zNX4a5ZU9WWXd6StQqvJCipbQuX-~nX0vxWLcQJA3hRPQoMgZOGUbfDDFzntZsTg-IYlrh9TFq-sOXJGLg__",
      alt: "Slide 2",
      name: "Bruce Wayne",
      title: "Chief Technology Officer",
      description:
        "CypherPlay's user-friendly interface and robust features make it the best choice for managing my business expenses. I highly recommend it to anyone looking for a secure payment solution.",
    },
    {
      id: 3,
      src: "https://s3-alpha-sig.figma.com/img/fb5a/76c6/7dd5d90ad7deab022a7cccb3794e247b?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FNd1ZAXrWaB7LVBGclyUIps4-fmLEMHD6FhHuU~uy5qns4Ax~sv2ncysxcSTjh07h0P6NFVFaj7iCUWLe06dnIb1u9rKvfFDZpa4vFu4JdgMgq~JH2m6C07bVFYSLnpnbRKAUoqAXKjfFxVmOlBmDRG83gAUm6QbR8B1fARfA4-X2bRwnvzWbd0xUCIhQwTSqF5kdj4lJlq6w5mhqyQ5wh9xYmL8VlspQ8GBqSKuTbW2G3vBrfWg49A3zbI7FUHDJaAvHeL95giFp-1X~Y4w2BIy6-jwyYGoWulUsxzYTjiSLQvJOMk0B5k0FM~Uk3vcFc0cvp709NLnjl54w9-fgQ__",
      alt: "Slide 3",
      name: "Diana Prince",
      title: "Human Resources Manager",
      description:
        "Using CypherPlay has been a game-changer for our company. It streamlines our payment processes and ensures our transactions aresolution secure. Our employees appreciate the ease of use and reliability.",
    },
    {
      id: 4,
      src: "https://s3-alpha-sig.figma.com/img/5983/c948/e34a2ed36077d50d510f822ee9c75459?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JVBLOy-3lRR95elqX1dhLhUk1I6G2Ptwrb9~G0FdgVLt6GTKv1OB1c65VNzpGvQIZSJW5NDL-19iHsR89ASGSzvwOKvvsbGpOqbPZi9PIoyfQ25TMKAdlCfp2xUdB45joQBfj-4B3E831aEVRUTt1Ri3b7-lplkXjVhlwMh5KruxihUqD46mEHz-cf9DvbtKZDkDVpZZ1yon4pPC5BiuEtgckxdfro7RrsTJzd40YmaNZzqu90D1qKrKP4Qp3nGKNaf8zNX4a5ZU9WWXd6StQqvJCipbQuX-~nX0vxWLcQJA3hRPQoMgZOGUbfDDFzntZsTg-IYlrh9TFq-sOXJGLg__",
      alt: "Slide 4",
      name: "Clark Kent",
      title: "Public Relations Specialist",
      description:
        "With CypherPlay, I can confidently handle our PR expenses, knowing solution that every transaction is protected. It's the perfect tool for managing our budget efficiently and securely solution.",
    },

    {
      id: 5,
      src: "https://s3-alpha-sig.figma.com/img/5983/c948/e34a2ed36077d50d510f822ee9c75459?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JVBLOy-3lRR95elqX1dhLhUk1I6G2Ptwrb9~G0FdgVLt6GTKv1OB1c65VNzpGvQIZSJW5NDL-19iHsR89ASGSzvwOKvvsbGpOqbPZi9PIoyfQ25TMKAdlCfp2xUdB45joQBfj-4B3E831aEVRUTt1Ri3b7-lplkXjVhlwMh5KruxihUqD46mEHz-cf9DvbtKZDkDVpZZ1yon4pPC5BiuEtgckxdfro7RrsTJzd40YmaNZzqu90D1qKrKP4Qp3nGKNaf8zNX4a5ZU9WWXd6StQqvJCipbQuX-~nX0vxWLcQJA3hRPQoMgZOGUbfDDFzntZsTg-IYlrh9TFq-sOXJGLg__",
      alt: "Slide 4",
      name: "Clark Kent",
      title: "Public Relations Specialist",
      description:
        "With CypherPlay, I can confidently handle our PR expenses, knowing that solution every transaction is protected. It's the perfect tool for managing our budget efficiently and securely solution.",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-3xl font-bold text-center my-8">Testimonials</h1>
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((item) => (
            <div key={item.id} className="px-2  slider-item  ">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex gap-2 items-center justify-center">
                  <StarFilled className="text-yellow-400" />
                  <StarFilled className="text-yellow-400" />
                  <StarFilled className="text-yellow-400" />
                  <StarFilled className="text-yellow-200" />
                  <StarFilled className="text-yellow-200" />
                </div>
                <div className="text-center ">
                  <p>{item.description}</p>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="mx-auto rounded-full w-12 h-12 mt-8"
                  />
                  <p className=" font-bold">{item.name}</p>
                  <p className="">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
