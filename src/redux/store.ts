import { configureStore } from '@reduxjs/toolkit'
import productSlice from './slices/productslice'  
import cartSlice from './slices/cartslice'
export const store = configureStore({
  reducer: {
    products: productSlice,
    cart: cartSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch