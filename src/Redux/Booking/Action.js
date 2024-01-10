import {
  STARTED,
  ADD_PARTICIPANTS,
  ADDTO_CART,
  REMOVE_CART,
  TOTAL_PRICE,
  PROCEED_BTN,
} from "./ActionType";

export const addParticipant = (data) => {
  return {
    type: ADD_PARTICIPANTS,
    payload: data,
  };
};

export const addtoCart = (val) => {
  debugger;
  return {
    type: ADDTO_CART,
    payload: val,
  };
};

export const removeCart = (val) => {
  return {
    type: REMOVE_CART,
    payload: val,
  };
};

export const proceedData = () => {
  return {
    type: TOTAL_PRICE,
  };
};

// export const total_price = () => {
//   return {
//     type: TOTAL_PRICE,
//   };
// };
