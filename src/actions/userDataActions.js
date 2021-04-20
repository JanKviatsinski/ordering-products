import { registration } from '../api/registration'
import { authentication } from '../api/authentication'
import { history } from '../history'
import { PATH_ORDER_FORM } from '../pathes'
import {
  MODAL_STATUS_ERROR_AUTHENTICATION,
  MODAL_STATUS_ERROR_REGISTRATION, MODAL_STATUS_SUCCESS_AUTHENTICATION,
  MODAL_STATUS_SUCCESS_REGISTRATION,
  SHOW_MODAL, SPIN_OF, SPIN_ON,
} from '../constats'

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

    if (idToken !== undefined) {
      console.log('YES')

      dispatch({
        type: SHOW_MODAL,
        payload: {
          modalStatus: MODAL_STATUS_SUCCESS_REGISTRATION,
          modalTitle: 'SUCCESS',
          modalContent: 'SUCCESS',
        },
      })

      history.push(PATH_ORDER_FORM)

      return dispatch({
        type: USER_IS_LOGGED,
        payload: {
          password, email, displayName, idToken, localId,
        },
      })
    }
    console.log('ERROR')

    return dispatch({
      type: SHOW_MODAL,
      payload: {
        modalStatus: MODAL_STATUS_ERROR_REGISTRATION,
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

    if (idToken !== undefined) {
      console.log('yes', displayName, idToken)
      history.push(PATH_ORDER_FORM)

      dispatch({
        type: SHOW_MODAL,
        payload: {
          modalStatus: MODAL_STATUS_SUCCESS_AUTHENTICATION,
          modalTitle: 'SUCCESS',
          modalContent: 'SUCCESS',
        },
      })

      return dispatch({
        type: USER_IS_LOGGED,
        payload: {
          password, email, displayName, idToken, localId,
        },
      })
    }

    console.log('ERROR')
    return dispatch({
      type: SHOW_MODAL,
      payload: {
        modalStatus: MODAL_STATUS_ERROR_AUTHENTICATION,
        modalTitle: 'ERROR',
        modalContent: 'ERROR',
      },
    })
  }
}

// const localId = resultRegistration.localId

// const responseDataUser = await getUserData(idToken)
// const resultDataUser = await responseDataUser.json()
//
// console.log(resultDataUser)
