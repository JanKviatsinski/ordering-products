import { USER_IS_LOGGED } from '../actions/userDataActions/constatnts'

export function userDataReducer(state = {}, action) {
  switch (action.type) {
    case USER_IS_LOGGED:
      return {
        ...action.payload,
      }
    default:
      return state
  }
}
