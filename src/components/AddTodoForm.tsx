import { useState, ChangeEvent, FormEvent } from "react";

interface Props {
  addTodo: AddTodo;
}

const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const submitHandler = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (newTodo.trim().length === 0) {
      return;
    }
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form>
      <input type="text" value={newTodo} onChange={changeHandler} />
      <button type="submit" onClick={submitHandler}>
        Add Todo
      </button>
    </form>
  );
};

export default AddTodoForm;
