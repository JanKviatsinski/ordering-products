export function postOrder({ data, UrlPostOrder }) {
  return fetch(
    UrlPostOrder,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(data),
    },
  )
}
