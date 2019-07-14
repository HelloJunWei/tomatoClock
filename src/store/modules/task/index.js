import actions from './actions'
import mutations from './mutations'
import getters from './getters'
const state = {
  todo: [
    {
      title: 'default',
      tomato: 0
    }
  ],
  done: [{
    title: 'default',
    tomato: 0
  }]
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
