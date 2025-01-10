const Sslide = (props) => {
  return (
    <div className="h-[465px] max-w-[320px] overflow-hidden border border-gray-600 rounded-lg mx-3">
      <div className="w-[100%] ">
        <img src={props.obj.img} className="rounded-sm" />
      </div>
      <div className="flex flex-col lg:gap-0 gap-5">
        <div className="flex justify-evenly py-2 pt-4">
          <span className="font-bold lg:text-[0.9rem] text-[0.7rem] ">
            ❤️ {props.obj.rating}
          </span>
          <span className="font-bold lg:text-[0.9rem] text-[0.7rem] ">
            🕗 {props.obj.time}
          </span>
          <span className="font-bold lg:text-[0.9rem] text-[0.7rem] text-blue-600">
            #{props.obj.has}
          </span>
        </div>
        <div className="px-4">
          <h1 className="font-bold text-[0.9rem]">{props.obj.name}</h1>
          <p className="text-[0.8rem] lg:text-[1rem]">{props.obj.info}</p>
        </div>
        <div className="px-4">
          <button className="bg-black py-1 my-4 text-white w-[100%] px-1 rounded-md">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sslide;
