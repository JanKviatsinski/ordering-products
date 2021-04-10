import { combineReducers } from 'redux'
import { footerReducer } from './footer.reducer'
import {headerReducer} from './headerReducer';

export const rootReducer = combineReducers({
    footer: footerReducer,
    header: headerReducer
})
