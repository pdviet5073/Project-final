import { combineReducers } from 'redux';
import hotelReducer from './hotel.reducer';
import signUpReducer from "./signUp_signIn.reducer";
import bookingReducer from "./booking.reducer";


export default combineReducers({
  hotelReducer,
  signUpReducer,
  bookingReducer
});
