import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import app from './modules/app'
import upload from './modules/uploade.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    app,
    upload
  },
  plugins: [createLogger()]
})