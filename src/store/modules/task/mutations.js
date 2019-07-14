const setTodo = (state, data) => {
  state.todo = state.todo.slice(0, 0)
  state.todo = data.slice()
}
const setDone = (state, data) => {
  state.done = state.done.slice(0, 0)
  state.done = data.slice()
}

const addTodo = (state, data) => {
  state.todo.push({
    title: data
  })
}
export default {
  setTodo,
  setDone,
  addTodo
}