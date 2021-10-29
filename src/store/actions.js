export const actionUserUp = async({ commit }, user) => {
    commit('updateUser', user);
}

export const actionResetMsgs = async({ commit }, msg) => {
    commit('resetMsgs', msg);
}

export const actionUpdateMsgs = async({ commit }, msg) => {
    commit('updateMsgs', msg);
}