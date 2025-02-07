import { createRouter, createWebHistory } from 'vue-router'
import * as ROUTES from '@/router/routes.js'
import HomeView from '@/views/HomeView.vue'
import LiveVideoTime from '@/views/time/LiveVideoTime.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES.HOME.path,
      name: ROUTES.HOME.name,
      component: HomeView,
    },
    {
      path: ROUTES.ABOUT.path,
      name: ROUTES.ABOUT.name,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: ROUTES.LIVE_VIDEO_TIME.path,
      name: ROUTES.LIVE_VIDEO_TIME.name,
      component: LiveVideoTime,
    },
  ],
})

export default router
