import { ADDTO_CART, ADD_PARTICIPANTS, STARTED } from "./ActionType";

const initialState = {
  data: [],
  cart: [],
  loading: true,
  error: null,
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTO_CART:
      return {
        ...state,
        cart: [...state, action.payload],
      };
    case ADD_PARTICIPANTS:
      return {
        ...state,
        data: [...state, action.payload],
      };
    default:
      return {
        ...state,
      };
  }
};

export default bookingReducer;
