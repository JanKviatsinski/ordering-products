import { registration } from '../api/registration'
import { authentication } from '../api/authentication'
import { history } from '../history'
import { PATH_ORDER_FORM } from '../pathes'
import {
  MODAL_STATUS_ERROR,
  MODAL_STATUS_SUCCESS,
  SHOW_MODAL, SPIN_OF, SPIN_ON,
} from '../constats'
import { addDataToStorage } from '../api/addDataToStorage'

const MODULE_NAME = 'UserData'
export const USER_IS_LOGGED = `${MODULE_NAME}/USER_IS_LOGGED`

export function onSubmitRegistration({ password, email, displayName }) {
  return async (dispatch) => {
    dispatch({
      type: SPIN_ON,
    })

    const responseRegistration = await registration(
      { password, email, displayName },
    )
    const resultRegistration = await responseRegistration.json()
    const { idToken, localId } = resultRegistration

    dispatch({
      type: SPIN_OF,
    })

    const userData = {
      password,
      email,
      displayName,
      localId,
      isLogged: true,
    }

    if (idToken !== undefined) {
      addDataToStorage('userData', userData)
      console.log(localStorage)

      dispatch({
        type: SHOW_MODAL,
        payload: {
          modalStatus: MODAL_STATUS_SUCCESS,
          modalTitle: 'SUCCESS',
          modalContent: 'SUCCESS',
        },
      })

      history.push(PATH_ORDER_FORM)

      return dispatch({
        type: USER_IS_LOGGED,
        payload: userData,
      })
    }
    console.log('ERROR')

    return dispatch({
      type: SHOW_MODAL,
      payload: {
        modalStatus: MODAL_STATUS_ERROR,
        modalTitle: 'ERROR',
        modalContent: 'ERROR',
      },
    })
  }
}

export function onSubmitAuthentication({ email, password }) {
  return async (dispatch) => {
    dispatch({
      type: SPIN_ON,
    })

    const responseAuthentication = await authentication(email, password)
    const resultAuthentication = await responseAuthentication.json()
    const { idToken, displayName, localId } = resultAuthentication

    dispatch({
      type: SPIN_OF,
    })

    const userData = {
      password,
      email,
      displayName,
      localId,
      isLogged: true,
    }

    if (idToken !== undefined) {
      addDataToStorage('userData', userData)
      console.log(localStorage)

      history.push(PATH_ORDER_FORM)

      dispatch({
        type: SHOW_MODAL,
        payload: {
          modalStatus: MODAL_STATUS_SUCCESS,
          modalTitle: 'SUCCESS',
          modalContent: 'SUCCESS',
        },
      })

      return dispatch({
        type: USER_IS_LOGGED,
        payload: userData,
      })
    }

    console.log('ERROR')
    return dispatch({
      type: SHOW_MODAL,
      payload: {
        modalStatus: MODAL_STATUS_ERROR,
        modalTitle: 'ERROR',
        modalContent: 'ERROR',
      },
    })
  }
}
