import {registration} from '../api/registration';

const MODULE_NAME = 'UserData'
export const USER_IS_LOGGED = `${MODULE_NAME}/USER_IS_LOGGED`

export function onSubmitRegistration(data) {
    return async (dispatch) => {
        const responseRegistration = await registration(data);
        const resultRegistration = await responseRegistration.json();
        const idToken = resultRegistration.idToken
        // const localId = resultRegistration.localId

        console.log(resultRegistration)

        if (idToken !== undefined) {
            console.log('YES')
            return dispatch({
                type: USER_IS_LOGGED,
                payload: {...data, idToken}
            })
        } else {
            console.log('ERROR')
            return
        }
    }
}

// const localId = resultRegistration.localId

// const responseDataUser = await getUserData(idToken)
// const resultDataUser = await responseDataUser.json()
//
// console.log(resultDataUser)
