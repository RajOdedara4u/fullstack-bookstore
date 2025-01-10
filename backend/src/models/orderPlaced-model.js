import mongoose from "mongoose";

const orderPlacedSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  contact: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  reachMethod: {
    type: String,
    require: true,
  },
  pinCode: {
    type: String,
    require: true,
  },
  paymentMethod: {
    type: String,
    require: true,
  },
  items: {
    type: String,
    require: true,
  },
  amount: {
    type: String,
    require: true,
  },
  arrayObj: {
    type: Object,
    require: true,
  },
  date: {
    type: String,
    default: () => {
      // Create a new Date object and format it as you want (for example, YYYY-MM-DD)
      const today = new Date();
      const formattedDate = today.toISOString().split("T")[0]; // Format as 'YYYY-MM-DD'
      return formattedDate;
    },
  },
});

const orderPlaced = new mongoose.model("order", orderPlacedSchema);

export default orderPlaced;
