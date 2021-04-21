export function getFromStorage(key) {
  return (localStorage.getItem(key)) ? JSON.parse(localStorage.getItem(key)) : {}
}
