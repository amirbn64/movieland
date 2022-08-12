import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/components/Home.vue'
import moviedetail from '@/components/moviedetail.vue'

const movie  = {
    template: '<div>movie</div>',
  }
  
  // these are passed to `createRouter`
  const routes = [
    {path: '/', name: 'Home', component: Home},
    // dynamic segments start with a colon
    { path: '/moviedetail/:id', component: ()=>import('@/components/moviedetail.vue') },
  ]
  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  export default router