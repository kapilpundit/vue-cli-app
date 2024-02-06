import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 0
    }
  },
  getters: {
    getCounterSquare(state) {
      return Math.pow(state.count, 2)
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    resetCounterMutation(state, val) {
      state.count = val
    }
  },
  actions: {
    incrementCounter({ commit }) {
      commit('increment')
    },
    decrementCounter({ commit }) {
      commit('decrement')
    },
    resetConterAction({ commit }, val) {
      // Mutation commited with payload 'val'
      commit('resetCounterMutation', val)
    }
  }
})

export default store
