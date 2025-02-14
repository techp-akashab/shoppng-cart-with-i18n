// Imports
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//Defining the types
interface CartState {
  cartItems: { [id: number]: number };
}

//Defining the initial state
const initialState: CartState = {
  cartItems: {},
};

//Creating a slice
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<{ id: number }>) {
      const { id } = action.payload;
      if (state.cartItems[id]) {
        state.cartItems[id] += 1;
      } else {
        state.cartItems[id] = 1;
      }
    },
    removeFromCart(state, action: PayloadAction<{ id: number }>) {
      const { id } = action.payload;
      if (state.cartItems[id]) {
        if (state.cartItems[id] > 1) {
          state.cartItems[id] -= 1;
        } else if (state.cartItems[id] === 1) {
          delete state.cartItems[id];
        }
      }
    },
    modifyCart:(state, action:PayloadAction<{id:number, quantity:number}>)=>{
      const {id, quantity}= action.payload;
      if(quantity > 0){
        state.cartItems[id] = quantity;
      }
    }
    
  },
});
export const {
  addToCart,
  removeFromCart,
  modifyCart
} = CartSlice.actions;
export default CartSlice.reducer;
