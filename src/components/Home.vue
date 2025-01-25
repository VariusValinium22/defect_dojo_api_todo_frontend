<template>
  <div>
    <h1 className="todos_title">Marty's Todo List</h1>

    <!-- Form to add a new todo -->
    <form @submit.prevent="addTodo">
      <input
        className="form_input"
        v-model="newTodo"
        placeholder="Add a new todo"
        required
        autofocus
      />
      <button className="add_button" type="submit">Add</button>
    </form>

    <!-- List of todos -->
    <ul className="todos_list">
      <li className="todos_item" v-for="todo in todosStore.todos" :key="todo.id">
        {{ todo.text }}
        <button className="delete_button" @click="deleteTodo(todo.id)">
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { useTodosStore } from "../store/todos"; // Import Pinia store
import { ref, onMounted } from "vue"; // Vue Composition API methods

export default {
  setup() {
    const todosStore = useTodosStore(); // Access Pinia store
    const newTodo = ref(""); // Reactive state for the new todo input

    // When the component is mounted, fetch todos
    onMounted(() => {
      todosStore.fetchTodos(); // Load todos from the backend
    });

    // Add a new todo
    const addTodo = async () => {
      if (newTodo.value.trim()) {
        await todosStore.addTodo({ text: newTodo.value });
        newTodo.value = ""; // Clear the input after adding
      }
    };

    // DELETE a todo
    const deleteTodo = async (id) => {
      await todosStore.removeTodo(id); // Call store action to delete the todo
    };

    // Return values for use in the template
    return { todosStore, newTodo, addTodo, deleteTodo };
  },
};
</script>

<style scoped>
/* Styles for the Home page */
.todos_title {
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  font-size: 40px;
  color: #42b983;
}

.form_input {
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  padding: 15px;
  font-size: 15px;
  margin-right: 10px;
}

.form_input::placeholder {
    font-size: 15px;
    font-family: "Comic Sans MS", "Comic Sans", cursive;
}

.add_button {
  padding: 10px 15px;
  font-size: 1em;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add_button:hover {
  background-color: #3fd4bb;
}

.todos_list {
  padding: 0;
}

.todos_item {
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #3a0c41;
  margin-bottom: 5px;
  border-radius: 5px;
  gap: 10px;
}

.delete_button {
  background-color: #ff4d4d;
  padding: 5px 10px;
  font-size: 0.9em;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}

.delete_button:hover {
  background-color: #d43f3f;
}
</style>
