import { combineReducers } from 'redux';
import hotelReducer from './hotel.reducer';
import todoListReducer from './todoList.reducer';
import signUpReducer from "./signUp_signIn.reducer";
import bookingReducer from "./booking.reducer";


export default combineReducers({
  hotelReducer,
  todoListReducer,
  signUpReducer,
  bookingReducer
});
