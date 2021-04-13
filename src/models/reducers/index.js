import { combineReducers } from 'redux'
import { footerReducer } from './footer.reducer'
import {userDataReducer} from './userDataReducer'

export const rootReducer = combineReducers({
    footer: footerReducer,
    userData: userDataReducer
})
