import { createStore } from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';
import state from './state';
import * as getters from './getters';

export default createStore({
    state,
    mutations,
    actions,
    getters,
    modules: {}
})