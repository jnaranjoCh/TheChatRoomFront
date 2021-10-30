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

    console.log(newState);

    commit('updateMsgs', newState);
}