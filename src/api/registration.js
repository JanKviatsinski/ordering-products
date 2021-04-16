import {URL_REGISTRATION_USER} from './constants'

export function registration ({password,email, displayName}){
    return fetch(URL_REGISTRATION_USER, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            password,
            email,
            displayName,
            returnSecureToken: true,
        }),
    })
}
