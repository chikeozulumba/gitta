import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        items: [],
    },
    mutations: {
        commitItems: (state, payload) => state.items = [ ...payload ],
    },
    actions: {

    },
    getters: {
        allRepoItems: state => state.items
    }
});
