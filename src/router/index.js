/* eslint-disable */

import Vue from 'vue'
import Router from 'vue-router'
import GoogleMap from '@/components/GoogleMap'
import AutocompleteSearch from '@/components/AutocompleteSearch'

Vue.use(Router)

export default new Router({
  routes: [
  {
      path: '/',
      name: 'AutocompleteSearch',
      component: AutocompleteSearch

    } ]
})
