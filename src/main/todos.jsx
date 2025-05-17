import Button from "../Components/Buttons";
import DisplayTodos from "../Components/displayTodos";
import { closestCorners, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import { AppContext } from "../Context/AppContext";
import { useContext } from "react";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";




function Todos() {
  const {todos, setTodos} = useContext(AppContext)

  function getTodoPos(id){
    return todos.findIndex(todo => todo.id === id)
  }


  function handleDragEnd(event){
    const {active, over} = event
    console.log('Drag End Event:', event);

    if(!over || active.id === over.id) return

    setTodos(todos =>{
      const originalPos = getTodoPos(active.id)
      const newPos = getTodoPos(over.id)

      return arrayMove(todos, originalPos, newPos)
    })
  }
 
 const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      }
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      }
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  return (
    <main className="w-[500px] max-sm:w-full mx-auto mt-[-40px] max-sm:px-6 relative">
      <div className=" bg-[#e4e5f1] dark:bg-[#393a4c] max-h-100 w-full rounded overflow-auto">
        <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}
        sensors={sensors}>
          <DisplayTodos />
        </DndContext>
        <Button />
      </div>
    </main>
  );
}

export default Todos;
