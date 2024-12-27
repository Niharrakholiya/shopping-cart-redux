import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunks
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
});

export const fetchProductById = createAsyncThunk("products/fetchProductById", async (id: number) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
});

interface ProductState {
    products: Product[];
    product: Product | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }
  
  const initialState: ProductState = {
    products: [],
    product: null,
    status: 'idle',
    error: null,
  };

// Slice
const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {}, // Add reducers if needed
    extraReducers: (builder) => {
        builder
            // Handle fetchProducts
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.products = action.payload; // Corrected to update `products`
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message ?? null;
            })
            // Handle fetchProductById
            .addCase(fetchProductById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.product = action.payload; // Corrected to update `product`
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message ?? null;
            });
    },
});

// Export the reducer
export default productSlice.reducer;
