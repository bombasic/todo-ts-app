import { useState } from "react";
import TodoList from "./components/TodoList";

// * https://www.youtube.com/watch?v=sOP7eOPXPjQ vid tut

const dummyData: Todo[] = [
  { text: "task 1", complete: false },
  { text: "another task", complete: false },
];

function App() {
  const [todos, setTodos] = useState(dummyData);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
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
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </>
  );
}

export default App;
