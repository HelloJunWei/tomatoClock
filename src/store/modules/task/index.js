import actions from './actions'
import mutations from './mutations'
import getters from './getters'
const state = {
  todo: [
    {
      title: 'default'
    }
  ],
  done: [{
    title: 'default'
  }]
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
