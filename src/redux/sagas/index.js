import { fork } from 'redux-saga/effects';

import hotelSaga from './hotel.saga';
import userAccountSaga from './signUp_signIn.saga';
import bookingSaga from './booking.saga';



export default function* mySaga() {
  yield fork(hotelSaga);
  yield fork(userAccountSaga);
  yield fork(bookingSaga);
  
}
