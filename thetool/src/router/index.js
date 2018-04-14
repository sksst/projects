import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home.vue'
import TopNews from '@/components/TopNews/TopNews'

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
    }
  ]
})
