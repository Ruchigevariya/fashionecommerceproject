import * as ActionTypes from '../ActionTypes'

export const signUpAction = (data) => (dispatch) => {
    dispatch({type:ActionTypes.SIGNUP_USER, payload :data})
}

export const signInAction = (data) => (dispatch) => {
    dispatch({type:ActionTypes.SIGNIN_USER, payload :data})
}

export const signedInAction = (data) => (dispatch) => {
    dispatch({type: ActionTypes.SIGNED_USER, payload: data})
}

export const logOutAction = () => (dispatch) => {
    dispatch({type: ActionTypes.LOGOUT_USER})
}

export const loggedOutAction = () => (dispatch) => {
    dispatch({type: ActionTypes.LOGGEDOUT_USER})
}

