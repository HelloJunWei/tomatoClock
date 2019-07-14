export { fetchTodo, fetchDone }

const fetchTodo = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        title: 'TODO 1'
      },
      {
        title: 'TODO 2'
      },
      {
        title: 'TODO 3'
      }
    ])
  }, 0)
})

const fetchDone = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        title: 'DONE 1',
        tomato: 2
      },
      {
        title: 'DONE 2',
        tomato: 1
      },
      {
        title: 'DONE 3',
        tomato: 5
      }
    ])
  }, 0)
})