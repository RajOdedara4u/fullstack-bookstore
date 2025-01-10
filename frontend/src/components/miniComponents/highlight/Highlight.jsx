import img from "../../../assets/atomich.jpg";

const Highlight = () => {
  return (
    <>
      <div className="w-[100%] justify-between bg-[#1c213e] md:pb-20 pb-10 md:flex ">
        <div className="w-[100%] md:w-full flex justify-center items-center">
          <img src={img} className="w-auto md:h-[42vh] h-[19vh] mx-auto" />
        </div>
        <div className="w-[100%] md:w-full px-4 md:px-10 text-center md:text-left py-8">
          <h1 className=" md:text-[2rem] text-blue-700 font-bold text-[1.3rem]">
            HIGHLIGHTS
          </h1>
          <h1 className="text-white md:text-[2.5rem] font-extrabold text-[2rem] max-[366px]:text-[1.7rem]">
            Atmoic Habit With Limited Addition
          </h1>
          <h1 className="text-[0.8rem] md:text-[1rem] py-3 font-medium text-slate-200">
            Our Purpose is to move the world forward. We take action by building
            community, protecting our planet and increasing access to sport.
          </h1>
          <button className=" text-black bg-white rounded-md text-[0.8rem] md:text-[1rem] shadow-white shadow-md font-semibold px-5 py-1">
            Discover More
          </button>
        </div>
      </div>
    </>
  );
};

export default Highlight;
