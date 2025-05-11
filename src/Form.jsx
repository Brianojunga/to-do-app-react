import { useContext } from "react";
import { AppContext } from "./Context/AppContext";

function Form() {
  const { todos, value, setValue, setTodos, checked, setChecked } =
    useContext(AppContext);

  const gradient =
    "bg-[linear-gradient(to_right,_hsl(192,_100%,_67%),_hsl(280,_87%,_65%))]";
  const display = checked ? "flex" : "hidden";

  function submit(e) {
    e.preventDefault();
    if (value === "") {
      setChecked(false);
      return;
    }
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), value: value, completed: false },
    ]);
    setChecked(false);
    setValue("");
  }

  return (
    <form
      action=""
      onSubmit={submit}
      className={`w-full items-center gap-8 my-2 ${display}`}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border-2 dark:border-[#777a92] border-[#d2d3db] rounded w-[80%] dark:text-[#e4e5f1] text-[#777a92] h-10 text-center"
      />
      <button
        type="submit"
        className={`text-[#e4e5f1] font-semibold py-1.5 px-8 text-[15px] rounded cursor-pointer ${gradient} max-sm:px-6`}
      >
        Add
      </button>
    </form>
  );
}

export default Form;
