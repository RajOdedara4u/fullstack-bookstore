import { configureStore } from "@reduxjs/toolkit";
import { cartProductSlice, getTotal } from "./slices/Slice";
const store = configureStore({
  reducer: {
    cartProduct: cartProductSlice.reducer,
  },
});
store.dispatch(getTotal());
export default store;
