import { useContext, useEffect, useState } from "react";
import darkIcon from "../assets/icon-moon.svg";
import sunIcon from "../assets/icon-sun.svg";
import darkImage from "../assets/bg-desktop-dark.jpg";
import lightImage from "../assets/bg-desktop-light.jpg";
import Checkbox from "../Components/Checkbox";
import Form from "../Components/Form";
import { AppContext } from "../Context/AppContext";

function Header() {
  const { checked, setChecked } = useContext(AppContext);
  const [dark, setDark] = useState(() => {
    return JSON.parse(localStorage.getItem("theme")) || false;
  });

  useEffect(() => {
    const body = document.body;
    const backgroundColor = dark
      ? "bg-[hsl(235,21%,11%)] dark"
      : "bg-[hsl(0,0%,98%)]";
    body.className = `${backgroundColor} pb-3`;
    localStorage.setItem("theme", JSON.stringify(dark));
  }, [dark]);

  const background = dark ? darkImage : lightImage;
  const iconAltText = dark ? "to white background" : "to dark background ";
  const iconImage = dark ? sunIcon : darkIcon;
  const paddingCheck = checked ? "pt-18" : "pt-30";

  return (
    <header
      // add background image using style
      style={{ backgroundImage: `url(${background})` }}
      className="h-80 bg-no-repeat w-full bg-cover"
    >
      <div
        className={`flex flex-col w-[500px]  justify-between text-white mx-auto  items-center max-sm:w-full max-sm:px-6 ${paddingCheck}`}
      >
        <div className="flex justify-between mx-auto items-center w-full">
          <h1 className="font-bold text-4xl tracking-[9px]">TODO</h1>
          <button
            onClick={() => setDark(!dark)}
            className="cursor-pointer p-2 rounded-full"
          >
            <img src={iconImage} alt={iconAltText} className="w-5" />
          </button>
        </div>
        <div className="w-full dark:bg-[#393a4c] p-3 rounded bg-[#e4e5f1] mt-10">
          <Checkbox
            checked={checked}
            setChecked={() => setChecked(!checked)}
            color={"dark:text-[#777a92] text-[#777a92]"}
          >
            Create a new todo...
          </Checkbox>
          <Form />
        </div>
      </div>
    </header>
  );
}

export default Header;
