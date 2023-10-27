// const TodoInput = {
//   template: `
//     <input placeholder="Add todo" @keyup.enter="addTodo">
//   `,

//   methods: {
//     addTodo(e) {
//       this.$emit('add-todo', e.target.value)
//       e.target.value = ''
//     }
//   }
// }

// const TodoList = {
//   template: `
//     <ul>
//       <li v-for="todo in todos">
//         {{ todo }}
//       </li>
//     </ul>
//   `,
  
//   props: ['todos']
// }

// const app = Vue.createApp({
//   components: {
//     TodoInput,
//     TodoList    
//   },
  
//   data() {
//     return {
//       todos: []
//     }
//   },

//   methods: {
//     addTodo(text) {
//       this.todos.push(text)
//     }
//   } 
// })

// app.mount('#app')

const TodoInput = {
  template: `
    <input 
      placeholder="Add todo"
      @keyup.enter="addTodo"
    />
  `,

  methods: {
    addTodo(e) {
      this.$emit('add', e.target.value)
      e.target.value = ''
    }
  }
}

const TodoList = {
  props: ['todos'],

  template: `
    <ul>
      <li v-for="todo in todos">
        {{ todo }} 
      </li>
    </ul>
  `
}

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
