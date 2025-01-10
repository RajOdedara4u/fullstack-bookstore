import mongoose from "mongoose";
import { config } from "dotenv";
config();

const URI = process.env.MONGO_URL;

const mongoCD = async () => {
  try {
    await mongoose.connect(URI);
    console.log("DB Connection Sucess....");
  } catch (error) {
    console.log(error.message);
  }
};

export default mongoCD;
