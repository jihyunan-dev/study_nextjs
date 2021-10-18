import React from "react";
import todoStore from "../store/TodoStore";

const TodoForm = () => {
  const [newTodo, setNewTodo] = React.useState({ title: "", description: "" });

  const handleChange = (e) => {
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
  };

  const submitTodo = (e) => {
    e.preventDefault();
    todoStore.add({ ...newTodo, id: Date.now() });
    setNewTodo({ title: "", description: "" });
  };

  return (
    <form onSubmit={submitTodo}>
      <input
        type="text"
        placeholder="오늘 할 일을 적어주세요."
        name="title"
        onChange={handleChange}
        value={newTodo.title}
      />
      <input
        type="text"
        placeholder="할 일에 대한 설명을 적어주세요."
        name="description"
        onChange={handleChange}
        value={newTodo.description}
      />
      <button type="submit">추가하기</button>
    </form>
  );
};

export default TodoForm;
