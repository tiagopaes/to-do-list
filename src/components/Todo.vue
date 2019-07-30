<template>
  <div class='ui centered card'>

    <div class="content" v-show="!isEditing">
      <div class='header'>
        {{ title }}
      </div>
      <div class='extra content'>
        <span class='right floated edit icon' v-on:click="showForm">
          <i class='edit icon'></i>
        </span>
        <span class='right floated trash icon' v-on:click="deleteTodo(todo)">
          <i class='trash icon'></i>
        </span>
      </div>
    </div>

    <div class="content" v-show="isEditing">
      <div class='ui form'>
        <div class='field'>
          <label>Title</label>
          <input type='text' v-model="title" >
        </div>
        <div class='ui two button attached buttons'>
          <button class='ui basic blue button' v-on:click="hideForm">
            Close
          </button>
        </div>
      </div>
    </div>
    <div
      class='ui bottom attached green basic button'
      v-show="!isEditing &&todo.done" disabled
    >
        Completed
    </div>
    <div class='ui bottom attached red basic button' v-show="!isEditing && !todo.done" v-on:click="completeTodo(todo)">
        Pending
    </div>
  </div>
</template>

<script>
  export default {
    props: ['todo'],
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
      },
      deleteTodo(todo) {
        this.$emit('delete-todo', todo);
      },
      completeTodo(todo) {
        this.$emit('complete-todo', todo);
      },
    },
  };
</script>
