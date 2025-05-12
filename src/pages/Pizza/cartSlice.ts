import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  title: string;
  size: string;
  pastry: string;
  side?: string | null;
  ingredients?: Record<string, string>;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  image: string;
}

interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.cart.find(item =>
        item.id === action.payload.id &&
        item.size === action.payload.size &&
        item.pastry === action.payload.pastry
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
        existingItem.totalPrice = existingItem.quantity * existingItem.unitPrice;
      } else {
        const newItem = {
          ...action.payload,
          totalPrice: action.payload.quantity * action.payload.unitPrice
        };
        state.cart.push(newItem);
      }
    },

    removeFromCart: (state, action: PayloadAction<{ id: string; size: string; pastry: string }>) => {
      state.cart = state.cart.filter(item =>
        !(item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.pastry === action.payload.pastry)
      );
    },

    increaseQuantity: (state, action: PayloadAction<{ id: string; size: string; pastry: string }>) => {
      const item = state.cart.find(i =>
        i.id === action.payload.id &&
        i.size === action.payload.size &&
        i.pastry === action.payload.pastry
      );
      if (item) {
        item.quantity += 1;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },

    decreaseQuantity: (state, action: PayloadAction<{ id: string; size: string; pastry: string }>) => {
      const item = state.cart.find(i =>
        i.id === action.payload.id &&
        i.size === action.payload.size &&
        i.pastry === action.payload.pastry
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },

    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
