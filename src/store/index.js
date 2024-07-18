import { createStore } from "vuex";
import { UPLOAD_URL } from "./variables.js";
import merchants from "./modules/merchants.js";

export default createStore({
  state: {
    startLoader: false,
    showSANav: true,
    activePage: null,
    apiUploadUrl: UPLOAD_URL,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    merchants,
  },
});
