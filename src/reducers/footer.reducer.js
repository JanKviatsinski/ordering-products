import {CLICK} from '../actions/footerActions';

export function footerReducer(state= {}, action) {
    switch (action.type) {
        case CLICK:
            return {
                ...state.footer, text: action.payload
            }
        default: return state
    }
}
