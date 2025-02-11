import { createRouter, createWebHistory } from 'vue-router'
import * as ROUTES from '@/router/routes.js'
import HomeView from '@/views/HomeView.vue'
import NotFound from '@/views/NotFound.vue'

// Unit
import UnitView from '@/views/categories/UnitView.vue'

// Date
import DateView from '@/views/categories/DateView.vue'

// Time
import TimeView from '@/views/categories/TimeView.vue'
import LiveVideoTime from '@/components/time/LiveVideoTime.vue'

// Currency
import CurrencyView from '@/views/categories/CurrencyView.vue'

// Math
import MathView from '@/views/categories/MathView.vue'

// Text
import TextView from '@/views/categories/TextView.vue'

// Digital Storage
import DigitalStorageView from '@/views/categories/DigitalStorageView.vue'

// Finance
import FinanceView from '@/views/categories/FinanceView.vue'

// Science
import ScienceView from '@/views/categories/ScienceView.vue'

// Engineering
import EngineeringView from '@/views/categories/EngineeringView.vue'

// Health & Fitness
import HealthFitnessView from '@/views/categories/HealthFitnessView.vue'

// Geography
import GeographyView from '@/views/categories/GeographyView.vue'

// Miscellaneous
import MiscView from '@/views/categories/MiscView.vue'
import AspectRatioCalculator from '@/components/misc/AspectRatioCalculator.vue'

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
      path: ROUTES.NOT_FOUND.path,
      name: ROUTES.NOT_FOUND.name,
      component: NotFound,
    },
    // Unit
    {
      path: ROUTES.UNIT.path,
      name: ROUTES.UNIT.name,
      component: UnitView,
    },
    // Date
    {
      path: ROUTES.DATE.path,
      name: ROUTES.DATE.name,
      component: DateView,
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
    // Currency
    {
      path: ROUTES.CURRENCY.path,
      name: ROUTES.CURRENCY.name,
      component: CurrencyView,
    },
    // Math
    {
      path: ROUTES.MATH.path,
      name: ROUTES.MATH.name,
      component: MathView,
    },
    // Text
    {
      path: ROUTES.TEXT.path,
      name: ROUTES.TEXT.name,
      component: TextView,
    },
    // Digital Storage
    {
      path: ROUTES.DIGITAL_STORAGE.path,
      name: ROUTES.DIGITAL_STORAGE.name,
      component: DigitalStorageView,
    },
    // Finance
    {
      path: ROUTES.FINANCE.path,
      name: ROUTES.FINANCE.name,
      component: FinanceView,
    },
    // Science
    {
      path: ROUTES.SCIENCE.path,
      name: ROUTES.SCIENCE.name,
      component: ScienceView,
    },
    // Engineering
    {
      path: ROUTES.ENGINEERING.path,
      name: ROUTES.ENGINEERING.name,
      component: EngineeringView,
    },
    // Health & Fitness
    {
      path: ROUTES.HEALTH.path,
      name: ROUTES.HEALTH.name,
      component: HealthFitnessView,
    },
    // Geography
    {
      path: ROUTES.GEOGRAPHY.path,
      name: ROUTES.GEOGRAPHY.name,
      component: GeographyView,
    },
    // Miscellaneous
    {
      path: ROUTES.MISC.path,
      name: ROUTES.MISC.name,
      component: MiscView,
    },
    {
      path: ROUTES.ASPECT_RATIO.path,
      name: ROUTES.ASPECT_RATIO.name,
      component: AspectRatioCalculator,
    },
  ],
})

export default router
