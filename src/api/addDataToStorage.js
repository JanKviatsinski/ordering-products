export function addDataToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}
