import { useState } from "react";
import SingleProduct from "./SingleProduct";
import { AuthContext } from "../../../store/contexStore/store";
import { useContext } from "react";
const AllProducts = () => {
  const { productData, productData2 } = useContext(AuthContext);
  const [shall, sshall] = useState(false);
  const [filter, sfilter] = useState(false);

  const [catagory, scatagory] = useState("all");

  return (
    <>
      <section className="bg-[#1c213e] antialiased md:pb-20 pb-10">
        <div className=" justify-between space-t-4 sm:flex sm:space-y-0 items-center pb-2 sm:pb-5 px-2 sm:px-4">
          <h1 className="text-2xl sm:text-4xl font-bold font-serif text-[#8b91bf]">
            Top Product's
          </h1>

          <div className="flex items-center space-x-4">
            <div
              id="dropdownSort1"
              className={`z-50 ${
                filter ? null : "hidden"
              } absolute divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700`}
              data-popper-placement="bottom"
            >
              <ul
                className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400"
                aria-labelledby="sortDropdownButton"
              >
                <li>
                  <button
                    onClick={() => {
                      sfilter(!filter), scatagory("all");
                    }}
                    className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    All
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      sfilter(!filter), scatagory("science fiction");
                    }}
                    className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    science fiction
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      sfilter(!filter), scatagory("thriller");
                    }}
                    className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    thriller
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      sfilter(!filter), scatagory("adventures");
                    }}
                    className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    adventures
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      sfilter(!filter), scatagory("fantasy");
                    }}
                    className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    fantasy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      sfilter(!filter), scatagory("mystery");
                    }}
                    className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    mystery
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      sfilter(!filter), scatagory("horror");
                    }}
                    className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    horror
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      sfilter(!filter), scatagory("romance");
                    }}
                    className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    romance
                  </button>
                </li>
              </ul>
            </div>

            <button
              onClick={() => sfilter(!filter)}
              data-modal-toggle="filterModal"
              data-modal-target="filterModal"
              type="button"
              className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-[#1c213e] px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
            >
              <svg
                className="-ms-0.5 me-2 h-4 w-4"
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
                  strokeWidth="2"
                  d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"
                />
              </svg>
              Filters
              <svg
                className="-me-0.5 ms-2 h-4 w-4"
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
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
            {productData.map((obj, index) =>
              (catagory == obj.catagory) | (catagory == "all") ? (
                <SingleProduct
                  key={index}
                  name={obj.name}
                  image={obj.image}
                  realPrice={obj.realPrice}
                  author={obj.author}
                  year={obj.year}
                  discount={obj.discount}
                  rating={obj.rating}
                  sellPrice={obj.sellPrice}
                  catagory={obj.catagory}
                  desc={obj.desc}
                />
              ) : null
            )}
            {shall
              ? productData2.map((obj, index) =>
                  (catagory == obj.catagory) | (catagory == "all") ? (
                    <SingleProduct
                      key={index}
                      name={obj.name}
                      image={obj.image}
                      realPrice={obj.realPrice}
                      author={obj.author}
                      year={obj.year}
                      discount={obj.discount}
                      rating={obj.rating}
                      sellPrice={obj.sellPrice}
                      catagory={obj.catagory}
                      desc={obj.desc}
                    />
                  ) : null
                )
              : null}
          </div>
          <div className="w-full text-center">
            <button
              type="button"
              className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              onClick={() => sshall(!shall)}
            >
              Show {shall ? "less" : "more"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default AllProducts;
