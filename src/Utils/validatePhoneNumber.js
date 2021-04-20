export const validatePhoneNumber = (rule, value, callback) => {
  const regExp = /^\d{7}$/

  if (!value.match(regExp)) {
    callback('Phone number must be seven digits')
  } else {
    callback()
  }
}
