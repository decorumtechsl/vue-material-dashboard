import Vue from 'vue';
import Vuex from 'vuex';
import auth from "@/store/modules/auth";


Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        auth : {}
    },
    modules: {
        auth: auth
    }
});

export default store;
