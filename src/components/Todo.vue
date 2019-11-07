<template>
  <div class="ui centered card">
    <div
      v-show="!isEditing"
      class="content"
    >
      <div class="header">
        {{ title }}
      </div>
      <div class="extra content">
        <span
          class="right floated edit icon"
          @click="showForm"
        >
          <i class="edit icon" />
        </span>
        <span
          class="right floated trash icon"
          @click="deleteTodo(todo)"
        >
          <i class="trash icon" />
        </span>
      </div>
    </div>

    <div
      v-show="isEditing"
      class="content"
    >
      <div class="ui form">
        <div class="field">
          <label>Title</label>
          <input
            v-model="title"
            type="text"
          >
        </div>
        <div class="ui two button attached buttons">
          <button
            class="ui basic blue button"
            @click="hideForm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
    <div
      v-show="!isEditing &&todo.done"
      class="ui bottom attached green basic button"
      disabled
      @click="completeTodo(todo)"
    >
      Completed
    </div>
    <div
      v-show="!isEditing && !todo.done"
      class="ui bottom attached red basic button"
      @click="completeTodo(todo)"
    >
      Pending
    </div>
  </div>
</template>

<script>
export default {
  props: ["todo"],
  data() {
    return {
      isEditing: false,
      title: this.todo.title
    };
  },
  methods: {
    showForm() {
      this.isEditing = true;
    },
    hideForm() {
      this.isEditing = false;
      this.$store.dispatch("updateTodo", {
        todo: this.todo,
        newTitle: this.title
      });
    },
    deleteTodo(todo) {
      this.$store.dispatch("deleteTodo", todo);
    },
    completeTodo(todo) {
      this.$store.dispatch("completeTodo", todo);
    }
  }
};
</script>
