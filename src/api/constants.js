const apiKey = 'AIzaSyD_MiDZhDFSmUZgvSUqSffavdsjWxwixbo'
export const USER_REGISTRATION_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`
export const AUTHENTICATION_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`

export const METHODS = {
  POST: 'POST',
  GET: 'GET',
}
