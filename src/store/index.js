import Vue from 'vue';
import Vuex from 'vuex';
import transactions from './modules/transactions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    transactions,
  },
});
