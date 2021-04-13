import {SELECT_KEY} from '../actions/menuActions'

export function menuStateReducer(state = {}, action) {
    switch (action.type) {
        case SELECT_KEY:
            return {
                ...state.menuState, selectedKey: action.payload
            }
        default: return state
    }
}
