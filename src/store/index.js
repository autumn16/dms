import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: () => ({
    gloUserId: '',
    gloUsername: '',
  }),
  getters: {
    getUserId: state => state.gloUserId,
    getUsername: state => state.gloUsername
  },
  mutations: {
    setUserInfo (state, id, name){
      state.gloUserId = id
      state.gloUsername = name
      Vue.set(state.gloUserId, id)
      Vue.set(state.gloUsername, name)
    }
  },
  actions: {
   
  },
  modules: {

  }
})
