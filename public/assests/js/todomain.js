// import Vue from 'vue'
// import TodoInput from '@/todo/TodoInput.vue'
// import TodoList from '@/todo/TodoList.vue'
import TodoList from './todo/TodoList.js'
import TodoInput from './todo/TodoInput.js'
window.onload = function() {
  const app = Vue.createApp({
    components: {
      TodoInput,
      TodoList
    },
    data() {
      return {
        todos: []
      }
    },
    methods: {
      addTodo(text) {
        this.todos.push(text)
      }
    }  
  })
  
  app.mount('#app')

}

