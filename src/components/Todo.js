import { useState } from "react";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoText, setTodoText] = useState("");

  const handleSubmit = () => {
    const newTodo = {
      name: todoText,
      id: Date.now(),
      status: "pending",
    };

    setTodoList((prev) => {
      return [...prev, newTodo];
    });
    setTodoText("");
  };

  const handleComplete = (id) => {
    const newList = todoList.map((item) =>
      item.id === id ? { ...item, status: "Completed" } : item
    );
    setTodoList(newList);
  };

  const handleDelete = (id) => {
    const newList = todoList.filter((item) => item.id !== id);
    setTodoList(newList);
  };

  return (
    <div>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={() => handleSubmit()}>Add</button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.status}</td>
                <td>
                  <span onClick={() => handleComplete(item.id)}>✅</span>
                  <span onClick={() => handleDelete(item.id)}>❌</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
