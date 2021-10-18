import { makeAutoObservable } from "mobx";

class TodoStore {
  todoList = [{ id: 1234, title: "잠자기" }];

  constructor() {
    makeAutoObservable(this);
  }

  add(todoObj) {
    this.todoList.push(todoObj);
  }

  remove(todoId) {
    this.todoList.filter((item) => item.id !== todoId);
  }

  modify(todoObj) {
    this.todoList.map((item) => (item.id === todoObj.id ? todoObj : item));
  }
}

const todoStore = new TodoStore();
export default todoStore;
