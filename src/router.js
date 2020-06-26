import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'
import Blog from './pages/Blog.vue'
import Rule from './pages/Rule.vue'
import Webview from './pages/Webview.vue'

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
      component: Rule,
      children: [
        {
          path: 'platform',
          component: () => import(/* webpackChunkName: "rule" */ './projects/rule/Platform.vue')
        },
        {
          path: 'notice',
          component: () => import(/* webpackChunkName: "rule" */ './projects/rule/Notice.vue')
        },
        {
          path: 'guide',
          component: () => import(/* webpackChunkName: "webview" */ './projects/rule/Guide.vue')
        },

        {
          path: 'question',
          component: () => import(/* webpackChunkName: "webview" */ './projects/rule/Question.vue')
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
          path: 'checkdetail',
          component: () => import(/* webpackChunkName: "webview" */ './projects/webview/CheckDetail.vue')
        },
        {
          path: 'editinfo',
          component: () => import(/* webpackChunkName: "webview" */ './projects/webview/EditInfo.vue')
        },
        {
          path: 'mateinfo',
          component: () => import(/* webpackChunkName: "webview" */ './projects/webview/MateInfo.vue')
        },
        {
          path: 'datings',
          component: () => import(/* webpackChunkName: "webview" */ './projects/webview/Datings.vue')
        },
      ]
    },
  ]
})
