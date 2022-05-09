import { useState } from "react";
import TodoListItem from "./components/todoListItem";

// * https://www.youtube.com/watch?v=sOP7eOPXPjQ vid tut

const dummyData: Todo[] = [
  { text: "task 1", complete: false },
  { text: "another task", complete: false },
];

function App() {
  const [todos, setTodos] = useState(dummyData);

  const toggleTodo: toggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <ul>
      <TodoListItem todo={todos[0]} toggleTodo={toggleTodo} />
      <TodoListItem todo={todos[1]} toggleTodo={toggleTodo} />
    </ul>
  );
}

export default App;
