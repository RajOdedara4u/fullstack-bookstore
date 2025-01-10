import { useLocation } from "react-router-dom";
import Header from "../../components/commonComponents/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addToCart } from "../../store/slices/Slice";
import { toast } from "react-toastify";

const SingleBook = () => {
  const loc = useLocation();
  const dis = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = () => {
    dis(addToCart(loc.state));
    toast.success("Added...");
  };
  return (
    <>
      <Header />
      <div className="flex flex-col bg-[#1c213e] ">
        <div className="w-full md:w-[80%] mx-auto mb-4 mt-10 md:mt-20 lg:pb-8 flex flex-col gap-6">
          <div className="md:flex mt-10 mb-5 md:mb-0 md:mt-0 justify-between items-center ">
            <div className=" w-[50%] min-[425px]:w-[40%] min-[555px]:w-[30%] lg:w-[25%] lg:p-9 mx-auto flex justify-center items-center">
              <img src={loc.state.image} />
            </div>
            <div className="mx-auto md:border mt-10 md:mt-0 border-[#9193a4] rounded-lg shadow bg-[#1c2140] md:h-[360px] w-full md:w-[50%] flex flex-col justify-between overflow-hidden">
              <h1 className="text-[1.4rem] font-semibold text-white px-4 pt-3">
                {loc.state.name}
              </h1>
              <h1 className="text-[1rem] font-semibold text-white px-4 pt-3 flex gap-3">
                <p className="text-red-500 line-through">
                  ₹{loc.state.realPrice}
                </p>{" "}
                ₹{loc.state.sellPrice}
              </h1>
              <p className=" font-normal text-[0.5rem] sm:text-[0.7rem] text-[#9193a4] px-4 pt-3">
                Get Up To {loc.state.discount}% Off
              </p>
              <p className=" font-normal py-1 text-[0.7rem] sm:text-[0.9rem] text-[#9193a4] px-4 pt-3">
                By {loc.state.author} | {loc.state.year}
              </p>
              <p className=" font-normal py-1 text-[0.7rem] sm:text-[0.9rem] text-[#9193a4] px-4 pt-3">
                #{loc.state.catagory} #books
              </p>
              <div className="flex items-center space-x-1 rtl:space-x-reverse px-4 pt-3">
                <svg
                  className=" w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className=" w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className=" w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className=" w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className=" w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>

                <span className="bg-blue-100 text-blue-800 text-xs font-semibold sm:px-2.5 px-1.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3 text-[0.5rem] sm:text-[0.6rem] ml-3">
                  {loc.state.rating}
                </span>
              </div>
              <p className="mb-3 md:mb-1 font-normal text-[0.8rem] text-[#9193a4] px-4 pt-3">
                {loc.state.desc}
              </p>
              <div className="w-full flex">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-tr-md rounded-tl-md text-sm px-5 py-2.5 w-full text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                  onClick={handleAddToCart}
                >
                  <svg
                    className="-ms-2 me-2 h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                    />
                  </svg>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex flex-row w-full gap-7 ">
            <div className=" font-normal text-[0.8rem] text-[#9193a4] w-full md:w-[50%] bg-[#1d2245] p-4">
              <h1 className="text-[1rem] font-semibold text-slate-200 ">
                About The Author
              </h1>
              <h1 className="text-[0.8rem] font-semibold text-slate-200 pt-5 pb-2">
                - Kim Jong
              </h1>
              <p className=" font-normal text-[0.8rem] text-[#9193a4]">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.biggest enterprise
                technology acquisitions of 2021 so far, in reverse
                chronologicalrse chrHere are the biggest enterprise technology
                acquisitions of 2021 so far, in reverse chronological
                order.biggest enterprise technology acquisitions of 2021 so far,
                in reverse chronologicalrse chrHere are the biggest enterprise
                technology acquisitions of 2021 so far,
              </p>
            </div>
            <div className=" font-normal text-[0.8rem] text-[#9193a4] w-full md:w-[50%] p-4">
              - Here are the biggest enterprise technology acquisitions of 2021
              so far, in reverse chronological order.biggest enterprise
              technology acquisitions of 2021 so far, in reverse
              chronologicalrse chrHere are the biggest enterprise technology
              acquisitions of 2021 so far in reverse chronological order.biggest
              enterprise technology acquisitions of 2021 <br />
              <br /> so far, in reverse chronologicalrse chrHere are the biggest
              enterprise technology acquisitions of 2021 so far, in reverse
              chronological order.biggest enterprise technology acquisitions of
              2021 so far, in reverse chronologicalrse chrHere are the biggest
              enterprise technology acquisitions of 2021 so far, in reverse
              chronological order.biggest enterprise technology acquisitions of
              2021 so far, in reverse chronologicalrse chr
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBook;
