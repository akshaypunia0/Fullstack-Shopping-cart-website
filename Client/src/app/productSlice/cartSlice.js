import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0 
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducer: {

        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.cartItems.find((cartItem) => cartItem.id === item.id);
            if(existingItem){
                existingItem.quantity += 1;
            }
            else {
                state.cartItem.push({...item, quantity: 1});
            }
        }

    }
})

export default cartSlice.reducer