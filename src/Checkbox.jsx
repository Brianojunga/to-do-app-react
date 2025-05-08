import check from "./assets/icon-check.svg";

function Checkbox({ checked, setChecked, children }) {
  const checkedBackground = checked
    ? "bg-[linear-gradient(to_right,_hsl(192,_100%,_67%),_hsl(280,_87%,_65%))]"
    : "transparent";
  return (
    <div className="w-full flex gap-4 ">
      {/* accent to style the checkbox */}
      <div className="relative w-6 h-6">
        {/* appearance-none to remove the default browser setting */}
        <input
          type="checkbox"
          className={`rounded-full w-full h-full appearance-none border-2 dark:border-[#777a92] border-[#d2d3db] ${checkedBackground} cursor-pointer`}
          checked={checked}
          onChange={setChecked}
        />
        <img
          src={check}
          alt=""
          className={`${checked ? "visible" : "invisible"} absolute top-2 left-1.5 pointer-events-none`}
        />
      </div>
      <p className="dark:text-[#e4e5f1] text-[#777a92]">{children}</p>
    </div>
  );
}

export default Checkbox;
