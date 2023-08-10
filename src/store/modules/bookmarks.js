import axios from "axios";
import config from "../config.js";

const state = {
  link: `${config.domain}`,
  dataFileLocation: `${config.dataLocation}/bookmarks.json`,
  list: [],
  listFromJournal: [],
  item: {},
};

const getters = {
  getList: (state) => state.list,
  getListFromJournal: (state) => state.listFromJournal,
  getItem: (state) => state.item,
};

const mutations = {
  setList: (state, data) => {
    state.list = data;
  },
  setListFromJournal: (state, data) => {
    state.listFromJournal = data;
  },
  setItem: (state, data) => {
    state.item = data;
  },
};

const actions = {
  async fetchData({ commit, state }) {
    commit("appState/setLoading", true, { root: true });
    commit("appState/setError", null, { root: true });
    try {
      const response = await axios.get(state.link);
      commit("setList", response.data.data);
      commit("appState/setLoading", false, { root: true });
    } catch (error) {
      handleApiError(commit, error);
    }
  },
  async fetchFromJournal({ commit, state }, id) {
    commit("appState/setLoading", true, { root: true });
    commit("appState/setError", null, { root: true });
    try {
      const response = await axios.get(
        `${state.link}/journals/${id}/Bookmarks`
      );
      commit("setListFromJournal", response.data.data);
      commit("appState/setLoading", false, { root: true });
    } catch (error) {
      handleApiError(commit, error);
    }
  },
  async fetchItem({ commit, state }, id) {
    commit("appState/setLoading", true, { root: true });
    commit("appState/setError", null, { root: true });
    try {
      const response = await axios.get(`${state.link}/bookmark/${id}`);
      commit("setItem", response.data.data);
      commit("appState/setLoading", false, { root: true });
    } catch (error) {
      handleApiError(commit, error);
    }
  },
  async saveItem({ commit, state }, data) {
    // Consider if an item has an id to be an update, otherwise it's a new item
    commit("appState/setLoading", true, { root: true });
    commit("appState/setError", null, { root: true });
    try {
      console.log(`Submitting data: ${JSON.stringify(data)}`);
      const response = await axios.post(`${state.link}/bookmark`, data);
      commit("setItem", response.data.data);
      commit("appState/setLoading", false, { root: true });
    } catch (error) {
      handleApiError(commit, error);
    }
  },

  // ... (other actions)
};

function handleApiError(commit, error) {
  console.error(`Error: ${error.message}`);
  console.table(error);
  commit("appState/setError", error.message, { root: true });
  commit("appState/setLoading", false, { root: true });
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
