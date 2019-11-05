<template>
  <div>
    <div class="ui one column center aligned page grid">
      <div class="column twelve wide">
        <p>Completed Tasks: {{todos.filter(todo => todo.done === true).length}}</p>
        <p>Pending Tasks: {{todos.filter(todo => todo.done === false).length}}</p>
      </div>
    </div>
    <todo
      v-on:delete-todo="deleteTodo"
      v-on:complete-todo="completeTodo"
      v-for="todo in todos"
      :key="todo.title"
      :todo="todo"
    ></todo>
  </div>
</template>

<script>
import Todo from "./Todo";
import StorageService from "./../services/StorageService";

export default {
  props: ["todos"],
  components: {
    Todo
  },
  methods: {
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
      StorageService.save("todos", this.todos);
    },
    completeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].done = !todo.done;
      StorageService.save("todos", this.todos);
    }
  }
};
</script>
