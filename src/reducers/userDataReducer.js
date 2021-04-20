import { USER_IS_LOGGED } from '../actions/userDataActions'

export function userDataReducer(state = {}, action) {
  switch (action.type) {
    case USER_IS_LOGGED:
      return {
        ...state.userData, isLogged: true, ...action.payload,
      }
    default:
      return state
  }
}
