import {USER_IS_LOGGED} from '../actions/userDataActons'

export function userDataReducer(state = {}, action) {
    console.log('in reducer')
    switch (action.type) {
        case USER_IS_LOGGED:
            return {
                ...state.userData, isLogged: true, ...action.payload
            }
        default: return state
    }
}
