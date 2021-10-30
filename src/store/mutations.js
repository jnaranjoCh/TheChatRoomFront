export const updateUser = (state, user) => {
    state.userActive = user;
}

export const updateSala = (state, sala) => {
    state.salaActive = sala;
}

export const resetMsgs = (state) => {
    state.msgsActive = [];
}

export const updateMsgs = (state, msgs) => {
    state.msgsActive = msgs;
}

export const updateSalas = (state, salas) => {
    state.salasListActive = salas;
}

export const resetStates = (state) => {
    state.userActive = null;
    state.salaActive = null;
    state.salasListActive = [];
    state.msgsActive = [];
}