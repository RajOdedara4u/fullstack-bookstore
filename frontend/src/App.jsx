import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import SingleBook from "./components/miniComponents/SingleBook";
import Login from "./components/miniComponents/loginSingup/Login";
import Singup from "./components/miniComponents/loginSingup/Singup";
import Cart from "./components/miniComponents/Cart/cart/Cart";
import Logout from "./components/miniComponents/logout/Logout";
import Search from "./components/commonComponents/Search";

// Admin Pages
import AddSAdmin from "./adminPanel/UI/pages/superadmin/AddSAdmin";
import Dasboard from "./adminPanel/UI/pages/Dashboard";
import Orders from "./adminPanel/UI/pages/orders/Orders";
import Inbox from "./adminPanel/UI/pages/inbox/Inbox";
import Users from "./adminPanel/UI/pages/users/Users";
import SuperAdmins from "./adminPanel/UI/pages/superadmin/Superadmins";
import Invoice from "./adminPanel/UI/pages/ecommerce/invonce/Invonce";
import AddProduct from "./adminPanel/UI/pages/productPages/AddProduct";
import Checkout from "./components/miniComponents/Cart/checkout/Checkout";
import Placed from "./components/miniComponents/Cart/Placed";
import SeeAll from "./adminPanel/UI/pages/productPages/SeeAll";
import { AuthContext } from "./store/contexStore/store";
import { useContext, useEffect, useState } from "react";
import PageNotFound from "./components/miniComponents/404/PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS

function App() {
  const { isLoggedIn, isAdmin } = useContext(AuthContext); // Access token and logout function
  const [isAdminn, sisAdminn] = useState(isAdmin);
  const [isLoggedInn, sisLoggedInn] = useState(isLoggedIn);
  useEffect(() => {
    sisAdminn(isAdmin);
    sisLoggedInn(isLoggedIn);
  }, [isAdmin, isLoggedIn]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/singlebook" element={<SingleBook />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Singup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<PageNotFound />} />

          {isLoggedInn ? (
            <Route path="/checkout" element={<Checkout />} />
          ) : null}
          {isLoggedInn ? <Route path="/logout" element={<Logout />} /> : null}
          {isLoggedInn ? (
            <Route path="/placed/:id" element={<Placed />} />
          ) : null}

          {/* Admin Routes */}
          {isAdminn ? <Route path="/dashboard" element={<Dasboard />} /> : null}
          {isAdminn ? <Route path="/orders" element={<Orders />} /> : null}
          {isAdminn ? <Route path="/inbox" element={<Inbox />} /> : null}
          {isAdminn ? <Route path="/users" element={<Users />} /> : null}
          {isAdminn ? (
            <Route path="/superadmins" element={<SuperAdmins />} />
          ) : null}
          {isAdminn ? <Route path="/invoice" element={<Invoice />} /> : null}
          {isAdminn ? (
            <Route path="/addproduct" element={<AddProduct />} />
          ) : null}
          {isAdminn ? (
            <Route path="/addsuperadmin" element={<AddSAdmin />} />
          ) : null}
          {isAdminn ? <Route path="/seeall" element={<SeeAll />} /> : null}
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition:Bounce
        />
      </BrowserRouter>
    </>
  );
}
export default App;
