import axios from "axios";
import config from "../config.js";

const bookmarksModule = {
  // NOTE: Needed to change this
  namespaced: true,
  state: {
    link: `${config.domain}`, // NOTE: Needed to change this
    dataFileLocation: `${config.dataLocation}/bookmarks.json`, // NOTE: Needed to change this
    list: [],
    listFromJournal: [],
  },
  getters: {
    getList: (state) => state.list,
    getListFromJournal: (state) => state.listFromJournal,
  },
  mutations: {
    setList: (state, data) => {
      state.list = data;
    },
    setListFromJournal: (state, data) => {
      state.listFromJournal = data;
    },
  },
  actions: {
    async fetchData({ commit, state }) {
      commit("appState/setLoading", true, { root: true });
      commit("appState/setError", null, { root: true });
      try {
        const response = await axios.get(state.link);
        console.log(response.data.data);
        commit("setList", response.data.data);
        commit("appState/setLoading", false, { root: true });
      } catch (error) {
        commit("appState/setError", error.message, { root: true });
        commit("appState/setLoading", false, { root: true });
      }
    },
    async fetchFromJournal({ commit, state }, id) {
      commit("appState/setLoading", true, { root: true });
      commit("appState/setError", null, { root: true });
      try {
        const response = await axios.get(
          `${state.link}/journals/${id}/Bookmarks`
        );
        console.log(response.data.data);
        commit("setListFromJournal", response.data.data);
        commit("appState/setLoading", false, { root: true });
      } catch (error) {
        console.error(`Error: ${error.message}`);
        console.table(error);
        commit("appState/setError", error.message, { root: true });
        commit("appState/setLoading", false, { root: true });
      }
    },
    async create({ commit, state, dispatch }, data) {
      commit("appState/setLoading", true, { root: true });
      commit("appState/setError", null, { root: true });
      console.log(
        `Attempting to post: ${JSON.stringify(data)} to ${state.link}`
      );
      try {
        const response = await axios.post(state.link, data);
        console.log(`Posted: ${response.data.data}`);
        dispatch("fetchData");
        commit("appState/setLoading", false, { root: true });
      } catch (error) {
        console.error(`Error: ${error.message}`);
        console.table(error);
        commit("appState/setError", error.message, { root: true });
        commit("appState/setLoading", false, { root: true });
      }
    },
    async update({ commit, state, dispatch }, data) {
      commit("appState/setLoading", true, { root: true });
      commit("appState/setError", null, { root: true });
      console.log(
        `Attempting to put: ${JSON.stringify(data)} to ${state.link}`
      );
      try {
        const response = await axios.put(`${state.link}/${data}/`);
        console.log(`Put: ${response.data.data}`);
        dispatch("fetchData");
        commit("appState/setLoading", false, { root: true });
      } catch (error) {
        console.error(`Error: ${error.message}`);
        console.table(error);
        commit("appState/setError", error.message, { root: true });
        commit("appState/setLoading", false, { root: true });
      }
    },
    async delete({ commit, state, dispatch }, data) {
      commit("appState/setLoading", true, { root: true });
      commit("appState/setError", null, { root: true });
      console.log(`Attempting to delete: ${data} to ${state.link}`);
      try {
        const response = await axios.delete(`${state.link}/${data}/`);
        console.log(`Deleted: ${response.data.data}`);
        dispatch("fetchData");
        commit("appState/setLoading", false, { root: true });
      } catch (error) {
        console.error(`Error: ${error.message}`);
        console.table(error);
        commit("appState/setError", error.message, { root: true });
        commit("appState/setLoading", false, { root: true });
      }
    },
  },
};

export default bookmarksModule; // NOTE: Needed to change this
