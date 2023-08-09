import axios from "axios";
import config from "../config.js";

const quotesModule = {
  namespaced: true,
  state: {
    link: `${config.domain}`,
    dataFileLocation: `${config.dataLocation}/quotes.json`,
    list: [],
    userList: [],
  },
  getters: {
    getList: (state) => state.list,
    getUserList: (state) => state.userList,
  },
  mutations: {
    setList: (state, data) => {
      state.list = data;
    },
    setUserList: (state, data) => {
      state.userList = data;
    },
  },
  actions: {
    async fetchData({ commit, state }) {
      commit("appState/setLoading", true, { root: true });
      commit("appState/setError", null, { root: true });
      try {
        // Add admin requirement to access this apge before deploying
        const response = await axios.get(`${state.link}/quotes`);
        commit("setList", response.data.data);
        commit("appState/setLoading", false, { root: true });
      } catch (error) {
        commit("appState/setError", error.message, { root: true });
        commit("appState/setLoading", false, { root: true });
      }
    },
    async fetchUserQuotes({ commit, state }, data) {
      commit("appState/setLoading", true, { root: true });
      commit("appState/setError", null, { root: true });
      try {
        const response = await axios.get(`${state.link}/quotes/${data}`);
        commit("setUserList", response.data.data);
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
        `Attempting to post: ${JSON.stringify(data)} to ${state.link}/quotes`
      );
      try {
        const response = await axios.post(`${state.link}/quotes`, data);
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
        `Attempting to put: ${JSON.stringify(data)} to ${state.link}/quotes`
      );
      try {
        const response = await axios.put(`${state.link}/quotes/${data}/`);
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
        `Attempting to delete: ${data} to ${state.link}/quotes/${data}`
      );
      try {
        const response = await axios.delete(`${state.link}/quotes/${data}/`);
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

export default quotesModule; // NOTE: Needed to change this
