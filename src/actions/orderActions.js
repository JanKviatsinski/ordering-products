import {
  // MODAL_STATUS_ERROR_REGISTRATION,
  // MODAL_STATUS_SUCCESS_REGISTRATION,
  // SHOW_MODAL,
  // SPIN_OF,
  SPIN_ON,
} from '../constats'
// import { history } from '../history'
// import { store } from '../store'
// import { postOrder } from '../api/postOrder'
// import {
//   getUserDisplayName,
//   getUserEmail,
// } from '../selectors/userDataSelectors'

const MODULE_NAME = 'ORDER_FORM'
export const POST_ORDER_SUCCESS = `${MODULE_NAME}/POST_ORDER_SUCCESS`
export const POST_ORDER_ERROR = `${MODULE_NAME}/POST_ORDER_ERROR`

export function onSubmitOrderForm() {
  return async (dispatch) => {
    dispatch({
      type: SPIN_ON,
    })
    // const data = {
    //   ...formData,
    //   displayName: getUserDisplayName(store),
    //   email: getUserEmail(store),
    // }
    //
    // dispatch({
    //   type: SPIN_ON,
    // })
    //
    // const responsePostOrder = await postOrder(data)
    // const resultPostOrder = await responsePostOrder.json()
    // // const { idToken } = resultPostOrder
    // // const localId = resultRegistration.localId
    // console.log(resultPostOrder)
    // dispatch({
    //   type: SPIN_OF,
    // })

    // if (idToken !== undefined) {
    //   console.log('YES')
    //
    //   dispatch({
    //     type: SHOW_MODAL,
    //     payload: {
    //       modalStatus: MODAL_STATUS_SUCCESS_REGISTRATION,
    //       modalTitle: 'SUCCESS',
    //       modalContent: 'SUCCESS',
    //     },
    //   })
    //
    //   history.push(PATH_ORDER_FORM)
    //
    //   return dispatch({
    //     type: USER_IS_LOGGED,
    //     payload: {
    //       password, email, displayName, idToken,
    //     },
    //   })
    // }
    // console.log('ERROR')
    //
    // return dispatch({
    //   type: SHOW_MODAL,
    //   payload: {
    //     modalStatus: MODAL_STATUS_ERROR_REGISTRATION,
    //     modalTitle: 'ERROR',
    //     modalContent: 'ERROR',
    //   },
    // })
  }
}
