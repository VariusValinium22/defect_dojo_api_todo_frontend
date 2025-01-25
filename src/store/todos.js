import { defineStore } from "pinia";
import apiClient from "../api/axios";

export const useTodosStore = defineStore("todos", {
  state: () => ({
    todos: [],
  }),
  actions: {
    // GET todos from the backend 
    async fetchTodos() {
      try {
        const response = await apiClient.get("/todos");
        this.todos = response.data; // Update state with fetched todos
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    },

    // PUSH a new todo to the backend and update the state
    async addTodo(todo) {
      try {
        const response = await apiClient.post("/todos", todo);
        this.todos.push(response.data); // Add the new todo to state
      } catch (error) {
        console.error("Error adding todo:", error);
      }
    },

    // DELETE a todo from the backend and update the state
    async removeTodo(id) {
      try {
        await apiClient.delete(`/todos/${id}`);
        this.todos = this.todos.filter((todo) => todo.id !== id); // Remove deleted todo from state
      } catch (error) {
        console.error("Error deleting todo:", error);
      }
    },
  },
});
