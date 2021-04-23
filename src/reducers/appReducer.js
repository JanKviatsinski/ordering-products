import {
  SHOW_MODAL, CLOSE_MODAL, SPIN_OFF, SPIN_ON,
} from '../actions/appActions'

export function appReducer(state = {}, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state.app,
        ...action.payload,
      }
    case CLOSE_MODAL:
      return {
        ...state.app,
        modalStatus: null,
      }
    case SPIN_ON:
      return {
        ...state.app,
        spinStatus: true,
      }
    case SPIN_OFF:
      return {
        ...state.app,
        spinStatus: false,
      }
    default:
      return state
  }
}
