import { STARTED, ADD_PARTICIPANTS, ADDTO_CART } from "./ActionType";

export const addParticipant = (data) => {
  return { 
    type: ADD_PARTICIPANTS, 
    payload: data 
 };
};

export const addtoCart = (data) => {
  return {
    type: ADDTO_CART,
    payload: data,
  };
};
