import axios from 'axios'

export const state = {
  authToken: getSavedState('canvas.access_token'),
  serverUrl: getSavedState('canvas.serverUrl'),
  currentUser: getSavedState('auth.currentUser'),
};

export const mutations = {
  SET_AUTH_TOKEN(state, value) {
    state.authToken = value;
    saveState('canvas.access_token', value);
    setDefaultAuthHeaders(state)
  },
  SET_SERVER_URL(state, value) {
    state.serverUrl = value;
    saveState('canvas.serverUrl', value)
  },
  SET_CURRENT_USER(state, newValue) {
    state.currentUser = newValue;
    saveState('auth.currentUser', newValue);
    setDefaultAuthHeaders(state)
  },
};

export const getters = {
  // Whether the user is currently logged in.
  loggedIn(state) {
    console.log(!!state.authToken)
    return !!state.authToken
  },
};

export const actions = {
  // This is automatically run in `src/state/store.js` when the app
  // starts, along with any other actions named `init` in other modules.
  init({ state, dispatch }) {
    setDefaultAuthHeaders(state);
  },

  // Logs in the current user.
  logIn({ commit, dispatch, getters }, { authToken } = {}) {
    commit('SET_AUTH_TOKEN', authToken);
    // commit('SET_SERVER_URL', );

    return true
  },
};

// ===
// Private helpers
// ===

function getSavedState(key) {
  return window.localStorage.getItem(key)
}

function saveState(key, state) {
  window.localStorage.setItem(key, JSON.stringify(state))
}

function setDefaultAuthHeaders(state) {
  axios.defaults.headers.common['X-Canvas-Authorization'] = state.authToken
    ? state.authToken
    : ''
}
