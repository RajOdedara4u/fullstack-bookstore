import User from "../models/user-model.js";
import Message from "../models/message-model.js";
import orderPlaced from "../models/orderPlaced-model.js";
import Product from "../models/product-model.js";

const home = async (req, res) => {
  try {
    res.status(200).send("It's home here....");
  } catch (error) {
    res.status(200).send(error);
  }
};

//SEND USER DATA LOGIC---------------------------------------------------------------------------------------------
const userVerify = async (req, res) => {
  try {
    const userData = req.user; // accessing the custom data from request
    return res.status(200).json(userData); // returnig data when token is verified
  } catch (error) {
    res.status(401).send(error);
  }
};
//------------------------------------------------------------------------------------------------------------------------

//GETING USER DATA FROM DB LOGIC----------
const getusers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};
//----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------

//Delate product DATA FROM DB LOGIC----------
const delateproduct = async (req, res) => {
  const { _id } = req.body;

  try {
    // Find and delete the user by their _id
    const delateproduct = await Product.findByIdAndDelete(_id);

    if (!delateproduct) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Server error", error });
  }
};
//----------------------------------------------------------------------------------------------------------------------------------

//Delate USER DATA FROM DB LOGIC----------
const delateuser = async (req, res) => {
  const { _id } = req.body;

  try {
    // Find and delete the user by their _id
    const deletedUser = await User.findByIdAndDelete(_id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res
      .status(200)
      .json({ message: "User deleted successfully", user: deletedUser });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Server error", error });
  }
};
//----------------------------------------------------------------------------------------------------------------------------------

//GETING USER DATA FROM DB LOGIC----------
const getmessage = async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    console.log(error);
  }
};
//----------------------------------------------------------------------------------------------------------------------------------

//ADD PRODUCT----------
const addproduct = async (req, res) => {
  try {
    const {
      author,
      catagory,
      description,
      image,
      name,
      rating,
      realPrice,
      sellPrice,
      year,
    } = req.body;

    const done = await Product.create({
      name,
      author,
      catagory,
      description,
      image,
      rating,
      realPrice,
      sellPrice,
      year,
    });

    res.status(200).json({ message: "Sucess.." });
  } catch (error) {
    res.status(200).send("sorry", error);
  }
};
//----------------------------------------------------------------------------------------------------------------------------------

//GETING USER DATA FROM DB LOGIC----------
const getproduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
};
//----------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------------------

//GETING USER DATA FROM DB LOGIC----------
const getorders = async (req, res) => {
  try {
    const orders = await orderPlaced.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(found);
  }
};
//----------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------------------

//GETING USER DATA FROM DB LOGIC----------
const getorderdetail = async (req, res) => {
  const data = req.body;
  try {
    const found = await orderPlaced.find({ _id: data.id });

    if (found) {
      res.status(200).json(found);
    } else {
      res.status(500).json({ message: "Not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Not Found" });
  }
};
//----------------------------------------------------------------------------------------------------------------------------------
export {
  delateproduct,
  home,
  getusers,
  userVerify,
  getmessage,
  getorders,
  addproduct,
  getproduct,
  getorderdetail,
  delateuser,
};
