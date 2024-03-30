import axios from "axios";
import { getProducts } from "../reducers/ProductReducer";

export const getAsyncProducts = () => async (dispatch, getState) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    dispatch(getProducts(response.data));
  } catch (err) {
    console.log(err);
  }
};
