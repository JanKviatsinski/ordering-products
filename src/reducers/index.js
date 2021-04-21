import { combineReducers } from 'redux'
import { userDataReducer } from './userDataReducer'
import { appReducer } from './appReducer'

export const rootReducer = combineReducers({
  userData: userDataReducer,
  app: appReducer,
})
