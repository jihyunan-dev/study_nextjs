import { makeAutoObservable } from "mobx";

class TodoStore {
  todoList = [
    { id: 1234, title: "잠자기", description: "내일을 위해 푹 자자!" },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  add(todoObj) {
    this.todoList.push(todoObj);
  }

  remove(todoId) {
    const idx = this.todoList.findIndex((item) => item.id === todoId);
    this.todoList.splice(idx, 1);
  }

  update(todoObj) {
    this.todoList.map((item) => (item.id === todoObj.id ? todoObj : item));
  }
}

const todoStore = new TodoStore();
export default todoStore;
