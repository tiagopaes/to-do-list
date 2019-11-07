import Vue from "vue";
import Vuex from "vuex";
import StorageService from "@/services/StorageService";
import _ from "lodash";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: StorageService.get("todos") || [
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
  },
  mutations: {
    completeTodo(state, todo) {
      const index = _.findIndex(state.todos, todo);
      todo.done = !todo.done;
      state.todos.splice(index, 1, todo);
      StorageService.set("todos", state.todos);
    },
    deleteTodo(state, todo) {
      const filtered = _.filter(state.todos, item => item.title !== todo.title);
      state.todos = filtered;
      StorageService.set("todos", state.todos);
    },
    updateTodo(state, payload) {
      const index = _.findIndex(state.todos, payload.todo);
      payload.todo.title = payload.newTitle;
      state.todos.splice(index, 1, payload.todo);
      StorageService.set("todos", state.todos);
    },
    createTodo(state, todo) {
      state.todos.push(todo);
      StorageService.set("todos", state.todos);
    }
  },
  actions: {
    completeTodo({ commit }, todo) {
      commit("completeTodo", todo);
    },
    deleteTodo({ commit }, todo) {
      commit("deleteTodo", todo);
    },
    updateTodo({ commit }, payload) {
      commit("updateTodo", payload);
    },
    createTodo({ commit }, todo) {
      commit("createTodo", todo);
    }
  }
});
