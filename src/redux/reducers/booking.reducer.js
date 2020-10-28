import {
  GET_ROOM_BOOKING_SUCCESS,
  GET_ROOM_BOOKING_FAIL,
  CREATE_TEMP_BOOKING_SUCCESS,
  CREATE_TEMP_BOOKING_FAIL,
} from '../constants';

const initialState = {
  roomBooking: [],
  tempBooking:{}
};

export default function bookingReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ROOM_BOOKING_SUCCESS: {
      return {
        ...state,
        roomBooking: [
          ...action.payload,
        ],
      }
    }
    case CREATE_TEMP_BOOKING_SUCCESS: {
      return {
        ...state,
        tempBooking:{
          ...action.payload,
        },
      }
    }
    
    default: {
      return state;
    }
  }
}
