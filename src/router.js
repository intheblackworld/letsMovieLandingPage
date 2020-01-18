import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'
import Blog from './pages/Blog.vue'
import Webview from './pages/Webview.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
      children: [
        {
          path: 'intro',
          component: () => import(/* webpackChunkName: "blog" */ './projects/blog/Intro.vue')
        },
        {
          path: 'help',
          component: () => import(/* webpackChunkName: "blog" */ './projects/blog/Help.vue')
        },
        {
          path: 'dating',
          component: () => import(/* webpackChunkName: "blog" */ './projects/blog/Dating.vue')
        }
      ]
    },

    {
      path: '/webview',
      name: 'WebView',
      component: Webview,
      children: [
        {
          path: 'test',
          component: () => import(/* webpackChunkName: "webtest" */ './projects/webview/test.vue')
        },
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
