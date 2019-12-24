import Vue from "vue";
import Vuex from "vuex";

import { GET_STORIES, GET_SINGLE_STORY } from "./mutation-types";

const BASE_URL = 'https://jsonplaceholder.typicode.com';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    stories: [],
    story: {},
  },
  mutations: {
    [GET_STORIES] (state, payload) {
      state.stories = payload;
    },

    [GET_SINGLE_STORY] (state, payload) {
      state.story = payload;
    }
  },

  actions: {
    async get_all_stories({ commit }) {
      const data = await function() {
          return fetch(`${BASE_URL}/posts/`)
          .then(response => response.json())
          .then(json => json);
        }();

      commit(GET_STORIES, data);
    },

    async get_single_story({ commit }, postId) {
      const data = await fetch(`${BASE_URL}/posts/${postId}`)
        .then(response => response.json())
        .then(data => data);
      commit(GET_SINGLE_STORY, data);
    }
  }
});

export default store;