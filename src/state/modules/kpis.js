import axios from 'axios'

export const state = {
    items: [],
    selected: null
};

export const getters = {};

export const mutations = {
    ADD_ITEM(state, value) {
        state.items.push(value)
    },
    SET_ITEMS(state, value) {
        state.items = value
    },
    SET_SELECTED(state, value) {
        state.selected = value
    }
};

export const actions = {
    fetchItems({ commit, state, rootState } ) {
        return axios.get('getStudentExpertRequests').then((res) => {
            commit('SET_ITEMS', res.data);

            return res.data
        }).catch((err) => {
            console.log(err);

            return err
        })
    },
    findBySearch({ dispatch, commit, state, rootState }, { search }) {
        return state.items.filter(item => item.value.toLowerCase().indexOf(search.toLowerCase()) === 0)
    },
};