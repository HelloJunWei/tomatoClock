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

export default {
  getTodo,
  getDone
}