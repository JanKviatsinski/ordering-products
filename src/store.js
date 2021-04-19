import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { rootReducer } from './reducers'
import { routes } from './routes'

const userDataInitialState = {
  isLogged: false,
}

const menuInitialState = {
  selectedKey: routes[0].path,
}

const modalInitialState = {
  visible: false,
  title: '',
  data: null,
}

// константы для стейтов
export const store = createStore(
  rootReducer,
  {
    userData: userDataInitialState,
    menuState: menuInitialState,
    modal: modalInitialState,
  },
  composeWithDevTools(applyMiddleware(thunk)),
)
