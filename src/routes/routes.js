const Main = () => import('../views/Main.vue')
const Detail = () => import('../views/Detail/Detail.vue')
const TodoList = () => import('../views/Detail/TodoList')
const Analytics = () => import('../views/Detail/Analytics')
const Ringtones = () => import('../views/Detail/Ringtones')
const ErrorPage = () => import('../views/Error.vue')
export const routes = [
  { path: '/', name: 'main', component: Main },
  {
    path: '/detail', name: 'detail', component: Detail, 
    children: [
      {
        path: '/detail/todo',
        name: 'todo',
        component: TodoList
      },
      {
        path: '/detail/Analytics',
        name: 'analytics',
        component: Analytics
      },
      {
        path: '/detail/Ringtones',
        name: 'ringtones',
        component: Ringtones
      }
    ] 
  },
  { path: '/error', name: 'error', component: ErrorPage },
  { path: '*', redirect: '/error' }
]
