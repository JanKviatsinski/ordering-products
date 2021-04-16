const getUserDataState = (state) => state.userData

export const getUserLoggedStatus = (state) => getUserDataState(state).isLogged
