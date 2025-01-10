import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

//pre will execute before storing data
userSchema.pre("save", async function (next) {
  const user = this; // this contain object which contain user values which we have to store
  if (!user.isModified("password")) {
    next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(user.password, salt); // converting
    user.password = hashPassword; // changing real to bcrypted password
  } catch (error) {
    next(error);
  }
});

// JWT token genrator
userSchema.methods.genrateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.error(error);
  }
};

//Password Checking for login route....
userSchema.methods.checkPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = new mongoose.model("User", userSchema);

export default User;
