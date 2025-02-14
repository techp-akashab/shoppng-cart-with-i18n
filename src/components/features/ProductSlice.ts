//Imports
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../store/store";
// Defining the types
interface Rating {
  rate: number;
  count: number;
}
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
interface ProductState {
  products: Product[];
  product: Product | null;
}

//Defining the initial state
const initialState: ProductState = {
  products: [],
  product: null,
};

//Async function to fetch Products
export const fetchProducts = () => async (dispatch: AppDispatch) => {
  try {
    let res = await fetch("https://fakestoreapi.com/products");
    let data: Product[] = await res.json();
    dispatch(setProducts(data));
  } catch (error) {
    console.error("Error fetching products", error);
  }
};

// Creating a productSlice
const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    getProduct(state, action: PayloadAction<{ id: number }>) {
      let id = action.payload.id;
      state.product = state.products.find((item) => item.id === id) || null;
    },
  },
});

//Exporting the slice
export const { setProducts, getProduct } = ProductsSlice.actions;
export default ProductsSlice.reducer;
