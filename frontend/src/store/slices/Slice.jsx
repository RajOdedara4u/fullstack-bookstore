import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartitems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  TotalQuantity: 0,
  TotalAmount: 0,
};

const cartProductSlice = createSlice({
  name: "cartProductSlice",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartitems.findIndex(
        (item) => item.name === action.payload.name
      );
      if (itemIndex >= 0) {
        state.cartitems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartitems.push(tempProduct);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartitems));
    },

    romoveFromCart(state, action) {
      const nextCartItems = state.cartitems.filter((cartItem) => {
        return cartItem.name !== action.payload;
      });

      state.cartitems = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartitems));
    },

    decreaseCart(state, action) {
      const itemIndex = state.cartitems.findIndex(
        (item) => item.name === action.payload
      );

      if (state.cartitems[itemIndex].cartQuantity > 1) {
        state.cartitems[itemIndex].cartQuantity -= 1;
      } else if (state.cartitems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartitems.filter((cartItem) => {
          return cartItem.name !== action.payload;
        });
        state.cartitems = nextCartItems;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartitems));
    },

    getTotal(state, action) {
      let { total, quantity } = state.cartitems.reduce(
        (cartTotal, cartItem) => {
          const { sellPrice, cartQuantity } = cartItem;

          const price = Number(sellPrice); // Convert sellPrice to a number

          const itemTotal = price * cartQuantity; // Multiply price by cartQuantity

          cartTotal.total += itemTotal; // Add itemTotal to total
          cartTotal.quantity += cartQuantity; // Add cartQuantity to total quantity

          return cartTotal; // Return updated cartTotal object
        },
        {
          total: 0, // Initialize total to 0
          quantity: 0, // Initialize quantity to 0
        }
      );

      state.TotalAmount = total; // Set the total amount in the state
      state.TotalQuantity = quantity; // Set the total quantity in the state
    },
  },
});

export { cartProductSlice };
export const { addToCart, romoveFromCart, decreaseCart, getTotal } =
  cartProductSlice.actions;
