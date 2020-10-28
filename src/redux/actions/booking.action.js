import {
  CREATE_TEMP_BOOKING,
  GET_ROOM_BOOKING,
} from '../constants';

export function getRoomBooking(params) {
  return {
    type: GET_ROOM_BOOKING,
    payload: params,
  }
}

export function createTempBooking(params) {
  return {
    type: CREATE_TEMP_BOOKING,
    payload: params,
  }
}
