import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { rootReducer } from './reducers'
import { routes } from './routes'

const userDataInitialState = {
  isLogged: false,
  localId: null,
}

const menuInitialState = {
  selectedKey: routes[0].path,
}

const appInitialState = {
  modalStatus: null,
  modalTitle: '',
  modalContent: null,
  spinStatus: false,
}

// константы для стейтов
export const store = createStore(
  rootReducer,
  {
    userData: userDataInitialState,
    menuState: menuInitialState,
    app: appInitialState,
  },
  composeWithDevTools(applyMiddleware(thunk)),
)
