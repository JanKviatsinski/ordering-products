const MODULE_NAME = 'menu'
export const SELECT_KEY = `${MODULE_NAME}/SELECT_KEY`

export function selectMenuKey (event){
    return {
        type: SELECT_KEY,
        payload: event.key
    }
}


// export const CLICK_ASYNC = `${MODULE_NAME}/CLICK_ASYNC`
// export function asyncF (string){
//     return async (dispatch)=>{
//         await setTimeout(()=>{
//             return dispatch({
//                 type: CLICK_ASYNC,
//                 payload: string
//             })
//         }, 2000)
//     }
// }
