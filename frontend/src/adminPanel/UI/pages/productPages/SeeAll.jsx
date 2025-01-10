import Header from "../../commonComponents/Header";
import { useContext } from "react";
import { AuthContext } from "../../../../store/contexStore/store";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const SeeAll = () => {
  const { productData, productData2, BASE_URL } = useContext(AuthContext);
  const navigate = useNavigate();

  const allProductData = [...productData, ...productData2];

  return (
    <>
      <div className=" sm:flex bg-slate-300 ">
        <Header />
        <div className=" w-full h-screen overflow-y-scroll">
          <h1 className="text-[2rem] font-semibold text-center mt-20">
            All Products
          </h1>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-5">
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    #
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Orignal Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Sell Price
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Catagory
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {allProductData.map((obj, index) => (
                  <SingleProduct
                    navigate={navigate}
                    key={index}
                    _id={obj._id}
                    index={index}
                    name={obj.name}
                    realPrice={obj.realPrice}
                    sellPrice={obj.sellPrice}
                    catagory={obj.catagory}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeeAll;

const SingleProduct = ({
  index,
  name,
  realPrice,
  sellPrice,
  catagory,
  _id,
  navigate,
}) => {
  const delateproduct = async () => {
    const response = await fetch(BASE_URL + "/delateproduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id }),
    });

    const res_data = await response.json();
    if (response.ok) {
      toast.success(res_data.message);
      navigate("/");
    }
    if (!response.ok) {
      toast.error(res_data.message);
    }
  };

  return (
    <>
      <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
        <td className="px-6 py-4 font-medium text-gray-900 ">{index}</td>
        <td className="px-6 py-4">{name}</td>
        <td className="px-6 py-4">{realPrice}</td>
        <td className="px-6 py-4">{sellPrice}</td>
        <td className="px-6 py-4">{catagory}</td>

        <td className="px-6 py-4">
          <button
            onClick={delateproduct}
            className="font-medium text-red-600 hover:underline"
          >
            Delate
          </button>
        </td>
      </tr>
    </>
  );
};
