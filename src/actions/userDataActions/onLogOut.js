import { USER_LOG_OUT } from './constatnts'
import { history } from '../../history'
import { PATH_AUTHENTICATION, PATH_REGISTRATION } from '../../pathes'
import { appInitialState } from '../../store'

export function onLogOut() {
  localStorage.clear()
  history.push(`${PATH_REGISTRATION}${PATH_AUTHENTICATION}`)

  return {
    type: USER_LOG_OUT,
    payload: appInitialState,
  }
}
