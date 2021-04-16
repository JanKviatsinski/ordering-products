import { URL_GET_USER_DATA } from './constants'

export function getUserData(token) {
  return fetch(URL_GET_USER_DATA, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ idToken: token }),
  })
}
