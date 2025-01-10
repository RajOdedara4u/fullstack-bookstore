import { NavLink } from "react-router-dom";
import "./sty.css";
import { AuthContext } from "../../../store/contexStore/store";
import { useContext } from "react";

const HeroSection = () => {
  const { isLoggedIn, userData, isAdmin } = useContext(AuthContext); // Access token and logout function

  return (
    <>
      <div className="relative overflow-hidden w-full h-screen bg-[#1c213e] flex ">
        <div className=" inset-0 bg-cover bg-center animate-slide text-center flex justify-center items-center w-screen">
          <div className=" h-[100%] ">
            <div className="h-[95%] flex flex-col justify-center">
              <h1 className="text-slate-300 font-bold font-serif text-[1.5rem] px-1 max-[375px]:text-[1.2rem] lg:text-[3.4rem] md:text-[2.6rem] sm:text-[2.3rem]">
                Where every book has it's <br />
                <p className="mt-[-5px] sm:mt-[-20px]">own community</p>
              </h1>
              <h5 className="mb-4 text-slate-200 font-extralight text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-center leading-tight sm:leading-normal md:leading-relaxed">
                Find your favorite book and join the club!
              </h5>

              {isLoggedIn ? null : (
                <div className="flex gap-2 sm:gap-5 justify-center">
                  <NavLink
                    to="/login"
                    className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-xs sm:text-sm md:text-base lg:text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-700 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                  >
                    <span className="relative px-4 py-2 text-xs sm:text-sm md:text-base lg:text-base transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      LOGIN
                    </span>
                  </NavLink>
                  <NavLink
                    to="/signup"
                    className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-xs sm:text-sm md:text-base lg:text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-700 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                  >
                    <span className="relative px-4 py-2 text-xs sm:text-sm md:text-base lg:text-base transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      SIGNUP
                    </span>
                  </NavLink>
                </div>
              )}
            </div>
            <div className="h-[10%] opacity-50 flex flex-col items-center justify-end ">
              <h1 className="mb-2 text-[#e2e2e2] text-center w-[100%] font-serif text-[0.6rem] sm:text-[0.8rem] ">
                SCROLL DOWN
              </h1>
              <svg
                viewBox="0 0 512.02 319.26"
                className="fill-[#e2e2e2] sm:h-5 sm:w-5 h-3 w-3"
              >
                <path d="M5.9 48.96 48.97 5.89c7.86-7.86 20.73-7.84 28.56 0l178.48 178.48L434.5 5.89c7.86-7.86 20.74-7.82 28.56 0l43.07 43.07c7.83 7.84 7.83 20.72 0 28.56l-192.41 192.4-.36.37-43.07 43.07c-7.83 7.82-20.7 7.86-28.56 0l-43.07-43.07-.36-.37L5.9 77.52c-7.87-7.86-7.87-20.7 0-28.56z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
