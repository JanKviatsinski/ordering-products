const getUserDataState = (state) => state.userData

export const getUserLoggedStatus = (state) => getUserDataState(state).isLogged
export const getUserDisplayName = (state) => getUserDataState(state).displayName
export const getUserEmail = (state) => getUserDataState(state).email
// export const getUserLocalId = (state) => getUserDataState(state).localId
