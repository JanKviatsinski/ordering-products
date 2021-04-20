const getAppState = (state) => state.app

export const getModalStatus = (state) => getAppState(state).modalStatus
export const getModalTitle = (state) => getAppState(state).modalTitle
export const getModalContent = (state) => getAppState(state).modalContent
export const getSpinStatus = (state) => getAppState(state).spinStatus
