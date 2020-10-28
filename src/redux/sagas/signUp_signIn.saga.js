import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import {
  CREATE_USER_ACCOUNT,
  CREATE_USER_ACCOUNT_FAIL,
  CREATE_USER_ACCOUNT_SUCCESS,
  GET_USER_ACCOUNT,
  GET_USER_ACCOUNT_FAIL,
  GET_USER_ACCOUNT_SUCCESS,
} from "../constants";

const apiUrl = "http://localhost:3001";

function* createUserAccountSaga(action) {
  try {
    const response = yield axios.post(`${apiUrl}/userAccount`, action.payload);
    const data = response.data;
    yield put({
      type: CREATE_USER_ACCOUNT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: CREATE_USER_ACCOUNT_FAIL,
      payload: error,
    });
  }
}
function* getUserAccountSaga(action) {
  const { email, password } = action.payload;
  const response = yield axios.get(`${apiUrl}/userAccount?email=${email}&password=${password}`
  );
  const data = response.data;
  if (data.length) {
    let user = JSON.stringify(data[0]);
    localStorage.setItem("user", user);
    yield put({
      type: GET_USER_ACCOUNT_SUCCESS,
      payload: data[0],
    });
  } else {
    yield put({
      type: GET_USER_ACCOUNT_FAIL,
    });
  }
}

export default function* userAccountSaga() {
  yield takeEvery(CREATE_USER_ACCOUNT, createUserAccountSaga);
  yield takeEvery(GET_USER_ACCOUNT, getUserAccountSaga);
}
