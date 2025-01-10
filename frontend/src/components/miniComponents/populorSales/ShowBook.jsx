import { NavLink } from "react-router-dom";
const ShowBook = ({
  name,
  image,
  realPrice,
  author,
  year,
  discount,
  rating,
  sellPrice,
  catagory,
  desc,
}) => {
  return (
    <>
      <NavLink
        to="/singlebook/"
        state={{
          name: name,
          image: image,
          realPrice: realPrice,
          author: author,
          year: year,
          discount: discount,
          rating: rating,
          sellPrice: sellPrice,
          catagory: catagory,
          desc: desc,
        }}
        className="flex flex-col items-center border border-gray-400 rounded-lg shadow md:flex-row md:max-w-[26rem] bg-[#242a4c] dark:hover:bg-gray-700 mx-7 md:mx-0"
      >
        <div className={` h-[100%] w-[50%] md:mt-[0%] mt-[5%] `}>
          <img src={image} className="w-[50%] md:w-[80%] mx-auto" />
        </div>
        <div className="flex flex-col justify-between px-5 py-3 leading-normal">
          <h5 className=" text-[1rem] sm:text-[1.1rem] font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="mb-3 md:mb-1 font-normal text-[0.7rem] text-[#9193a4]">
            {desc}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <svg
                className=" w-3 h-3 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className=" w-3 h-3 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className=" w-3 h-3 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className=" w-3 h-3 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className=" w-3 h-3 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>

              <span className="bg-blue-100 text-blue-800 text-xs font-semibold sm:px-2.5 px-1.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3 text-[0.5rem] sm:text-[0.6rem]">
                5.0
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-[0.9rem] line-through text-red-500">
                ₹{realPrice}
              </span>
              <span className="text-[0.9rem] text-gray-900 dark:text-white">
                ₹{sellPrice}
              </span>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
};
export default ShowBook;
