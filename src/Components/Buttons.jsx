import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { MainContext } from "../Context/mainContext";

function Button() {
  const { todos, setTodos } = useContext(AppContext);
  const { active, setActive, completed, setCompleted } =
    useContext(MainContext);

  function clearCompleted() {
    const activeTodos = todos.filter((todo) => todo.completed !== true);
    setTodos(activeTodos);
  }

  return (
    <div className="flex justify-between text-[#777a92] py-5 px-3 sm:sticky sm:bottom-0">
      <p className="max-sm:sticky bottom-0">{todos.length} Items left </p>

      <div className="flex justify-between gap-4 max-sm:absolute top-[106%]  max-sm:w-[calc(100%-3rem)] font-bold items-center max-sm:left-[1.5rem] max-sm:py-5 max-sm:px-10 bg-[#e4e5f1] dark:bg-[#393a4c] rounded">
        <button
          onClick={() => {
            setActive(false);
            setCompleted(false);
          }}
          className={`${!active && !completed ? "text-[#3a7bfd]" : "text-inherit"} cursor-pointer`}
        >
          All
        </button>
        <button
          onClick={() => {
            setActive(true);
            setCompleted(false);
          }}
          className={`${active ? "text-[#3a7bfd]" : "text-inherit"} cursor-pointer`}
        >
          Active
        </button>
        <button
          onClick={() => {
            setCompleted(true);
            setActive(false);
          }}
          className={`${completed ? "text-[#3a7bfd]" : "text-inherit"} cursor-pointer`}
        >
          Completed
        </button>
      </div>
      <button
        onClick={() => clearCompleted()}
        className="cursor-pointer max-sm:sticky bottom-0"
      >
        Clear Completed
      </button>
    </div>
  );
}
export default Button;
