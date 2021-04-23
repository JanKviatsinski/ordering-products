import { registration } from '../../api/registration'
import { history } from '../../history'
import { PATH_ORDER_FORM } from '../../pathes'
import { MODAL_STATUS_ERROR, MODAL_STATUS_SUCCESS } from '../../constats'
import { addDataToStorage } from '../../api/addDataToStorage'
import { showModal, spinOff, spinOn } from '../appActions'
import { USER_IS_LOGGED } from './constatnts'

export function onSubmitRegistration({ password, email, displayName }) {
  return async (dispatch) => {
    dispatch(spinOn())

    const responseRegistration = await registration(
      { password, email, displayName },
    )
    const resultRegistration = await responseRegistration.json()
    const { idToken, localId } = resultRegistration

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

      dispatch(
        showModal({
          modalStatus: MODAL_STATUS_SUCCESS,
          modalTitle: 'SUCCESS',
          modalContent: 'SUCCESS',
        }),
      )

      history.push(PATH_ORDER_FORM)

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
