import { fetchDone, fetchTodo } from '../../../api'

const getTodo = ({ commit }) => {
  return new Promise((resolve) => {
    fetchTodo
      .then(
        data => {
          commit('setTodo', data)
          resolve()
        },
      )
  })
}

const getDone = ({ commit }) => {
  return new Promise((resolve) => {
    fetchDone
      .then(
        data => {
          commit('setDone', data)
          resolve()
        },
      )
  })
}

const addTodo = ({ commit }, data) => {
  return new Promise((resolve) => {
    commit('addTodo', data)
    resolve()
  })
} 
 
export default {
  getTodo,
  getDone,
  addTodo
}