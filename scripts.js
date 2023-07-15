const app = Vue.createApp({
  data() {
    return {
      todos: [],
      todoInputted: "",
    };
  },
  methods: {
    submitTodo() {
      if (this.todos.length >= 5) {
        return alert("reached limit");
      }
      const obj = {
        id: Math.random(),
        todo: this.todoInputted,
      };

      this.todos.push(obj);
      this.todoInputted = "";
    },
    remove(id) {
      this.todos = this.todos.filter((el) => el.id !== id);
    },
  },
}).mount("#root");
