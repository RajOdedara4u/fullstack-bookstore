import jwt from "jsonwebtoken";
import User from "../models/user-model.js";
const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization"); // it takes token from header like  ( Bearer <token> ) with one Bearer and white space
  const jwttoken = token.replace("Bearer", "").trim(); // removing Bearer and white space

  try {
    const isVerified = jwt.verify(jwttoken, process.env.JWT_SECRET_KEY); // verifying key is valid or not

    // if it's valid we get data which we define in sign method during creating token

    const userExsit = await User.findOne({
      email: isVerified.email,
    }).select({ password: 0 }); // finding email on db and getting info of the mail without password field

    // adding custom data into request
    req.user = userExsit;
    req.token = jwttoken;
    req.userId = userExsit._id;

    next(); // send to next controller...
  } catch (error) {
    return res.status(401).send({ message: "Invalid Token" });
  }
};
export default authMiddleware;
