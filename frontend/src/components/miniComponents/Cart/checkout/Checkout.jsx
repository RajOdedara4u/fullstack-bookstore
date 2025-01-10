import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import Header from "../../../commonComponents/Header";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../../store/contexStore/store";

const Checkout = () => {
  const cartData = useSelector((state) => state.cartProduct);
  const { BASE_URL } = useContext(AuthContext); 
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    city: "kota",
    address: "",
    reachMethod: "Social Media",
    pinCode: "",
    paymentMethod: "",
    amount: cartData.TotalAmount - (cartData.TotalAmount % 10),
    items: cartData.TotalQuantity,
    arrayObj: cartData.cartitems,
  });

  // Handle input changes for all fields
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    // Validate email
    if (!formData.email.trim()) {
      toast.error("Email is required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Invalid email format");
      return false;
    }

    // Validate name
    if (!formData.name.trim()) {
      toast.error("Name is required");
      return false;
    }

    // Validate contact
    if (!formData.contact.trim()) {
      toast.error("Contact number is required");
      return false;
    }
    if (formData.contact.length < 10 || formData.contact.length > 15) {
      toast.error("Contact number must be between 10 and 15 digits");
      return false;
    }

    // Validate city
    if (!formData.city.trim()) {
      toast.error("City is required");
      return false;
    }

    // Validate address
    if (!formData.address.trim()) {
      toast.error("Address is required");
      return false;
    }

    // Validate reach method
    if (!formData.reachMethod) {
      toast.error("Please select a reach method");
      return false;
    }

    // Validate pin code
    if (!formData.pinCode.trim()) {
      toast.error("Pin code is required");
      return false;
    }
    if (formData.pinCode.length < 5 || formData.pinCode.length > 6) {
      toast.error("Pin code should be 5 or 6 digits");
      return false;
    }

    // Validate payment method
    if (!formData.paymentMethod) {
      toast.error("Payment method is required");
      return false;
    }

    // Validate amount (should be a positive number)
    if (formData.amount <= 0) {
      toast.error("Amount must be a positive value");
      return false;
    }

    // Validate items
    if (formData.items <= 0) {
      toast.error("Items count must be greater than 0");
      return false;
    }

    // If arrayObj (cart items) is empty
    if (formData.arrayObj.length === 0) {
      toast.error("Cart items are required");
      return false;
    }

    return true; // If all validations pass
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = validateForm();

    if (success === true) {
      try {
        const response = await fetch(BASE_URL + "/orderPlace", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const res_data = await response.json();

        if (response.ok) {
          setFormData({
            name: "",
            email: "",
            contact: "",
            city: "kota",
            address: "",
            reachMethod: "Social Media",
            pinCode: "",
            paymentMethod: "",
          });
          toast.success("Order Placed...");
          navigate(`/placed/${res_data._id}`);
        }
        if (!response.ok) {
          toast.error(res_data.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <Header />

      <section className="bg-white py-8 antialiased dark:bg-gray-900 sm:py-16 ">
        <ol className="items-center flex flex-col sm:flex-row w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base pl-5 pt-5 max-[600px]:py-5 md:mt-5 ">
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
            <span className="flex items-center after:mx-2 after:content-['/'] text-blue-500 sm:after:hidden">
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

        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0 md:pt-5">
          <form
            className="mt-4 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16"
            onSubmit={handleSubmit}
          >
            <div className="min-w-0 flex-1 space-y-8">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Delivery Details
                </h2>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
                  <div>
                    <span
                      htmlFor="your_name"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your name
                    </span>
                    <input
                      type="text"
                      name="name"
                      id="your_name"
                      value={formData.name}
                      onChange={handleInput}
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                      placeholder="Bonnie Green"
                    />
                  </div>

                  <div>
                    <span
                      htmlFor="your_email"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email*
                    </span>
                    <input
                      type="email"
                      name="email"
                      id="your_email"
                      value={formData.email}
                      onChange={handleInput}
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                      placeholder="name@flowbite.com"
                    />
                  </div>

                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <span
                        htmlFor="select-reach-method"
                        className="block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        How You Reach This site
                      </span>
                    </div>
                    <select
                      name="reachMethod"
                      id="select-reach-method"
                      value={formData.reachMethod}
                      onChange={handleInput}
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                    >
                      <option value="Social Media">Social Media</option>
                      <option value="ads">Ads</option>
                      <option value="poster,Banner">Poster,Banner</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <span
                        htmlFor="select-city-input-3"
                        className="text-sm font-medium text-gray-900 dark:text-white flex items-center"
                      >
                        City*
                        <p
                          id="credit-card-text"
                          className="text-xs font-normal text-gray-500 dark:text-gray-400 pl-3"
                        >
                          More service's soon...
                        </p>
                      </span>
                    </div>
                    <select
                      name="city"
                      id="select-city-input-3"
                      value={formData.city}
                      onChange={handleInput}
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                    >
                      <option value="kota">kota</option>
                      {/* Add more city options here */}
                    </select>
                  </div>

                  <div>
                    <span
                      htmlFor="phone-input"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Phone Number*
                    </span>
                    <div className="flex items-center">
                      <button
                        className="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200"
                        type="button"
                      >
                        +91
                      </button>
                      <div className="relative w-full">
                        <input
                          type="text"
                          name="contact"
                          id="phone-input"
                          value={formData.contact}
                          onChange={handleInput}
                          className="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                          placeholder="123-456-7890"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                      Pin Code
                    </span>
                    <input
                      type="text"
                      name="pinCode"
                      id="pin-code"
                      value={formData.pinCode}
                      onChange={handleInput}
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                      placeholder="3623400"
                    />
                  </div>

                  <div>
                    <span
                      htmlFor="address"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Address
                    </span>
                    <textarea
                      name="address"
                      id="address"
                      value={formData.address}
                      onChange={handleInput}
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                      placeholder="address"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Payment
                </h3>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="pay-on-delivery"
                          type="radio"
                          name="paymentMethod"
                          value="pay-on-delivery"
                          checked={formData.paymentMethod === "pay-on-delivery"}
                          onChange={handleInput}
                          className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600"
                        />
                      </div>

                      <div className="ms-4 text-sm">
                        <label
                          htmlFor="pay-on-delivery"
                          className="font-medium leading-none text-gray-900 dark:text-white"
                        >
                          Payment on delivery
                        </label>
                        <p className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">
                          +₹15 payment processing fee
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="credit-card"
                          type="radio"
                          name="paymentMethod"
                          disabled
                          value="credit-card"
                          checked={formData.paymentMethod === "credit-card"}
                          onChange={handleInput}
                          className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600"
                        />
                      </div>

                      <div className="ms-4 text-sm">
                        <label
                          htmlFor="credit-card"
                          className="font-medium leading-none text-gray-900 dark:text-white"
                        >
                          Credit Card
                        </label>
                        <p className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">
                          Pay with your credit card
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="paypal"
                          disabled
                          type="radio"
                          name="paymentMethod"
                          value="paypal"
                          checked={formData.paymentMethod === "paypal"}
                          onChange={handleInput}
                          className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600"
                        />
                      </div>

                      <div className="ms-4 text-sm">
                        <label
                          htmlFor="paypal"
                          className="font-medium leading-none text-gray-900 dark:text-white"
                        >
                          PayPal
                        </label>
                        <p className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">
                          Fast and secure
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
              <div className="flow-root">
                <div className="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Items
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      {cartData.TotalQuantity}
                    </dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Price
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      ₹{cartData.TotalAmount}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Discount
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      ₹{cartData.TotalAmount % 10}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Savings
                    </dt>
                    <dd className="text-base font-medium text-green-500">
                      -₹{cartData.TotalAmount % 10}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-bold text-gray-900 dark:text-white">
                      Payable Price
                    </dt>
                    <dd className="text-base font-bold text-gray-900 dark:text-white">
                      ₹{cartData.TotalAmount - (cartData.TotalAmount % 10)}
                    </dd>
                  </dl>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-lg bg-green-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Placed Order
                </button>

                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  One or more items in your cart require an account.{" "}
                  <NavLink
                    to={`/login`}
                    className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                  >
                    Sign in or create an account now.
                  </NavLink>
                  .
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export default Checkout;
