import {
  activeModalStatus,
  spinOff,
  spinOn,
} from '../appActions'
import { addToStorage } from '../../api/addToStorage'
import { history } from '../../history'
import { PATH_ORDER_FORM } from '../../pathes'
import { MODAL_STATUS_ERROR, MODAL_STATUS_SUCCESS } from '../../utils/showModal'
import { USER_IS_LOGGED } from './constatnts'
import { makeRequest } from '../../api/makeRequest'
import { METHODS, AUTHENTICATION_URL } from '../../api/constants'

export function onSubmitAuthentication({ email, password }) {
  return async (dispatch) => {
    dispatch(spinOn())

    const { data, failed } = await makeRequest({
      method: METHODS.POST,
      url: AUTHENTICATION_URL,
      data: { email, password },
    })

    dispatch(spinOff())

    if (!failed) {
      const { displayName, localId } = data
      const userData = {
        password,
        email,
        displayName,
        localId,
      }

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

    return dispatch(
      activeModalStatus({
        modalStatus: MODAL_STATUS_ERROR,
        modalTitle: `${failed}`,
        modalContent: `${failed}`,
      }),
    )
  }
}
