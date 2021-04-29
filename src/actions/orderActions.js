import {
  MODAL_STATUS_ERROR,
  MODAL_STATUS_INFO,
  MODAL_STATUS_SUCCESS,
} from '../utils/showModal'
import { getUrlPostOrder } from '../api/getUrlPostOrder'
import { history } from '../history'
import {
  getUserDisplayName,
  getUserEmail,
} from '../selectors/userDataSelectors'
import { PATH_AUTHENTICATION, PATH_REGISTRATION } from '../pathes'
import { addToStorage } from '../api/addToStorage'
import { activeModalStatus, spinOff, spinOn } from './appActions'
import { getLoggedStatus } from '../selectors/appSelectors'
import { METHODS } from '../api/constants'
import { makeRequest } from '../api/makeRequest'

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

    const orderData = {
      ...formData,
      displayName: getUserDisplayName(state),
      email: getUserEmail(state),
    }

    dispatch(spinOn())

    const { failed } = await makeRequest(
      {
        method: METHODS.POST,
        url: UrlPostOrder,
        data: orderData,
      },
    )

    dispatch(spinOff())

    if (!failed) {
      return dispatch(
        activeModalStatus({
          modalStatus: MODAL_STATUS_SUCCESS,
          modalTitle: 'SUCCESS save order',
          modalContent: 'SUCCESS save order',
        }),
      )
    }

    return dispatch(
      activeModalStatus({
        modalStatus: MODAL_STATUS_ERROR,
        modalTitle: `ERROR save order ${failed}`,
        modalContent: `ERROR save order ${failed}`,
      }),
    )
  }
}
