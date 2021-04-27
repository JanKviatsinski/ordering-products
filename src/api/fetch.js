export async function fetchFn({ method, url, data }) {
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  })

  const result = await response.json()
  return result
}
