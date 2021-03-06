import Vue from 'vue'
import Router from 'vue-router'

import index from '@/draft/index'

import map from '@/views/map'
import info from '@/views/info'
import infoDetail from '@/views/infoDetail'
import attention from '@/views/attention'
import login from '@/views/login'
import message from '@/views/message'
import history from '@/views/history'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/map',
          name: 'map',
          component: map
        },
        {
          path: '/info',
          name: 'info',
          component: info
        },
        {
          path: '/infoDetail',
          name: 'infoDetail',
          component: infoDetail
        },
        {
          path: '/attention',
          name: 'attention',
          component: attention
        },
        {
          path: '/login',
          name: 'login',
          component: login
        },
        {
          path: '/message',
          name: 'message',
          component: message
        },
        {
          path: '/history',
          name: 'history',
          component: history
        },
      ]
    }
  ]
})
