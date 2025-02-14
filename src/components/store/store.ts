import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "../features/ProductSlice.ts";
import CartReducer from '../features/CartReducer'
export const store = configureStore({
  reducer: {
    products: ProductsReducer,
    cart: CartReducer
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;