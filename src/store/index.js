import Vue from 'vue';
import Vuex from 'vuex';
import api from '../services/apiService'
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        character: null,
    },
    getters: {
        character: state => state.character,
    },
    mutations: {
        setCharacter(state, payload) {
            state.character = payload
        }
    },
    actions: {
        async getCharacter({commit}, character) {
            try {
                const response = await api.getCharacter(character);
                commit('setCharacter', response)
            }catch(e) {
                console.log(e);
            }
        }
    },
})


export default store;