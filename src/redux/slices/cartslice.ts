import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
    id: string;
    title: string;
    price: number;
    quantity: number;
}

interface CartState {
    items: CartItem[];
    totalAmount: number;
}

const initialState: CartState = {
    items: [],
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
       
        addItem(state, action: PayloadAction<Omit<CartItem, 'quantity'> & { quantity?: number }>) {
            const { id, title, price, quantity = 1 } = action.payload; // Default quantity to 1
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.items.push({ id, title, price, quantity });
            }
            
            state.totalAmount += price * quantity;
        },

       
        removeItem(state, action: PayloadAction<string>) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                state.totalAmount -= existingItem.price * existingItem.quantity;
                state.items = state.items.filter(item => item.id !== id);
            }
        },

      
        decrementItemQuantity(state, action: PayloadAction<string>) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                    state.totalAmount -= existingItem.price;
                } else {
                    state.totalAmount -= existingItem.price;
                    state.items = state.items.filter(item => item.id !== id);
                }
            }
        },

        incrementItemQuantity(state, action: PayloadAction<string>) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                existingItem.quantity += 1;
                console.log(existingItem.price, existingItem.quantity, state.totalAmount);
                state.totalAmount += existingItem.price;
            }
        },
        clearCart(state) {
            state.items = [];
            state.totalAmount = 0;
        },
    },
});

export const { addItem, removeItem, decrementItemQuantity, incrementItemQuantity,clearCart } = cartSlice.actions;

export default cartSlice.reducer;
