import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice/productSlice.js"
import cartReducer from "./productSlice/cartSlice.js"

export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer
    }
})