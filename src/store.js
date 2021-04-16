import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { rootReducer } from './reducers'
import { routes } from './routes'

const UserDataInitialState = {
  isLogged: false,
}

const MenuInitialState = {
  selectedKey: routes[0].path,
}

// константы для стейтов
export const store = createStore(
  rootReducer,
  {
    userData: UserDataInitialState,
    menuState: MenuInitialState,
  },
  composeWithDevTools(applyMiddleware(thunk)),
)
