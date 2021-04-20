import { combineReducers } from 'redux'
import { userDataReducer } from './userDataReducer'
import { menuStateReducer } from './menuStateReducer'
import { appReducer } from './appReducer'

export const rootReducer = combineReducers({
  userData: userDataReducer,
  menuState: menuStateReducer,
  app: appReducer,
})
