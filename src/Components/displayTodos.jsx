import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { MainContext } from "../Context/mainContext";
import Todo from "./Todo";

import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

function DisplayTodos() {
  const { todos } = useContext(AppContext);
  const { active, completed } = useContext(MainContext);


  return (
    <div className="max-h-80 overflow-y-auto">
      <SortableContext items={todos.map(todo => todo.id)} strategy={verticalListSortingStrategy}>
        {todos.map((todo) => {
          if (active && todo.completed) return
          if (completed && !todo.completed) return
          return <Todo task={todo} key={todo.id} id={todo.id} />}
        )}
      </SortableContext>
    </div>
  );
}

export default DisplayTodos;
