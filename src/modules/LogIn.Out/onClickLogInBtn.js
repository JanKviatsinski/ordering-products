// название функции плохое конечно, не заю как лучше назвать
import { history } from '../../history'
import { PATH_AUTHENTICATION, PATH_REGISTRATION } from '../../pathes'

export function onClickLogInBtn() {
  history.push(`${PATH_REGISTRATION}${PATH_AUTHENTICATION}`)
}
