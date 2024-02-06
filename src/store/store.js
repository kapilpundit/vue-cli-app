/*
 * This is a Vuex store. Like a database contains data.
 * A store also contains data (variables) that can be
 * read, and manipulated from any of your app's components.
 * It caters to the problem of component-drilling, where
 * you have to pass data from parent component to all the
 * child component in a component hierarchy.
 */
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  // state is where you define all the global (app) variables.
  state() {
    return {
      count: 0
    }
  },
  // getters are helpful in manipulating data before presenting
  // in a component.
  getters: {
    getCounterSquare(state) {
      return Math.pow(state.count, 2)
    }
  },
  // Mutations are functions/methods used to update store
  // variables (state) (state of your app).
  // Mutations are called using commit().
  // However they work synchronously.
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
  // Actions are functions/methods used to commit mutations
  // to the app variables (state) (state of your app) using
  // Mutations in the background using commit().
  // Mutations are called using dispatch().
  // They work asynchronously, so are better place to get
  // data from remote sources like APIs.
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
