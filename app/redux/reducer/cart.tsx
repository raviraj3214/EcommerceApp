// import {ADD_TO_CART, REMOVE_FROM_CART, GET_FROM_CART} from '../cartAction'; //action

// const intiialState = {
//   cartItems: [], // multiple
// };

// export default function (state = intiialState, action) {
//   const {type, payload} = action;
//   switch (type) {
//     case ADD_TO_CART:
//       const t = Object.keys(state.cartItems);
//       console.log(
//         'cart items in reducer payload..........................................................................................................................',
//         t,
//       );

//       return {
//         ...state,
//         cartItems: [...state.cartItems, payload],
//       };
//     case Update_CART:
      
//       });
//       return {
//         ...state,
//         cartItems: itemsLeft, // No need to spread itemsLeft since it's already an array
//       };
//     case REMOVE_FROM_CART:
//       const itemsLeft = state.cartItems?.filter((item, index) => {
//         return item.name !== payload; // Return items whose name does not match the payload
//       });
//       return {
//         ...state,
//         cartItems: itemsLeft, // No need to spread itemsLeft since it's already an array
//       };
//     case GET_FROM_CART:
//       return {
//         ...state,
//       };

//     default:
//       return state;
//   }
// }
import { ADD_TO_CART, REMOVE_FROM_CART, GET_FROM_CART, UPDATE_CART } from '../cartAction'; //action

const initialState = {
  cartItems: [], // multiple
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_CART:
  // Check if the item already exists in the cart
  const existingItemIndex = state.cartItems.findIndex(item => item._id === payload._id);
  if (existingItemIndex !== -1) {
    // If item exists, update its quantity
    const updatedCartItems = state.cartItems.map((item, index) => {
      if (index === existingItemIndex) {
        return {
          ...item,
          quantity: item.quantity + payload.quantity // Increment quantity by payload quantity
        };
      }
      return item;
    });
    return {
      ...state,
      cartItems: updatedCartItems,
    };
  } else {
    // If item doesn't exist, add it to the cart
    return {
      ...state,
      cartItems: [...state.cartItems, payload],
    };
  }
    case UPDATE_CART:
      const updatedCartItems = state.cartItems.map(item => {
        console.log("payload update cart.......................................................................", payload.quantity);
        if (item._id === payload._id) { 
          return {
            ...item,
            quantity: payload.quantity, // Update the quantity of the item
          };
        }
        return item;
      });
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    case REMOVE_FROM_CART:
      const itemsLeft = state.cartItems.filter(item => item._id !== payload);
      return {
        ...state,
        cartItems: itemsLeft,
      };
    case GET_FROM_CART:
      return {
        ...state,
      };
    default:
      return state;
  }
}

