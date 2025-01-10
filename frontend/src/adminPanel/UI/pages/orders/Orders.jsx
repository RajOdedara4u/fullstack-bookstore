import Header from "../../commonComponents/Header";
import SingleOrder from "./SingleOrder";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../../store/contexStore/store";
const Orders = () => {
  const { BASE_URL } = useContext(AuthContext);
  const [orderData, sorderData] = useState([
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
    const getD = async () => {
      const response = await fetch(BASE_URL + "/getorders", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const res_data = await response.json();
        sorderData(res_data);
      }
      if (!response.ok) {
        const res_data = await response.json();
        sorderData(res_data);
      }
    };
    getD();
  }, []);

  return (
    <>
      <div className="sm:flex bg-slate-300">
        <Header />
        <div className="w-full h-screen overflow-y-scroll">
          <h1 className="text-[2rem] font-semibold text-center mt-20">
            Orders
          </h1>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-5">
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3 hidden md:table-cell">
                    Order Id
                  </th>
                  <th scope="col" className="px-6 py-3 hidden md:table-cell">
                    Customer Name
                  </th>
                  <th scope="col" className="px-6 py-3 hidden md:table-cell">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 hidden md:table-cell">
                    Contact
                  </th>
                  <th scope="col" className="px-6 py-3 hidden md:table-cell">
                    City
                  </th>
                  <th scope="col" className="px-6 py-3 hidden md:table-cell">
                    Address
                  </th>
                  <th scope="col" className="px-6 py-3 hidden md:table-cell">
                    Reach
                  </th>
                  <th scope="col" className="px-6 py-3 hidden md:table-cell">
                    Pin
                  </th>
                  <th scope="col" className="px-6 py-3 hidden md:table-cell">
                    Items
                  </th>
                  <th scope="col" className="px-6 py-3 hidden md:table-cell">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3 hidden md:table-cell">
                    Order Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {orderData.length > 0 ? (
                  orderData.map((obj) => (
                    <SingleOrder
                      key={obj._id}
                      _id={obj._id}
                      name={obj.name}
                      email={obj.email}
                      contact={obj.contact}
                      city={obj.city}
                      address={obj.address}
                      reachMethod={obj.reachMethod}
                      pinCode={obj.pinCode}
                      items={obj.items}
                      amount={obj.amount}
                      date={obj.date}
                    />
                  ))
                ) : (
                  <tr>
                    <td colSpan="12" className="px-6 py-3 text-center">
                      No orders available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
