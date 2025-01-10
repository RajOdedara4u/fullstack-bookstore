import Header from "../../../commonComponents/Header";
import { useState } from "react";
import SingleInvonce from "./SingleInvonce";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../../../../store/contexStore/store";
const Invonce = () => {
  const { BASE_URL } = useContext(AuthContext);
  const [id, sid] = useState();
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

  const getD = async (id) => {
    const response = await fetch(BASE_URL + "/getorderdetail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    const res_data = await response.json();

    if (response.ok) {
      toast.success("Order Fetched...");
      sdetails(res_data);
    }
    if (!response.ok) {
      toast.error("Order Not Found");
      sdetails([
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
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getD(id.trim());
  };

  return (
    <>
      <div className=" sm:flex bg-slate-300 ">
        <Header />
        <div className=" w-full h-screen overflow-y-scroll pb-3">
          <form
            className="mx-auto md:w-[50%] px-2 py-5"
            onSubmit={handleSubmit}
          >
            <label
              htmlFor="search"
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
                onChange={(e) => sid(e.target.value)}
                type="search"
                id="search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Invoice number"
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>

          <SingleInvonce data={details} />
        </div>
      </div>
    </>
  );
};

export default Invonce;
