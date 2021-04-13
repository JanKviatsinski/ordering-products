const MODULE_NAME = 'menu'
export const SELECT_MENU_KEY = `${MODULE_NAME}/SELECT_KEY`

export function selectMenuKey (event){
    return {
        type: SELECT_MENU_KEY,
        payload: event.key
    }
}
//название функции плохое конечно, не заю как лучше назвать
export function clickLogInOutBtn(path){
    return {
        type: SELECT_MENU_KEY,
        payload: path
    }
}
