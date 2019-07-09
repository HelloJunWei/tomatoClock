const Main = () => import('../views/Main.vue')
const ErrorPage = () => import('../views/Error.vue')
export const routes = [
  { path: '/', name: 'main', component: Main },
  { path: '/error', name: 'error', component: ErrorPage },
  { path: '*', redirect: '/error' }
]
