import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm() {
  const { addTodo } = useTodo();

  //todo, is the state of the text inside input bar
  const [todo, setTodo] = useState("");
  const inputHandler = (e) => {
    setTodo(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (todo) {
      addTodo(todo);
      setTodo("");
    }
  };

  return (
    <form className="flex" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Write Todo..."
        value={todo}
        onChange={inputHandler}
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
