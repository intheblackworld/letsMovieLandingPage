import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'
import Blog from './pages/Blog.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blog/:id',
      name: 'Blog',
      component: Blog,
      children: [
        { path: '', component: () => import(/* webpackChunkName: "intro" */ './projects/letsmovie/Intro.vue') },
        {
          path: 'intro',
          component: () => import(/* webpackChunkName: "intro" */ './projects/letsmovie/Intro.vue')
        },
        {
          path: 'help',
          component: () => import(/* webpackChunkName: "intro" */ './projects/letsmovie/Help.vue')
        },
        {
          path: 'dating',
          component: () => import(/* webpackChunkName: "intro" */ './projects/letsmovie/Dating.vue')
        }
      ]
    },
    // {
    //   path: '/formThanks',
    //   name: 'formThanks',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ './pages/FormThanks.vue')
    // },
    // {
    //   path: '/phoneThanks',
    //   name: 'phoneThanks',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ './pages/PhoneThanks.vue')
    // }
  ]
})
