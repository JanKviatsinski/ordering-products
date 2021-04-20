import { SHOW_MODAL, SPIN_OF, SPIN_ON } from '../constats'

export function appReducer(state = {}, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state.app,
        modalStatus: true,
        ...action.payload,
      }
    case SPIN_ON:
      return {
        ...state.app,
        spinStatus: true,
      }
    case SPIN_OF:
      return {
        ...state.app,
        spinStatus: false,
      }
    default:
      return state
  }
}
