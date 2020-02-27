import Vuex from 'vuex';
import Vue from 'vue';
import finances from './modules/finances';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        finances
    }
})