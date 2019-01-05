import Vue from 'vue'
import App from './App.vue'

import store from './store/index'
import routes from './router/config'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router=new VueRouter({
  routes:routes
})
router.beforeEach((to, from, next)=>{
  console.log('1111');
  next();
})
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: "<App/>"

})
