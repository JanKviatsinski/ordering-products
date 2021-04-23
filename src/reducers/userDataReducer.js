import { USER_IS_LOGGED, USER_LOG_OUT } from '../actions/userDataActions/constatnts'

export function userDataReducer(state = {}, action) {
  switch (action.type) {
    case USER_IS_LOGGED:
      return {
        ...state.userData, ...action.payload,
      }
    case USER_LOG_OUT:
      return {
        ...action.payload,
      }
    default:
      return state
  }
}
