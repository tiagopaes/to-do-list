<template>
  <div>
    <div class="ui one column center aligned page grid">
      <div class="column twelve wide">
        <p>Completed Tasks: {{ todos.filter(todo => todo.done === true).length }}</p>
        <p>Pending Tasks: {{ todos.filter(todo => todo.done === false).length }}</p>
      </div>
    </div>
    <todo
      v-for="todo in todos"
      :key="todo.title"
      :todo="todo"
    />
  </div>
</template>

<script>
import Todo from "./Todo";

export default {
  components: {
    Todo
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  }
};
</script>
