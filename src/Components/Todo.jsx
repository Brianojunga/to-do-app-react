import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import cross from "../assets/icon-cross.svg";
import Checkbox from "./Checkbox";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function Todo({ task, id }) {
  const { todos, setTodos } = useContext(AppContext);
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({id : id});

  function setCheckedTodo(id) {
    const changeTodoStatus = todos.map((todo) => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });
    setTodos(changeTodoStatus);
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const style = {
    transition, 
    transform : CSS.Transform.toString(transform),
    cursor : "grab",
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 10 : 1
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      key={task.id}
      className="py-2 border-b-2 border-[#777a92]/30 [touch-action:none]"
    >
      <div  className="flex items-center justify-between p-3">
        <Checkbox
          checked={task.completed}
          setChecked={() => setCheckedTodo(task.id)}
          color={"dark:text-[#e4e5f1] text-[#777a92]"}
        >
          {task.completed ? (
            <del className="dark:text-[#777a92]">{task.value}</del>
          ) : (
            task.value
          )}
        </Checkbox>
        <button
          className="w-5 h-5 cursor-pointer"
          onClick={() => deleteTodo(task.id)}
        >
          <img src={cross} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Todo;
