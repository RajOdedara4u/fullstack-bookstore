import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  realPrice: {
    type: String,
    require: true,
  },
  sellPrice: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  catagory: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  rating: {
    type: String,
    require: true,
  },
  year: {
    type: String,
    require: true,
  },
});

const Product = mongoose.model("product", productSchema); // Capitalized 'Product'

export default Product;
