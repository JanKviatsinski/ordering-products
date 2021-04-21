import { history } from '../../history'
import { PATH_AUTHENTICATION, PATH_REGISTRATION } from '../../pathes'

export function onClickLogOutBtn() {
  localStorage.clear()
  history.push(`${PATH_REGISTRATION}${PATH_AUTHENTICATION}`)
  window.location.reload(true)
}
