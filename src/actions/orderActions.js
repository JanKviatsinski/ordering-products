import {
  MODAL_STATUS_ERROR,
  MODAL_STATUS_INFO,
  MODAL_STATUS_SUCCESS,
} from '../utils/showModal'
import { getUrlPostOrder } from '../api/getUrlPostOrder'
import { history } from '../history'
import { postOrder } from '../api/postOrder'
import {
  getUserDisplayName,
  getUserEmail,
} from '../selectors/userDataSelectors'
import { PATH_AUTHENTICATION, PATH_REGISTRATION } from '../pathes'
import { addToStorage } from '../api/addToStorage'
import { activeModalStatus, spinOff, spinOn } from './appActions'
import { getLoggedStatus } from '../selectors/appSelectors'

export function onSubmitOrderForm(formData) {
  return async (dispatch, getState) => {
    const state = getState()
    const isLogged = getLoggedStatus(state)

    if (!isLogged) {
      addToStorage('formData', formData)
      history.push(`${PATH_REGISTRATION}${PATH_AUTHENTICATION}`)
      dispatch(
        activeModalStatus({
          modalStatus: MODAL_STATUS_INFO,
          modalTitle: 'Identify yourself',
          modalContent: 'Identify yourself',
        }),
      )
      return false
    }

    const { localId } = state.userData
    const UrlPostOrder = getUrlPostOrder(localId)

    const data = {
      ...formData,
      displayName: getUserDisplayName(state),
      email: getUserEmail(state),
    }

    dispatch(spinOn())
    try {
      const responsePostOrder = await postOrder({ data, UrlPostOrder })
      const { name } = await responsePostOrder.json()

      dispatch(spinOff())

      if (name !== undefined) {
        return dispatch(
          activeModalStatus({
            modalStatus: MODAL_STATUS_SUCCESS,
            modalTitle: 'SUCCESS save order',
            modalContent: 'SUCCESS save order',
          }),
        )
      }
    } catch (e) {
      dispatch(spinOff())

      return dispatch(
        activeModalStatus({
          modalStatus: MODAL_STATUS_ERROR,
          modalTitle: 'ERROR save order',
          modalContent: `${e}`,
        }),
      )
    }
    return false
  }
}
