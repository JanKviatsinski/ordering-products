import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './models/reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const footerInitialState = {
    text: 'hello'
}
//константы для стейтов
export const store = createStore(
    rootReducer,
    {footer: footerInitialState},
    composeWithDevTools(applyMiddleware(thunk))
)
