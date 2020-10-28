import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import {
  GET_ROOM_BOOKING,
  GET_ROOM_BOOKING_SUCCESS,
  GET_ROOM_BOOKING_FAIL,
  CREATE_TEMP_BOOKING,
  CREATE_TEMP_BOOKING_SUCCESS,
  CREATE_TEMP_BOOKING_FAIL,
} from '../constants';

const apiUrl = 'http://localhost:3001';

function* getRoomBookingSaga(action){
  try {
    const {idRoom, idHotel } = action.payload;
    const responseRoom = yield axios.get(`${apiUrl}/rooms?id=${idRoom}`);
    const responseHotel = yield axios.get(`${apiUrl}/hotel?id=${idHotel}`);
    const dataHotel = responseHotel.data
    const dataRoom = responseRoom.data;
    const data = [...dataHotel,...dataRoom]
    yield put({
      type: GET_ROOM_BOOKING_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: GET_ROOM_BOOKING_FAIL,
      payload: error,
    });
  }
}
function* createTempBookingSaga(action){
  try {
    const response= yield axios.post(`${apiUrl}/tempBooking`, action.payload);
    const data = response.data
  
    yield put({
      type: CREATE_TEMP_BOOKING_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: CREATE_TEMP_BOOKING_FAIL,
      payload: error,
    });
  }
}



export default function* bookingSaga(){
  yield takeEvery(GET_ROOM_BOOKING, getRoomBookingSaga);
  yield takeEvery(CREATE_TEMP_BOOKING, createTempBookingSaga);

 
}
