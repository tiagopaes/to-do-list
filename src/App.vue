<template>
  <div id="app">
    <br />
    <div class="ui container">
      <todo-list v-bind:todos="todos"></todo-list>
      <create-todo v-on:add-todo="addTodo"></create-todo>
    </div>
  </div>
</template>

<script>
import TodoList from "./components/TodoList";
import CreateTodo from "./components/CreateTodo";
import StorageService from "./services/StorageService";

export default {
  name: "App",
  components: {
    TodoList,
    CreateTodo
  },
  data() {
    return {
      todos: [
        {
          title: "Todo A",
          done: false
        },
        {
          title: "Todo B",
          done: true
        },
        {
          title: "Todo C",
          done: false
        },
        {
          title: "Todo D",
          done: false
        }
      ]
    };
  },
  methods: {
    addTodo(todo) {
      this.todos.push(todo);
      StorageService.save("todos", this.todos);
    }
  },
  mounted() {
    const storageTodos = StorageService.load("todos");

    if (storageTodos && Array.isArray(storageTodos)) {
      this.todos = storageTodos;
    }
  }
};
</script>
