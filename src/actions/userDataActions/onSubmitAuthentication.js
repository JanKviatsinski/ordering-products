import { showModal, spinOff, spinOn } from '../appActions'
import { authentication } from '../../api/authentication'
import { addDataToStorage } from '../../api/addDataToStorage'
import { history } from '../../history'
import { PATH_ORDER_FORM } from '../../pathes'
import { MODAL_STATUS_ERROR, MODAL_STATUS_SUCCESS } from '../../constats'
import { USER_IS_LOGGED } from './constatnts'

export function onSubmitAuthentication({ email, password }) {
  return async (dispatch) => {
    dispatch(spinOn())

    const responseAuthentication = await authentication(email, password)
    const resultAuthentication = await responseAuthentication.json()
    const { idToken, displayName, localId } = resultAuthentication

    dispatch(spinOff())

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

      dispatch(
        showModal({
          modalStatus: MODAL_STATUS_SUCCESS,
          modalTitle: 'SUCCESS',
          modalContent: 'SUCCESS',
        }),
      )

      return dispatch({
        type: USER_IS_LOGGED,
        payload: userData,
      })
    }

    console.log('ERROR')
    return dispatch(
      showModal({
        modalStatus: MODAL_STATUS_ERROR,
        modalTitle: 'ERROR',
        modalContent: 'ERROR',
      }),
    )
  }
}
