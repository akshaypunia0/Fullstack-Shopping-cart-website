import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [

    ],
    totalAmount: 0,
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.cartItems.find((cartItem) => cartItem.id === item.id);
            if(existingItem){
                existingItem.quantity += 1;
            }
            else {
                state.cartItems.push({...item, quantity: 1});
            }
        },

        removeFromCart: (state, action) => {

            const id = action.payload;

            state.cartItems = state.cartItems.filter((item) => item.id !== id);
        },

        emptyCart: (state) => {
            console.log("empty cart function running");
            
            state.cartItems = [];
            state.totalAmount = 0;
            state.totalQuantity = 0;
        },

        reduceItemQuantity: (state, action) => {
            const id = action.payload;
            
            const existingItem = state.cartItems.find((item) => item.id === id)

            if (existingItem) {
                existingItem.quantity -= 1;
            }

        },

        increaseItemQuantity: (state, action) => {
            const id = action.payload;
            
            const existingItem = state.cartItems.find((item) => item.id === id)

            if (existingItem) {
                existingItem.quantity += 1;
            }

        }

    }
})

export const { addToCart, removeFromCart, emptyCart, reduceItemQuantity, increaseItemQuantity } = cartSlice.actions

export default cartSlice.reducer