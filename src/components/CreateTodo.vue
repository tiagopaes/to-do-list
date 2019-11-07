<template>
  <div class="ui basic content center aligned segment">
    <button
      v-show="!isCreating"
      class="ui basic button icon"
      @click="openForm"
    >
      <i class="plus icon" />
    </button>
    <div
      v-show="isCreating"
      class="ui centered card"
    >
      <div class="content">
        <div class="ui form">
          <div class="field">
            <label>Title</label>
            <input
              ref="title"
              v-model="titleText"
              type="text"
              defaultValue
            >
          </div>
          <div class="ui two button attached buttons">
            <button
              class="ui basic blue button"
              @click="sendForm"
            >
              Create
            </button>
            <button
              class="ui basic red button"
              @click="closeForm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titleText: "",
      isCreating: false
    };
  },
  methods: {
    openForm() {
      this.isCreating = true;
    },
    closeForm() {
      this.isCreating = false;
    },
    sendForm() {
      if (this.titleText.length > 0) {
        const title = this.titleText;
        this.$store.dispatch("createTodo", {
          title,
          done: false
        });
        this.titleText = "";
      }
      this.isCreating = false;
    }
  }
};
</script>
