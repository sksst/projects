import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import TopNews from '@/components/TopNews/TopNews'
import Weixin from '@/components/Weixin/Weixin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/top-news',
      name: 'TopNews',
      component: TopNews
    },
    {
      path: '/weixin',
      name: 'Weixin',
      component: Weixin
    }
  ]
})
