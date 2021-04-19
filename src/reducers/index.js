import { combineReducers } from 'redux'
import { userDataReducer } from './userDataReducer'
import { menuStateReducer } from './menuStateReducer'
import { modalReducer } from './modalReducer'

export const rootReducer = combineReducers({
  userData: userDataReducer,
  menuState: menuStateReducer,
  modal: modalReducer,
})
