import {
  CLOSE_MODAL,
  SHOW_MODAL, SPIN_OFF, SPIN_ON,
} from '../actions/appActions'
import {
  USER_IS_LOGGED,
  USER_LOG_OUT,
} from '../actions/userDataActions/constatnts'

export function appReducer(state = {}, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        ...action.payload,
      }
    case CLOSE_MODAL:
      return {
        ...state,
        modalStatus: null,
      }
    case SPIN_ON:
      return {
        ...state,
        spinStatus: true,
      }
    case SPIN_OFF:
      return {
        ...state,
        spinStatus: false,
      }
    case USER_IS_LOGGED:
      return {
        ...state,
        isLogged: true,
      }
    case USER_LOG_OUT:
      return {
        ...action.payload,
      }
    default:
      return state
  }
}
