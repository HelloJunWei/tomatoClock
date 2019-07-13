const Main = () => import('../views/Main.vue')
const Detail = () => import('../views/Detail.vue')
const ErrorPage = () => import('../views/Error.vue')
export const routes = [
  { path: '/', name: 'main', component: Main },
  { path: '/detail', name: 'detail', component: Detail },
  { path: '/error', name: 'error', component: ErrorPage },
  { path: '*', redirect: '/error' }
]
