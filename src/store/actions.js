export const actionUserUp = async({ commit }, user) => {
    commit('updateUser', user);
}

export const actionResetMsgs = async({ commit }, msg) => {
    commit('resetMsgs', msg);
}

export const actionUpdateMsgs = async({ commit }, msg) => {
    commit('updateMsgs', msg);
}

export const actionInsertMsg = async({ commit, state }, msg) => {

    const newState = [
        ...state.msgsActive,
        msg
    ];

    commit('updateMsgs', newState);
}

export const actionListSalas = async({ commit }, salas) => {
    commit('updateSalas', salas);
}

export const actionUpListSalas = async({ commit, state }, sala) => {

    const newList = [
        sala,
        ...state.salasListActive
    ];

    commit('updateSalas', newList);
}

export const actionUpdateSala = async({ commit }, sala) => {
    commit('updateSala', sala);
}

export const actionUltSala = async({ commit, state }, ultMsg) => {

    const newList = [
        ...state.salasListActive
    ];

    newList[state.salaActive.index].ultMsg = ultMsg;

    commit('updateSalas', newList);
}

export const resetAllStates = async({ commit }) => {
    commit('resetStates');
}