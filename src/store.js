import { createStore, compose } from 'redux'
import { rootReducer } from './reducers'

const footerInitialState = {
    text: 'hello'
}
//константы для стейтов
export const store = createStore(rootReducer,  {
    footer: footerInitialState
}, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
