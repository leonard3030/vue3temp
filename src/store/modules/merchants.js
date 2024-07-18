import axios from "axios";
import { BACKEND } from "../variables";
const GET_MERCHANTS_URL = BACKEND + "/merchants";
const ADD_MERCHANT_URL = BACKEND + "/merchants/add";
const UPDATE_MERCHANT_URL = BACKEND + "/merchants/update";
const DELETE_MERCHANT_URL = BACKEND + "/merchants/delete";
const merchants = {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    ["GET_MERCHANTS"]: (state, payload) => {
      return axios({
        url: GET_MERCHANTS_URL + `?page=${payload.data.page}`,
        method: "POST",
        data: payload.data,
        headers: {
          Authorization: `${payload.token}`,
        },
      });
    },
    ["ADD_MERCHANT"](state, payload) {
      return axios({
        method: "POST",
        url: ADD_MERCHANT_URL,
        data: payload.data,
        headers: {
          Authorization: payload.token,
        },
      });
    },
    ["UPDATE_MERCHANT"](state, payload) {
      return axios({
        method: "POST",
        url: UPDATE_MERCHANT_URL,
        data: payload.data,
        headers: {
          Authorization: payload.token,
        },
      });
    },
    ["DELETE_MERCHANT"](state, payload) {
      return axios({
        method: "POST",
        url: DELETE_MERCHANT_URL,
        data: payload.data,
        headers: {
          Authorization: payload.token,
        },
      });
    },
  },
  modules: {},
};
export default merchants;
