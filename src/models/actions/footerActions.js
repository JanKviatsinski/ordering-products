const MODULE_NAME = 'footer'
export const CLICK = `${MODULE_NAME}/CLICK`
export const CLICK_ASYNC = `${MODULE_NAME}/CLICK_ASYNC`

export function actionX (string){
    return {
        type: CLICK,
        payload: string
    }
}

export function asyncF (string){
    return async (dispatch)=>{
        await setTimeout(()=>{
            return dispatch({
                type: CLICK_ASYNC,
                payload: string
            })
        }, 2000)
    }
}
