import {
  ADDTO_CART,
  ADD_PARTICIPANTS,
  REMOVE_CART,
  TOTAL_PRICE,
} from "./ActionType";

const initialState = {
  data: [],
  cart: [],
  total: 0,
  total_price: 0,
  loading: true,
  error: null,
};

const bookingReducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case ADDTO_CART:
      console.log(action.payload);
      debugger;
      return {
        ...state,
        cart: [...state.cart, action.payload],
        total: state.total + 1,
      };
    case ADD_PARTICIPANTS:
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case REMOVE_CART:
      console.log(action.payload.id);
      const indexToRemove = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (indexToRemove !== -1) {
        const newcart = [
          ...state.cart.slice(0, indexToRemove),
          ...state.cart.slice(indexToRemove + 1),
        ];
        return { ...state, cart: newcart, total: state.total - 1 };
      }
      return state;

    case TOTAL_PRICE:
      const newArray = [...state.cart];
      console.log(newArray, "NewArray");
      const total_price = newArray.reduce((a, b) => {
        return Number(a) + Number(b.Price);
      }, 0);
      console.log(total_price);

      return {
        total_price: total_price,
      };

    default:
      return {
        ...state,
      };
  }
};

export default bookingReducer;
