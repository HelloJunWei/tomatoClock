const Main = () => import('../views/Main.vue')
const Detail = () => import('../views/Detail/Detail.vue')
const TodoList = () => import('../views/Detail/TodoList')
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
      }
    ] 
  },
  { path: '/error', name: 'error', component: ErrorPage },
  { path: '*', redirect: '/error' }
]
