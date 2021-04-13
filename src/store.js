import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {routes} from './routes';

const UserDataInitialState = {
    isLogged: false
}
const MenuInitialState = {
    selectedKey: routes[0].path
}

//константы для стейтов
export const store = createStore(
    rootReducer,
    {
        userData: UserDataInitialState,
        menuState: MenuInitialState,
    },
    composeWithDevTools(applyMiddleware(thunk))
)
