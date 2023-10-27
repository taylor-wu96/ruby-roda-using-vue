<template>
  <input placeholder="Add todo" @keyup.enter="addTodo">  
</template>

<script>
export default {
  methods: {
    addTodo(e) {
      this.$emit('add-todo', e.target.value)
      e.target.value = ''
    }
  }
} 
</script>
