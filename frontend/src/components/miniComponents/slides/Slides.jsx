import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slideData from "./slideData";
import Sslide from "./Sslide";
const Slides = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50px",
          background: "black",
          height: "50px",
          width: "50px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50px",
          background: "black",
          height: "50px",
          width: "50px",
          zIndex: 10,
        }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#1c213e] text-slate-200 md:pb-20 pb-10">
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-serif pb-2 sm:pb-5 px-2 sm:px-4 text-[#8b91bf]">
        Top Stories
      </h1>
      <div className=" flex flex-col justify-center mx-7 lg:mx-20 pt-3 pb-7">
        <Slider {...settings}>
          {slideData.map((obj, index) => (
            <Sslide obj={obj} key={index} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slides;
