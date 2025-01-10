import Header from "../../commonComponents/Header";
import { useState } from "react";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../../../store/contexStore/store";
const AddProduct = () => {
  const { BASE_URL } = useContext(AuthContext);
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
    realPrice: "",
    sellPrice: "",
    author: "",
    year: "",
    rating: "",
    catagory: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, // Keep the previous form data
      [name]: value, // Update the field being changed
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form validation or submission logic here
    try {
      const response = await fetch(BASE_URL + "/addproduct", {
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
          image: "",
          description: "",
          realPrice: "",
          sellPrice: "",
          author: "",
          year: "",
          rating: "",
          catagory: "",
        });
        toast.success("Product Added...");
      }
      if (!response.ok) {
        toast.error(res_data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className=" sm:flex bg-slate-300 ">
        <Header />
        <div className=" w-full h-screen overflow-y-scroll">
          <h1 className="text-[2rem] font-semibold text-center mt-20">
            ADD PRODUCT
          </h1>
          <form
            className="max-w-md mx-auto p-4 flex flex-col gap-2"
            onSubmit={handleSubmit}
          >
            <div className="relative z-0 w-full mb-5 group">
              <input
                name="name"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.name}
                onChange={handleChange}
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                {" "}
                Product Name
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                name="image"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.image}
                onChange={handleChange}
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                {" "}
                Image
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                name="description"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.description}
                onChange={handleChange}
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                {" "}
                Description
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                name="realPrice"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.realPrice}
                onChange={handleChange}
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                {" "}
                Real Price
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                name="sellPrice"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.sellPrice}
                onChange={handleChange}
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                {" "}
                Sell Price
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                name="author"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.author}
                onChange={handleChange}
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                {" "}
                Author
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                name="year"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.year}
                onChange={handleChange}
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                {" "}
                Year
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                name="rating"
                step="0.1"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.rating}
                onChange={handleChange}
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                {" "}
                Rating
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                name="catagory"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.catagory}
                onChange={handleChange}
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                {" "}
                Category
              </label>
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
