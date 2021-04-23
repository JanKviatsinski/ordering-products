import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { rootReducer } from './reducers'

export const userDataInitialState = {
  isLogged: false,
  localId: null,
}

const appInitialState = {
  modalStatus: null,
  modalTitle: '',
  modalContent: null,
  spinStatus: false,
}

function getInitialState(keyFromStorage, alternativeObj) {
  return localStorage.getItem(keyFromStorage)
    ? JSON.parse(localStorage.getItem(keyFromStorage)) : alternativeObj
}

// константы для стейтов
export const store = createStore(
  rootReducer,
  {
    userData: getInitialState('userData', userDataInitialState),
    app: getInitialState('app', appInitialState),
  },
  composeWithDevTools(applyMiddleware(thunk)),
)
