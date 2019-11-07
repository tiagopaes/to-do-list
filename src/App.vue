<template>
  <div id="app">
    <br>
    <div class="ui container">
      <todo-list />
      <create-todo />
    </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import CreateTodo from "@/components/CreateTodo";

export default {
  name: "App",
  components: {
    TodoList,
    CreateTodo
  }
};
</script>
