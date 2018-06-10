import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    city: localStorage.city || '西安',
  },
  mutations: {
    changeCity(state, city) {
      state.city = city;
      localStorage.city = city;
    },
  },
});
