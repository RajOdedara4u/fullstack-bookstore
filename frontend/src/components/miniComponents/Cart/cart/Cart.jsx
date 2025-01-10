import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../commonComponents/Header";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { getTotal } from "../../../../store/slices/Slice";
import { useContext } from "react";
import { AuthContext } from "../../../../store/contexStore/store";

const Cart = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cartProduct);

  useEffect(() => {
    dispatch(getTotal());
  }, [cartData]);

  return (
    <>
      <Header />
      <div className="max-w-screen ">
        <section className=" py-16 antialiased bg-gray-900">
          <ol className="items-center flex flex-col sm:flex-row w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base pl-5 pt-5 max-[600px]:pt-0 mdm:ml-20 md:mt-5 ">
            <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
              <span className="flex items-center after:mx-2 text-blue-500 after:content-['/'] sm:after:hidden">
                <svg
                  className="me-2 h-4 w-4 sm:h-5 sm:w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="blue"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Cart
              </span>
            </li>

            <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
              <span className="flex items-center after:mx-2 after:content-['/'] sm:after:hidden">
                <svg
                  className="me-2 h-4 w-4 sm:h-5 sm:w-5"
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
                    d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Checkout
              </span>
            </li>

            <li className="flex shrink-0 items-center">
              <svg
                className="me-2 h-4 w-4 sm:h-5 sm:w-5"
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
                  d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Order Placed
            </li>
          </ol>

          <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
              <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                <div className="space-y-6">
                  {cartData.cartitems.map((obj, index) => (
                    <Product
                      key={index}
                      cartQuantity={obj.cartQuantity}
                      name={obj.name}
                      image={obj.image}
                      rating={obj.rating}
                      author={obj.author}
                      sPrice={obj.sellPrice}
                    />
                  ))}
                </div>
              </div>

              <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                  <p className="text-xl font-semibold text-gray-900 dark:text-white">
                    Order summary
                  </p>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                          Total Price
                        </dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">
                          ₹{cartData.TotalAmount}
                        </dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                          Total Items
                        </dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">
                          {cartData.TotalQuantity}
                        </dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400 ">
                          On order you will get 10% discount
                        </dt>
                      </dl>
                    </div>

                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                      <dt className="text-base font-bold text-gray-900 dark:text-white">
                        Total
                      </dt>
                      <dd className="text-base font-bold text-gray-900 dark:text-white">
                        ₹{cartData.TotalAmount}
                      </dd>
                    </dl>
                  </div>
                  <NavLink
                    to={`/${
                      isLoggedIn
                        ? cartData.TotalAmount != 0
                          ? "checkout"
                          : ""
                        : "login"
                    }`}
                    className="flex w-full items-center justify-center rounded-lg bg-purple-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-600 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-purple-500 dark:focus:ring-primary-800"
                  >
                    Proceed to Checkout
                  </NavLink>

                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      {" "}
                      or{" "}
                    </span>
                    <NavLink
                      to="/"
                      title=""
                      className="inline-flex items-center gap-2 text-sm font-medium underline text-purple-400 hover:no-underline "
                    >
                      Continue Shopping
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 12H5m14 0-4 4m4-4-4-4"
                        />
                      </svg>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cart;
