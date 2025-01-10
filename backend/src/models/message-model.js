import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  subject: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },
});

const Message = new mongoose.model("message", messageSchema);

export default Message;
