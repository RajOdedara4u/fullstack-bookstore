import { createContext, useState, useEffect } from "react";

// Create AuthContext
export const AuthContext = createContext();

// AuthProvider component to wrap the app and provide the token
export const AuthProvider = ({ children }) => {
  useEffect(() => {
    getproducts();
  }, []);

  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [isLoggedIn, setisLoggedIn] = useState(!!token);
  const [userData, suserData] = useState();
  const [isAdmin, sisAdmin] = useState();
  const BASE_URL =
    import.meta.env.MODE === "development"
      ? "http://localhost:5001/api"
      : "/api";

  // Function to store token and save it in localStorage
  const storeToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  // Function to remove token
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("cartItems");
    setToken(null);
  };

  const userAuth = async () => {
    try {
      const response = await fetch(BASE_URL + "/userVerify", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // response is giving true....
      if (response.ok) {
        const data = await response.json();
        setisLoggedIn(!!token);
        suserData(data);
        sisAdmin(data.isAdmin);
      }
    } catch (error) {
      console.error("user data fetching error");
    }
  };
  //-------------------------------------------------------------- for GEt DAta

  const [productData, sproductData] = useState([
    {
      name: "",
      image: "",
      realsellPrice: "",
      author: "",
      year: "",
      discount: "",
      rating: "",
      sellPrice: "",
      catagory: "",
      desc: "",
    },
  ]);
  const [productData2, sproductData2] = useState([
    {
      name: "",
      image: "",
      realsellPrice: "",
      author: "",
      year: "",
      discount: "",
      rating: "",
      sellPrice: "",
      catagory: "",
      desc: "",
    },
  ]);

  const getproducts = async () => {
    try {
      const response = await fetch(BASE_URL + "/getproduct", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        sproductData(data.slice(0, data.length / 2));
        sproductData2(data.slice(data.length / 2));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // for one detail of order
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
    if (response.ok) {
      const res_data = await response.json();
      console.log(res_data);

      sdetails(res_data);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        details,
        getD,
        token,
        storeToken,
        logout,
        userAuth,
        isLoggedIn,
        userData,
        isAdmin,
        productData,
        productData2,
        BASE_URL,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
