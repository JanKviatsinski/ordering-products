import { combineReducers } from 'redux'
import { userDataReducer } from './userDataReducer'
import { menuStateReducer } from './menuStateReducer'

export const rootReducer = combineReducers({
  userData: userDataReducer,
  menuState: menuStateReducer,
})
