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

    return state.userActive ? state.userActive.id : null;
}

export const getListSalas = (state) => {

    return state.salasListActive;
}

export const getIndexSala = (state) => {

    return state.salaActive === null ? -1 : state.salaActive.index;
}