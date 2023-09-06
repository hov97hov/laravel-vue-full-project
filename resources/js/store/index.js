import { createStore } from 'vuex';

const store = createStore({
    state: {
        data: 0,
    },
    mutations: {
        increment(state) {
            state.data++;
        },
    },
    actions: {
        incrementAsync({ commit }) {
            setTimeout(() => {
                commit('increment');
            }, 1000);
        },
    },
    getters: {
        doubleCount(state) {
            return state.data * 2;
        },
    },
});

export default store;
