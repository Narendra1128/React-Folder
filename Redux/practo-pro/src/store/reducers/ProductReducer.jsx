import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { getProducts } = ProductSlice.actions;
export default ProductSlice.reducer;
