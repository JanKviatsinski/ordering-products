import { CLOSE_MODAL, SHOW_MODAL } from '../actions/modalActions'

export function modalReducer(state = {}, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state.modal,
        visible: true,
        ...action.payload,
      }

    case CLOSE_MODAL:
      return {
        ...state.modal,
        visible: false,
      }
    default:
      return state
  }
}
