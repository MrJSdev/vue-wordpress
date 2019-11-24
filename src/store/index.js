import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        title: 'Interview for Rare Diamond',
        time: '4:30 PM',
        id: 1
      },
      {
        title: 'Interview for Seera Group',
        time: '8:30 PM',
        id: 2
      },
      {
        title: 'Upcoming Interview',
        time: '10:30 PM',
        id: 3
      }
    ]
  },
  getters: {
    getTodos (state) {
      return state.todos
    },
    getTodosCount (state) {
      return state.todos.length
    }
  },
  mutations: {
    addTodo (state, newTodo) {
      newTodo.id = state.todos.length + 1
      state.todos.push(newTodo)
    }
  },
  actions: {
  },
  modules: {
  }
})
