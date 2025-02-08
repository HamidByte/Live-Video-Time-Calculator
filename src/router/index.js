import { createRouter, createWebHistory } from 'vue-router'
import * as ROUTES from '@/router/routes.js'
import HomeView from '@/views/HomeView.vue'
import NotFound from '@/views/NotFound.vue'

// Time
import TimeView from '@/views/categories/TimeView.vue'
import LiveVideoTime from '@/components/time/LiveVideoTime.vue'

// Miscellaneous
import MiscView from '@/views/categories/MiscView.vue'

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
    // Time
    {
      path: ROUTES.TIME.path,
      name: ROUTES.TIME.name,
      component: TimeView,
    },
    {
      path: ROUTES.LIVE_VIDEO_TIME.path,
      name: ROUTES.LIVE_VIDEO_TIME.name,
      component: LiveVideoTime,
    },
    // Miscellaneous
    {
      path: ROUTES.MISC.path,
      name: ROUTES.MISC.name,
      component: MiscView,
    },
    {
      path: ROUTES.NOT_FOUND.path,
      name: ROUTES.NOT_FOUND.name,
      component: NotFound,
    },
  ],
})

export default router
