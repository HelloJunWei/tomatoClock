import actions from './actions'
import mutations from './mutations'
import getters from './getters'
const state = {
  todo: [],
  done: []
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
