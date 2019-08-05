import { action } from "easy-peasy";

export default {
  todos: [
    {
      id: 1,
      title: "take out trash",
      completed: true
    },
    {
      id: 2,
      title: "Pick up kids from school",
      completed: false
    },
    {
      id: 3,
      title: "Dinner with boss",
      completed: false
    }
  ],
  // Actions
  toggle: action((state, id) => {
    state.todos.map(todo => {
      if (todo.id == id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  })
};
