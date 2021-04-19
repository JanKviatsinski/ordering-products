const getModalState = (state) => state.userData

export const getModalVisible = (state) => getModalState(state).visible
export const getModalTitle = (state) => getModalState(state).title
export const getModalData = (state) => getModalState(state).data
