import { call, put, takeEvery, all } from 'redux-saga/effects'
import { signupApi } from '../../Common/API/auth.api';
import * as ActionTypes from '../ActionTypes';

function* signUp(action) {
  try {
    const user = yield call(signupApi, action.payload);
    console.log(user);
    //   yield put({type: "USER_FETCH_SUCCEEDED", user: user});
  } catch (e) {
    console.log(e);
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}

function* watchSignUp() {
  yield takeEvery(ActionTypes.SIGNUP_USER, signUp);
}

export function* authSaga() {
  yield all([
    watchSignUp()
  ])
}