const setTodo = (state, data) => {
  state.todo = state.todo.slice(0, 0)
  state.todo = data.slice()
}
const setDone = (state, data) => {
  state.done = state.done.slice(0, 0)
  state.done = data.slice()
}

export default {
  setTodo,
  setDone
}