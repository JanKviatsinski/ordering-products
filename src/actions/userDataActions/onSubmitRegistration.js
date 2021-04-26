import { postRegistration } from '../../api/postRegistration'
import { history } from '../../history'
import { PATH_ORDER_FORM } from '../../pathes'
import { MODAL_STATUS_ERROR, MODAL_STATUS_SUCCESS } from '../../utils/showModal'
import { addToStorage } from '../../api/addToStorage'
import { activeModalStatus, spinOff, spinOn } from '../appActions'
import { USER_IS_LOGGED } from './constatnts'

export function onSubmitRegistration({ password, email, displayName }) {
  return async (dispatch) => {
    dispatch(spinOn())

    try {
      const responseRegistration = await postRegistration(
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
      }

      if (idToken !== undefined) {
        addToStorage('userData', userData)

        dispatch(
          activeModalStatus({
            modalStatus: MODAL_STATUS_SUCCESS,
            modalTitle: 'SUCCESS Registration',
            modalContent: 'SUCCESS Registration',
          }),
        )

        history.push(PATH_ORDER_FORM)

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
          modalTitle: 'ERROR Registration',
          modalContent: `${e}`,
        }),
      )
    }
    return false
  }
}
