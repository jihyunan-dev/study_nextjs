import { observer } from "mobx-react";
import React from "react";
import todoStore from "../store/TodoStore";

const TodoList = observer(() => {
  return (
    <React.Fragment>
      <h2>오늘 할 일</h2>
      <ul>
        {todoStore.todoList.map((item) => (
          <li
            key={item.id}
            style={{ display: "flex", alignItems: "center", gap: "15px" }}
          >
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
});

export default TodoList;
