export const validateSalaActive = (state) => {

    return state.salaActive === null;
}

export const getSalaActive = (state) => {

    return state.salaActive;
}

export const getMsgsActive = (state) => {

    return state.msgsActive;
}

export const getUserIdActive = (state) => {

    return state.userActive.id;
}