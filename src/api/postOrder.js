import { URL_POST_ORDER } from './constants'

export function postOrder(data) {
  return fetch(
    URL_POST_ORDER,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(data),
    },
  )
}
