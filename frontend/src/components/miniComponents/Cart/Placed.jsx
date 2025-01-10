import Header from "../../commonComponents/Header";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../store/contexStore/store";

const Placed = () => {
  const { id } = useParams();
  const { BASE_URL } = useContext(AuthContext);
  const [details, sdetails] = useState([
    {
      _id: " ",
      name: " ",
      email: " ",
      contact: " ",
      city: " ",
      address: " ",
      reachMethod: " Media",
      pinCode: " ",
      items: " ",
      amount: " ",
      date: "",
    },
  ]);

  useEffect(() => {
    const getD = async (id) => {
      const response = await fetch(BASE_URL + "/getorderdetail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      if (response.ok) {
        const res_data = await response.json();
        sdetails(res_data);
      }
    };
    getD(id);
  }, []);

  return (
    <>
      <Header />
      <section className="bg-white py-8 antialiased dark:bg-gray-900 sm:py-20 sm:h-screen">
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-20">
          <div className="mx-auto max-w-2xl px-4 2xl:px-0 ">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl mb-2">
              Thanks for your order!
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6 md:mb-8">
              Your order{" "}
              <span className="font-medium text-gray-900 dark:text-white hover:underline">
                #{id}
              </span>{" "}
              will be processed within 24 hours during working days. We will
              notify you by email once your order has been shipped.
            </p>
            <div className="space-y-4 sm:space-y-2 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800 mb-6 md:mb-8">
              <dl className="sm:flex items-center justify-between gap-4">
                <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                  Items
                </dt>
                <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
                  {details[0].items}
                </dd>
              </dl>
              <dl className="sm:flex items-center justify-between gap-4">
                <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                  Price
                </dt>
                <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
                  ₹{details[0].amount}
                </dd>
              </dl>
              <dl className="sm:flex items-center justify-between gap-4">
                <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                  Date
                </dt>
                <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
                  {details[0].date}
                </dd>
              </dl>
              <dl className="sm:flex items-center justify-between gap-4">
                <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                  Payment Method
                </dt>
                <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
                  COD
                </dd>
              </dl>
              <dl className="sm:flex items-center justify-between gap-4">
                <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                  Name
                </dt>
                <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
                  {details[0].name}
                </dd>
              </dl>
              <dl className="sm:flex items-center justify-between gap-4">
                <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                  Address
                </dt>
                <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
                  {details[0].address}
                </dd>
              </dl>
              <dl className="sm:flex items-center justify-between gap-4">
                <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                  Phone
                </dt>
                <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
                  +91 {details[0].contact}
                </dd>
              </dl>
            </div>
            <div className="flex items-center space-x-4">
              <NavLink
                to="/"
                className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Return to shopping
              </NavLink>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Placed;
