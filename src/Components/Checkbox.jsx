import check from "../assets/icon-check.svg";

function Checkbox({ checked, setChecked, children, color }) {
  const checkedBackground = checked
    ? "bg-[linear-gradient(to_right,_hsl(192,_100%,_67%),_hsl(280,_87%,_65%))]"
    : "transparent";
  return (
    <div className="w-full flex gap-4 items-center">
      {/* accent to style the checkbox */}
      <div className="relative w-7 h-7 mb-1">
        {/* appearance-none to remove the default browser setting */}
        <input
          type="checkbox"
          className={`rounded-full w-7 h-7 appearance-none border-2 dark:border-[#777a92] border-[#d2d3db] ${checkedBackground} cursor-pointer `}
          checked={checked}
          onChange={setChecked}
        />
        <img
          src={check}
          alt=""
          className={`${checked ? "visible" : "invisible"} absolute top-2.5 left-2 pointer-events-none`}
        />
      </div>
      <p className={color}>{children}</p>
    </div>
  );
}

export default Checkbox;
