import { fork } from 'redux-saga/effects';

import hotelSaga from './hotel.saga';
import todoListSaga from './todoList.saga';
import userAccountSaga from './signUp_signIn.saga';
import bookingSaga from './booking.saga';



export default function* mySaga() {
  yield fork(hotelSaga);
  yield fork(todoListSaga);
  yield fork(userAccountSaga);
  yield fork(bookingSaga);
  
}
