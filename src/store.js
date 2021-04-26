import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { rootReducer } from './reducers'

const userDataInitialState = {
  localId: null,
}

export const appInitialState = {
  modalStatus: null,
  modalTitle: '',
  modalContent: null,
  spinStatus: false,
  isLogged: false,
}

function getInitialState(keyFromStorage, alternativeObj) {
  return localStorage.getItem(keyFromStorage)
    ? JSON.parse(localStorage.getItem(keyFromStorage)) : alternativeObj
}

export const store = createStore(
  rootReducer,
  {
    userData: getInitialState('userData', userDataInitialState),
    app: getInitialState('app', appInitialState),
  },
  composeWithDevTools(applyMiddleware(thunk)),
)
