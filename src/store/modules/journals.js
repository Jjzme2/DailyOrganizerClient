import axios from "axios";
import config from "../config.js";

const journalsModule = {
  // NOTE: Needed to change this
  namespaced: true,
  state: {
    link: `${config.domain}`, // NOTE: Needed to change this
    dataFileLocation: `${config.dataLocation}/journals.json`, // NOTE: Needed to change this
    list: [],
    userList: [],
    tableOfContents: [],
  },
  getters: {
    getList: (state) => state.list,
    getJournal: (state) => (id) => {
      return state.list.find((journal) => journal.id === id);
    },
    getUserList: (state) => state.userList,
    getUserJournal: (state) => (id) => {
      return state.userList.find((journal) => journal.id === id);
    },
    getTableOfContents: (state) => state.tableOfContents,
  },
  mutations: {
    setList: (state, data) => {
      state.list = data;
    },
    setUserList: (state, data) => {
      state.userList = data;
    },
    setTableOfContents: (state, data) => {
      state.tableOfContents = data;
    },
  },
  actions: {
    async fetchData({ commit, state }) {
      commit("appState/setLoading", true, { root: true });
      commit("appState/setError", null, { root: true });
      try {
        // Add admin requirement to access this apge before deploying
        const response = await axios.get(`${state.link}/journalList`);
        commit("setList", response.data.data);
        commit("appState/setLoading", false, { root: true });
      } catch (error) {
        commit("appState/setError", error.message, { root: true });
        commit("appState/setLoading", false, { root: true });
      }
    },
    async fetchUserJournals({ commit, state }, data) {
      commit("appState/setLoading", true, { root: true });
      commit("appState/setError", null, { root: true });
      try {
        const response = await axios.get(`${state.link}/journals/${data}`);
        commit("setUserList", response.data.data);
        commit("appState/setLoading", false, { root: true });
      } catch (error) {
        commit("appState/setError", error.message, { root: true });
        commit("appState/setLoading", false, { root: true });
      }
    },
    async fetchTableOfContents({ commit, state }, data) {
      commit("appState/setLoading", true, { root: true });
      commit("appState/setError", null, { root: true });
      try {
        const response = await axios.get(`${state.link}/journals/${data}/TOC`);
        commit("setTableOfContents", response.data.data);
        commit("appState/setLoading", false, { root: true });
      } catch (error) {
        commit("appState/setError", error.message, { root: true });
        commit("appState/setLoading", false, { root: true });
      }
    },
    async search({ commit, state }, data) {
      commit("appState/setLoading", true, { root: true });
      commit("appState/setError", null, { root: true });
      try {
        const response = await axios.get(
          `${state.link}/journalSearch/${data.id}/${data.search}`
        );
        commit("setList", response.data.data);
        commit("appState/setLoading", false, { root: true });
      } catch (error) {
        commit("appState/setError", error.message, { root: true });
        commit("appState/setLoading", false, { root: true });
      }
    },
    async create({ commit, state, dispatch }, data) {
      commit("appState/setLoading", true, { root: true });
      commit("appState/setError", null, { root: true });
      console.log(
        `Attempting to post: ${JSON.stringify(data)} to ${state.link}/journal`
      );
      try {
        const response = await axios.post(`${state.link}/journal`, data);
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
        `Attempting to put: ${JSON.stringify(data)} to ${state.link}/journal`
      );
      try {
        const response = await axios.put(`${state.link}/journal/${data}/`);
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
      console.log(
        `Attempting to delete: ${data} to ${state.link}/journal/${data}`
      );
      try {
        const response = await axios.delete(`${state.link}/journal/${data}/`);
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

export default journalsModule; // NOTE: Needed to change this
