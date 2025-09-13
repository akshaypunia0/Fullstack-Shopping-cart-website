import { createSlice } from "@reduxjs/toolkit";

const productsInitialState = {
    products: [
      { id: 1, name: "iPhone 15 Pro", category: "electronics", price: 120000, image: "https://images.unsplash.com/photo-1695639509828-d4260075e370?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { id: 2, name: "Samsung Galaxy S23", category: "electronics", price: 90000, image: "https://images.unsplash.com/photo-1678958274412-563119ec18ab?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
      { id: 3, name: "Nike Air Zoom", category: "fashion", price: 12000, image: "https://static.nbastore.in/resized/500X500/645/nike-air-zoom-gt-jump-2-ep-basketball-shoes-mystic-hibiscus-red-red-66dc6b64aa97c.jpg?format=webp" },
      { id: 4, name: "Denim Jacket", category: "fashion", price: 5000, image: "https://www.crossjeans.com/cdn/shop/files/A_315_075_cross_jeans_null_0_550x.jpg?v=1721982622" },
      { id: 5, name: "The Alchemist", category: "books", price: 500, image: "https://m.media-amazon.com/images/I/81ZtAPCqyGL._UF1000,1000_QL80_.jpg" },
      { id: 6, name: "Rich Dad Poor Dad", category: "books", price: 400, image: "https://bookkish.com/cdn/shop/products/F6FcCCQ_488x.jpg?v=1613326414" },
    ]
}

const productSlice = createSlice({
    name: "products",
    initialState: productsInitialState,
    reducers: {

    }
})

export default productSlice.reducer;