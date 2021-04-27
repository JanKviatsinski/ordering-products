import { URL_AUTHENTICATION } from './constants'

export function postAuthentication(email, password) {
  return fetch(
    URL_AUTHENTICATION,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        password,
        email,
      }),
    },
  )
}
