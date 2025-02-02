import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./reducers/UserReducer";
import ProductReducer from "./reducers/ProductReducer";

export const store = configureStore({
  reducer: {
    users : UserReducer,
    products: ProductReducer,
  },
});
