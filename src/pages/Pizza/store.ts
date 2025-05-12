import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const loadCartFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('cart');
    if (serializedState === null) {
      return undefined;
    }
    return {
      cart: {
        cart: JSON.parse(serializedState)
      }
    };
  } catch (e) {
    console.warn("localStorage oxunmadı:", e);
    return undefined;
  }
};


const saveCartToLocalStorage = (state: any) => {
  try {
    const serializedState = JSON.stringify(state.cart.cart);
    localStorage.setItem('cart', serializedState);
  } catch (e) {
    console.warn("localStorage yazılmadı:", e);
  }
};


const preloadedState = loadCartFromLocalStorage();

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveCartToLocalStorage(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
