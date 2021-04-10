import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './models/reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import photoOwner from './Components/Images/photoOwner.png'

const footerInitialState = {
    text: 'hello'
}

const headerInitialState = {
    photoOwner
}

//константы для стейтов
export const store = createStore(
    rootReducer,
    {footer: footerInitialState, header: headerInitialState},
    composeWithDevTools(applyMiddleware(thunk))
)
