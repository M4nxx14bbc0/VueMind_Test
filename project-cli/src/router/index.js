import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Page from "../components/Page.vue";
import User from "../components/User.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/page',
      name: 'Page',
      component: Page
    },{
      path: '/user',
      name: 'User',
      component: User
    },{
      path: '/user/:id',
      name: 'User',
      component: User
    }
  ],
  mode: 'history'
})
