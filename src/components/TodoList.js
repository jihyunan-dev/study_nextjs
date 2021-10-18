import React from "react";
import todoStore from "../store/TodoStore";

const TodoList = () => {
  return (
    <React.Fragment>
      <h2>오늘 할 일</h2>
      <ul>
        {todoStore.todoList.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default TodoList;
