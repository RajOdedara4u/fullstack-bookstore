import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../store/contexStore/store";
import { useContext } from "react";
const Logout = () => {
  const { logout } = useContext(AuthContext); // Access token and logout function
  const navigate = useNavigate();
  useEffect(() => {
    logout();
    return navigate("/login");
  }, [logout]);
};

export default Logout;
