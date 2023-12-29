import { combineReducers } from "redux";
import bookingReducer from "./Booking/Reducer";

const rootReducer = combineReducers({
  booking: bookingReducer,
});

export default rootReducer;
