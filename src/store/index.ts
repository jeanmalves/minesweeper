import Vue from "vue";
import Vuex from "vuex";

import { GameStore } from "@/store/game";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    GameStore
  }
});
