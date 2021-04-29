export async function makeRequest({ method, url, data }) {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(data),
    })

    if (response.status > 399) {
      throw new Error(`status ${response.status}`)
    }

    const result = await response.json()

    return {
      data: result,
      failed: false,
    }
  } catch (e) {
    return {
      data: {},
      failed: e,
    }
  }
}
