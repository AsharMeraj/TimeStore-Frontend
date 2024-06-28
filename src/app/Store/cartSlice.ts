// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { RootState } from './store';
// import { MainDatum, SizeEnum } from '../ProductPage/ProductList/ProductType';

// // Define the CartItem and CartState interfaces
// interface CartItem {
//   data: MainDatum
//   quantity?: number;
//   selectedSize?: SizeEnum
// }

// interface CartState {
//   cartItems: CartItem[];
// }

// interface updateCartInterface {
//   data: MainDatum
//   val: React.ChangeEvent<HTMLSelectElement>
//   key: string
// }
// // Define the AddToCartPayload interface


// const initialState: CartState = {
//   cartItems: [],
// };

// export const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action: PayloadAction<CartItem[]>) => {
//       const findItem = state.cartItems.find((item) => item.data.id === action.payload[0].data.id);
//       if (findItem) {
//         findItem.quantity++;
//         findItem.data.attributes.price = findItem.quantity * findItem.data.attributes.price;
//       } else {
//         state.cartItems.push({ ...action.payload[0], quantity: 1 });
//       }
//     },
//     updateCart: (state, action:PayloadAction<updateCartInterface>) => {
//       state.cartItems = state.cartItems.map((item) => {
//         if (item.data.id === action.payload.data.id){
//           return {...item, [action.payload.key]: action.payload.val}
//         }
//         else {
//           return item.data
//         }
//       })
//     }
//   },
// });

// export const { addToCart } = cartSlice.actions;

// // Selector
// export const selectCount = (state: RootState) => state.cart.cartItems;

// export default cartSlice.reducer;


import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { MainDatum, SizeEnum } from '../ProductPage/ProductList/ProductType';

// Define the CartItem and CartState interfaces
export interface CartItem {
  data: MainDatum;
  quantity: number;
  selectedSize: SizeEnum;
  singlePrice: number
}

interface CartState {
  cartItems: CartItem[];
}

interface UpdateCart {
  data: MainDatum;
  val: string | number;
  key: string;
}

interface RemoveItem {
  data: MainDatum
}

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const findItem = state.cartItems.find((item) => item.data.id === action.payload.data.id);
      if (findItem) {
        findItem.quantity = (findItem.quantity || 0) + 1;
        findItem.data.attributes.price = findItem.quantity * findItem.data.attributes.price;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    updateCart: (state, action: PayloadAction<UpdateCart>) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.data.id === action.payload.data.id) {
          if (action.payload.key === 'quantity') {
            item.data.attributes.price = item.singlePrice * +action.payload.val
          }
          return { ...item, [action.payload.key]: action.payload.val };
        }
        return item;
      });
    },
    removeFromCart: (state, action: PayloadAction<RemoveItem>) => {
      state.cartItems = state.cartItems.filter((item) => item.data.id !== action.payload.data.id)
    }
  },
});

export const { addToCart, updateCart, removeFromCart } = cartSlice.actions;

// Selector
export const selectCount = (state: RootState) => state.cart.cartItems;

export default cartSlice.reducer;
