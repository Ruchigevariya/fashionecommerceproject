import { call, put, takeEvery, all } from 'redux-saga/effects'
import { logOutApi, signInApi, signOutApi, signupApi } from '../../Common/API/auth.api';
import { history } from '../../history';
import { setAlert } from '../action/alert.action';
import { loggedOutAction, signedInAction, signedInAlert } from '../action/auth.action';
import * as ActionTypes from '../ActionTypes';

function* signUp(action) {
  try {
    const user = yield call(signupApi, action.payload);
    yield put (setAlert({ text: user.payload, color: "success"}))
    console.log(user);
    //   yield put({type: "USER_FETCH_SUCCEEDED", user: user});
  } catch (e) {
    yield put (setAlert({ text: e.payload, color: "error"}))
    console.log(e);
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}

function* signIn(action) {
  try{
    const user = yield call(signInApi, action.payload);
    yield put(signedInAction(user))
    history.push("/")

    yield put (setAlert({ text: "Login sucessfully.", color: "success"}))
    console.log(user);
  } catch (e) {
    yield put (setAlert({ text: e.payload, color: "error"}))
    console.log(e);
  }
}

function* logOut(action) {
  try{
    const user = yield call(logOutApi);
    yield put(loggedOutAction(user))
    history.push("/")
    yield put (setAlert({ text: user.payload, color: "success"}))
    console.log(user);
  } catch (e) {
    yield put (setAlert({ text: e.payload, color: "error"}))
    console.log(e);
  }
}

function* watchSignUp() {
  yield takeEvery(ActionTypes.SIGNUP_USER, signUp);
}

function* watchSignIn() {
  yield takeEvery(ActionTypes.SIGNIN_USER, signIn)
}

function* watchLogOut() {
  yield takeEvery(ActionTypes.LOGOUT_USER,logOut)
}

export function* authSaga() {
  yield all([
    watchSignUp(),
    watchSignIn(),
    watchLogOut()
  ])
}