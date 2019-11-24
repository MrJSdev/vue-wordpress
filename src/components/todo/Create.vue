<template>
  <div>
    <h1>Add Todo</h1>
    <input type="text" v-model="todo.title">
    <input type="date" v-model="todo.date">
    <input type="text" v-model="todo.time">
    <button type="submit" @click="saveTodo">Create Todo</button>
    <div class="count">
      <h3>{{ getTodosCount }}</h3>
    </div>
    <div class="success">
      {{ message }}
    </div>
  </div>
</template>

<script>
  import { mapMutations, mapGetters } from 'vuex'
  export default {
    name: "Create",
    data () {
      return {
        todo: {},
        message: ''
      }
    },
    computed: {
      ...mapGetters(['getTodosCount'])
    },
    methods: {
      ...mapMutations(['addTodo']),
      saveTodo () {
        let todo = Object.assign({}, this.todo)
        this.message = 'success'
        this.addTodo(todo)
      }
    }
  }
</script>

<style scoped>

</style>
