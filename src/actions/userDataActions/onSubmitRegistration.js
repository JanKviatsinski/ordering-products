import { history } from '../../history'
import { PATH_ORDER_FORM } from '../../pathes'
import { MODAL_STATUS_ERROR, MODAL_STATUS_SUCCESS } from '../../utils/showModal'
import { addToStorage } from '../../api/addToStorage'
import { activeModalStatus, spinOff, spinOn } from '../appActions'
import { USER_IS_LOGGED } from './constatnts'
import { METHODS, USER_REGISTRATION_URL } from '../../api/constants'
import { makeRequest } from '../../api/makeRequest'

export function onSubmitRegistration({ password, email, displayName }) {
  return async (dispatch) => {
    dispatch(spinOn())

    const { data, failed } = await makeRequest(
      {
        method: METHODS.POST,
        url: USER_REGISTRATION_URL,
        data: { password, email, displayName },
      },
    )

    dispatch(spinOff())

    if (!failed) {
      const { localId } = data
      const userData = {
        password,
        email,
        displayName,
        localId,
      }

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

    dispatch(spinOff())

    return dispatch(
      activeModalStatus({
        modalStatus: MODAL_STATUS_ERROR,
        modalTitle: `ERROR Registration ${failed}`,
        modalContent: `${failed}`,
      }),
    )
  }
}
