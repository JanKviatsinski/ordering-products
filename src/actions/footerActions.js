const MODULE_NAME = 'footer'
export const CLICK = `${MODULE_NAME}/CLICK`

export function actionX (string){
    return {
        type: CLICK,
        payload: string
    }
}
