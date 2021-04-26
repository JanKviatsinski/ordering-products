import {
  activeModalStatus,
  spinOff,
  spinOn,
} from '../appActions'
import { postAuthentication } from '../../api/postAuthentication'
import { addToStorage } from '../../api/addToStorage'
import { history } from '../../history'
import { PATH_ORDER_FORM } from '../../pathes'
import { MODAL_STATUS_ERROR, MODAL_STATUS_SUCCESS } from '../../utils/showModal'
import { USER_IS_LOGGED } from './constatnts'

export function onSubmitAuthentication({ email, password }) {
  return async (dispatch) => {
    dispatch(spinOn())

    try {
      const responseAuthentication = await postAuthentication(email, password)
      const resultAuthentication = await responseAuthentication.json()
      const { idToken, displayName, localId } = resultAuthentication

      dispatch(spinOff())

      const userData = {
        password,
        email,
        displayName,
        localId,
      }

      if (idToken !== undefined) {
        addToStorage('userData', userData)
        addToStorage('app', { isLogged: true })

        history.push(PATH_ORDER_FORM)

        dispatch(
          activeModalStatus({
            modalStatus: MODAL_STATUS_SUCCESS,
            modalTitle: 'SUCCESS Authentication',
            modalContent: 'SUCCESS Authentication',
          }),
        )

        return dispatch({
          type: USER_IS_LOGGED,
          payload: userData,
        })
      }
    } catch (e) {
      dispatch(spinOff())

      return dispatch(
        activeModalStatus({
          modalStatus: MODAL_STATUS_ERROR,
          modalTitle: 'ERROR Authentication',
          modalContent: 'ERROR Authentication',
        }),
      )
    }
    return false
  }
}
