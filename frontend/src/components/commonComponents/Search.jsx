import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../store/contexStore/store";
import ShowBook from "../miniComponents/populorSales/ShowBook";
const Search = () => {
  const { productData, productData2 } = useContext(AuthContext); // Access token and logout function

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };
  const [productDataAll, sproductDataAll] = useState([
    ...productData,
    ...productData2,
  ]);
  const filteredBooks = productDataAll.filter((book) =>
    book.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );
  return (
    <>
      <div className=" bg-[#1c213e] h-screen overflow-y-scroll w-[100%]">
        <div>
          <NavLink
            to="/"
            className="text-white rounded-lg focus:ring-2 focus:ring-blue-400 hover:bg-blue-200 inline-flex items-center justify-center h-10 m-2 w-10 dark:bg-gray-800 dark:hover:bg-gray-700"
            aria-label="Close"
          >
            <span className="sr-only">Dismiss</span>
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </NavLink>
          <form className="max-w-md mx-auto pb-2 px-3 sm:px-0">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                id="default-search"
                className="block w-full p-2 sm:p-4 ps-10 sm:ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                placeholder="Search for a book..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <input
                value="Search"
                type="button"
                placeholder="Search"
                className="text-white hidden absolute end-1.5 bottom-1.5 sm:end-2.5 sm:bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 sm:px-4 py-1 sm:py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              />
            </div>
          </form>
        </div>

        <div className="flex flex-col">
          <div className="pt-3 w-full flex gap-6 flex-wrap justify-center items-center">
            {filteredBooks.map((obj, index) => (
              <ShowBook
                key={index}
                name={obj.name}
                image={obj.image}
                realPrice={obj.realPrice}
                author={obj.author}
                year={obj.year}
                discount={obj.discount}
                rating={obj.rating}
                sellPrice={obj.sellPrice}
                category={obj.category}
                desc={obj.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
