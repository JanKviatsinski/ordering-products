import { history } from '../../history'

export function onSelectMenuKey(event) {
  history.push(event.key)
}
