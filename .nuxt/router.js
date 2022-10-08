import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8491dd6a = () => interopDefault(import('../pages/acceptable-use-policy/index.vue' /* webpackChunkName: "pages/acceptable-use-policy/index" */))
const _4341462d = () => interopDefault(import('../pages/appsumo/index.vue' /* webpackChunkName: "pages/appsumo/index" */))
const _8e39aed4 = () => interopDefault(import('../pages/booked/index.vue' /* webpackChunkName: "pages/booked/index" */))
const _880b950e = () => interopDefault(import('../pages/contact-us/index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _5e5b6c83 = () => interopDefault(import('../pages/cookie-policy/index.vue' /* webpackChunkName: "pages/cookie-policy/index" */))
const _8028cb24 = () => interopDefault(import('../pages/customer-support/index.vue' /* webpackChunkName: "pages/customer-support/index" */))
const _69edab90 = () => interopDefault(import('../pages/easy/index.vue' /* webpackChunkName: "pages/easy/index" */))
const _52c72a1e = () => interopDefault(import('../pages/hosting-guide/index.vue' /* webpackChunkName: "pages/hosting-guide/index" */))
const _7d38d391 = () => interopDefault(import('../pages/hosting-upgrade/index.vue' /* webpackChunkName: "pages/hosting-upgrade/index" */))
const _2740335b = () => interopDefault(import('../pages/next-steps/index.vue' /* webpackChunkName: "pages/next-steps/index" */))
const _248a7eb6 = () => interopDefault(import('../pages/privacy-policy/index.vue' /* webpackChunkName: "pages/privacy-policy/index" */))
const _42977b8b = () => interopDefault(import('../pages/success/index.vue' /* webpackChunkName: "pages/success/index" */))
const _04060c82 = () => interopDefault(import('../pages/terms-and-conditions/index.vue' /* webpackChunkName: "pages/terms-and-conditions/index" */))
const _17124413 = () => interopDefault(import('../pages/terms-of-service/index.vue' /* webpackChunkName: "pages/terms-of-service/index" */))
const _5d94bbc4 = () => interopDefault(import('../pages/thank-you/index.vue' /* webpackChunkName: "pages/thank-you/index" */))
const _74c91e30 = () => interopDefault(import('../pages/training/index.vue' /* webpackChunkName: "pages/training/index" */))
const _0309db97 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/acceptable-use-policy",
    component: _8491dd6a,
    name: "acceptable-use-policy"
  }, {
    path: "/appsumo",
    component: _4341462d,
    name: "appsumo"
  }, {
    path: "/booked",
    component: _8e39aed4,
    name: "booked"
  }, {
    path: "/contact-us",
    component: _880b950e,
    name: "contact-us"
  }, {
    path: "/cookie-policy",
    component: _5e5b6c83,
    name: "cookie-policy"
  }, {
    path: "/customer-support",
    component: _8028cb24,
    name: "customer-support"
  }, {
    path: "/easy",
    component: _69edab90,
    name: "easy"
  }, {
    path: "/hosting-guide",
    component: _52c72a1e,
    name: "hosting-guide"
  }, {
    path: "/hosting-upgrade",
    component: _7d38d391,
    name: "hosting-upgrade"
  }, {
    path: "/next-steps",
    component: _2740335b,
    name: "next-steps"
  }, {
    path: "/privacy-policy",
    component: _248a7eb6,
    name: "privacy-policy"
  }, {
    path: "/success",
    component: _42977b8b,
    name: "success"
  }, {
    path: "/terms-and-conditions",
    component: _04060c82,
    name: "terms-and-conditions"
  }, {
    path: "/terms-of-service",
    component: _17124413,
    name: "terms-of-service"
  }, {
    path: "/thank-you",
    component: _5d94bbc4,
    name: "thank-you"
  }, {
    path: "/training",
    component: _74c91e30,
    name: "training"
  }, {
    path: "/",
    component: _0309db97,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
