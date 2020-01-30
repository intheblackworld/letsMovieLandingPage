import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'
import Blog from './pages/Blog.vue'
import Rule from './pages/Rule.vue'
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
    // 部落格文章
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
    // 約會守則，注意事項
    {
      path: '/rule',
      name: 'Rule',
      component: Blog,
      children: [
        {
          path: 'platform',
          component: () => import(/* webpackChunkName: "rule" */ './projects/rule/Platform.vue')
        },
        {
          path: 'notice',
          component: () => import(/* webpackChunkName: "rule" */ './projects/rule/Notice.vue')
        },
      ]
    },
    // webview 組件
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
