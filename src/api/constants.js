// import { store } from '../store'
// import { getUserLocalId } from '../selectors/userDataSelectors'

const apiKey = 'AIzaSyD_MiDZhDFSmUZgvSUqSffavdsjWxwixbo'
// const URL_ORDER_GET = 'https://course-project-kviatsinski-default-rtdb.firebaseio.com/orders.json'
// const URL_ORDER_POST = 'https://course-project-kviatsinski-default-rtdb.firebaseio.com/orders.json'
export const URL_REGISTRATION_USER = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`
export const URL_GET_USER_DATA = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${apiKey}`
export const URL_AUTHENTICATION = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`

// const { localId } = getUserLocalId(store)
// console.log(localId)
// export const URL_POST_ORDER = `https://course-project-kviatsinski-default-rtdb.firebaseio.com/orders/${localId}.json`
export const URL_POST_ORDER = 'https://course-project-kviatsinski-default-rtdb.firebaseio.com/orders/asa.json'
