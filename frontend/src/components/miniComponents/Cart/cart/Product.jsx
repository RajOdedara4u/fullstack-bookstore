import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import {
  romoveFromCart,
  decreaseCart,
  addToCart,
} from "../../../../store/slices/Slice";

const Product = ({ name, image, sPrice, cartQuantity, author }) => {
  const dispatch = useDispatch();
  const [sellPrice] = useState(parseInt(sPrice));
  const [productPrice, setProductPrice] = useState(sellPrice * cartQuantity);

  // Recalculate product price whenever cartQuantity changes
  useEffect(() => {
    setProductPrice(sellPrice * cartQuantity);
  }, [cartQuantity, sellPrice]);

  const handleRemoveFromCart = () => {
    dispatch(romoveFromCart(name));
    toast.success("Removed...");
  };

  const decreaseItem = () => {
    dispatch(decreaseCart(name));
  };

  const increaseItem = () => {
    dispatch(addToCart({ name: name }));
  };

  return (
    <>
      <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
        <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
          <a href="#" className="w-20 shrink-0 md:order-1">
            <img
              className="h-30 w-20 dark:hidden mx-auto"
              src={image}
              alt="imac image"
            />
            <img
              className="hidden h-30 w-20 dark:block mx-auto"
              src={image}
              alt="imac image"
            />
          </a>

          <div className="flex items-center justify-between md:order-3 md:justify-end">
            <div className="flex items-center">
              <button
                type="button"
                className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
                onClick={decreaseItem}
              >
                <svg
                  className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 2"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h16"
                  />
                </svg>
              </button>

              <p className="w-10 text-center text-sm font-medium text-gray-900 dark:text-white">
                {cartQuantity}
              </p>

              <button
                type="button"
                className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
                onClick={increaseItem}
              >
                <svg
                  className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </button>
            </div>

            <div className="text-end md:order-4 md:w-32">
              <p className="text-base font-bold text-gray-900 dark:text-white">
                ₹{productPrice}
              </p>
            </div>
          </div>

          <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
            <a
              href="#"
              className="text-base font-medium text-gray-900 dark:text-white hover:underline"
            >
              {name}
            </a>

            <div className="flex items-center gap-4">
              <button
                type="button"
                className="text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                onClick={handleRemoveFromCart}
              >
                Remove
              </button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400 dark:hover:text-white">
                by - {author}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
