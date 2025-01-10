import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../../store/contexStore/store";
import { useContext } from "react";
const SingleUser = ({ index, name, email, _id }) => {
  const { BASE_URL } = useContext(AuthContext);
  const navigate = useNavigate();
  const delateuser = async () => {
    try {
      const response = await fetch(BASE_URL + "/delateuser", {
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
        <td className="px-6 py-4 font-medium text-gray-900 ">{index}</td>
        <td className="px-6 py-4">{name}</td>
        <td className="px-6 py-4">{email}</td>

        <td className="px-6 py-4">
          <button
            onClick={delateuser}
            className="font-medium text-red-600 hover:underline"
          >
            Delate
          </button>
        </td>
      </tr>
    </>
  );
};

export default SingleUser;
