const getUserDataState = (state) => state.userData

export const getUserDisplayName = (state) => getUserDataState(state).displayName
export const getUserEmail = (state) => getUserDataState(state).email
