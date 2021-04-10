import {CLICK, CLICK_ASYNC} from '../actions/footerActions';


export function footerReducer(state = {}, action) {
    switch (action.type) {
        case CLICK:
            return {
                ...state.footer, text: action.payload
            }

        case CLICK_ASYNC:
            return {
                ...state.footer, text: action.payload
            }
        default: return state
    }
}
