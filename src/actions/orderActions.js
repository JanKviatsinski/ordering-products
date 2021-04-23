import {
  MODAL_STATUS_ERROR,
  MODAL_STATUS_INFO,
  MODAL_STATUS_SUCCESS,
  // SHOW_MODAL,
} from '../constats'
import { getUrlPostOrder } from '../api/getUrlPostOrder'
import { history } from '../history'
import { postOrder } from '../api/postOrder'
import {
  getUserDisplayName,
  getUserEmail,
} from '../selectors/userDataSelectors'
import { PATH_AUTHENTICATION, PATH_REGISTRATION } from '../pathes'
import { addDataToStorage } from '../api/addDataToStorage'
import { showModal, spinOff, spinOn } from './appActions'

// const MODULE_NAME = 'ORDER_FORM'
// export const POST_ORDER_SUCCESS = `${MODULE_NAME}/POST_ORDER_SUCCESS`
// export const POST_ORDER_ERROR = `${MODULE_NAME}/POST_ORDER_ERROR`

export function onSubmitOrderForm(formData) {
  return async (dispatch, getState) => {
    const state = getState()
    const { localId } = state.userData

    if (!localId) {
      addDataToStorage('formData', formData)
      history.push(`${PATH_REGISTRATION}${PATH_AUTHENTICATION}`)
      dispatch(
        showModal({
          modalStatus: MODAL_STATUS_INFO,
          modalTitle: 'Identify yourself',
          modalContent: 'Identify yourself',
        }),
      )
      return false
    }
    const UrlPostOrder = getUrlPostOrder(localId)

    const data = {
      ...formData,
      displayName: getUserDisplayName(state),
      email: getUserEmail(state),
    }
    console.log(data)

    dispatch(spinOn())

    const responsePostOrder = await postOrder({ data, UrlPostOrder })
    const { name } = await responsePostOrder.json()
    console.log(name)

    dispatch(spinOff())

    if (name !== undefined) {
      console.log('save order')

      return dispatch(
        showModal({
          modalStatus: MODAL_STATUS_SUCCESS,
          modalTitle: 'SUCCESS save order',
          modalContent: 'SUCCESS save order',
        }),
      )
    }
    console.log('ERROR')

    return dispatch(
      showModal({
        modalStatus: MODAL_STATUS_ERROR,
        modalTitle: 'ERROR save order',
        modalContent: 'ERROR save order',
      }),
    )
  }
}
