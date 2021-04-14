import {apiKey} from './constants'

export function registration (data){
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            password: data.password,
            email: data.email,
            displayName: data.username,
            returnSecureToken: true,
        }),
    })
}
