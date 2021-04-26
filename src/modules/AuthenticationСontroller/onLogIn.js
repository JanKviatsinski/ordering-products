import { history } from '../../history'
import { PATH_AUTHENTICATION, PATH_REGISTRATION } from '../../pathes'

export function onLogIn() {
  history.push(`${PATH_REGISTRATION}${PATH_AUTHENTICATION}`)
}
