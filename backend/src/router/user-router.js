import express from "express"; // Importing express
const Userrouter = express.Router(); // Creating a new router instance
import { login, registration } from "../controllers/userControllers.js";
import { contact, placeOrderRoute } from "../controllers/userControllers.js";
Userrouter.route("/login").post(login);

Userrouter.route("/registration").post(registration);

Userrouter.route("/contact").post(contact);

Userrouter.route("/orderPlace").post(placeOrderRoute);

export default Userrouter; // Exporting the router using ES6 syntax
