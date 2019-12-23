import Vue from "vue";
import Vuex from "vuex";

import { GET_STORIES } from "./mutation-types";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    stories: [],
  },
  mutations: {
    [GET_STORIES] (state, payload) {
      // state.stories = [
      //   ...payload
      // ]

      state.stories = payload;
    }
  },

  actions: {
    async get_all_stories({ commit }) {
      const data = await function() {
          return fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(json => json);
        }();

      commit(GET_STORIES, data);
    }
  }
});

export default store;