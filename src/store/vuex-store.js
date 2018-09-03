import Vue from 'vue'
import Vuex from 'vuex'
//import resource from 'vue-resource'
import createPersistedState from "vuex-persistedstate";
import * as Cookie from 'js-cookie';

Vue.use(Vuex);
//Vue.use(resource)

function initialState () {
  return {
    login: null,
}
}


const state = initialState();

const mutations = {
    // generic setter
    set(state, keyValObj) {
        Object.keys(keyValObj).forEach(function (key) {
            state[key]=keyValObj[key];
        });
    },
	reset(state)
	{
		
		 const s = initialState()
      Object.keys(s).forEach(key => {
        state[key] = s[key]
      })
	}
    // specific mutations (performing data manipulation)
    //...
};

const getters = {
    // generic getter
    get: (state) => (key) => {
        return state[key];
    },
    // specific getters (performing data manipulation)
    //...
};

const actions = {
    // generic setter action
    set: (context, keyValObj) => {
        context.commit('set', keyValObj);
    },
	reset:(context)=>
	{
		context.commit('reset');
	},
    // specific actions (triggering specific mutations)
    //...
};

/* eslint-disable no-new */
export default (store) => {
    return new Vuex.Store({
        strict: true,
        plugins: [
            createPersistedState({
                paths: ['login'],
                getState: (key) => Cookie.getJSON(key),
                setState: (key, state) => Cookie.set(key, state, { expires: 1, secure: false })
            })
        ],
        state,
        getters,
        mutations,
        actions
    })
}
