import express from "express"; // Importing express
const authRouter = express.Router(); // Creating a new router instance
import authMiddleware from "../middlewares/auth-middleware.js";
import {
  home,
  getusers,
  delateuser,
  userVerify,
  getmessage,
  getorders,
  addproduct,
  getproduct,
  getorderdetail,
  delateproduct,
} from "../controllers/authControllers.js";

authRouter.route("/").get(home);

authRouter.route("/addproduct").post(addproduct);

authRouter.route("/getproduct").get(getproduct);

authRouter.route("/delateproduct").post(delateproduct);

authRouter.route("/userVerify").get(authMiddleware, userVerify);

authRouter.route("/getusers").get(getusers);

authRouter.route("/delateuser").post(delateuser);

authRouter.route("/getmessage").get(getmessage);

authRouter.route("/getorders").get(getorders);

authRouter.route("/getorderdetail").post(getorderdetail);

export default authRouter; // Exporting the router using ES6 syntax
