import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: undefined,
    snackbar: {
      message: '',
      active: false,
      color: 'success'
    },
    language: undefined,
    dark: false
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    logout(state) {
      state.user = undefined;
    },
    setSnackbar(state, snackbar) {
      state.snackbar = snackbar;
    },
    setLanguage(state, language) {
      state.language = language;
    },
    setDark(state, dark) {
      state.dark = dark;
    }
  },
  getters: {
    user: state => state.user,
    snackbar: state => state.snackbar,
    language: state => state.language,
    dark: state => state.dark
  },
  plugins: [createPersistedState()],
  actions: {
    setUser({ commit }, user) {
      commit('setUser', user);
    },
    setSnackbar({ commit }, snackbar) {
      commit('setSnackbar', snackbar);
    },
    hideSnackbar({ commit, state }) {
      commit(
        'setSnackbar',
        Object.assign({}, ...state.snackbar, { active: false })
      );
    },
    setLanguage({ commit }, language) {
      commit('setLanguage', language);
    },
    setDark({ commit }, dark) {
      commit('setDark', dark);
    }
  }
});
