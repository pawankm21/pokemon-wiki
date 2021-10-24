import React from "react";
import { Switch } from "@headlessui/react";
import { ReactComponent as Sun } from "./images/icons/fire.svg";
import {ReactComponent as Moon } from "./images/icons/dark.svg";
export default function MyToggle({dark,setDark}) {
  

  return (
    <Switch
      checked={dark}
      onChange={setDark}
      className={`${
        dark ? "bg-red-900" : "bg-red-500"
      } relative inline-flex items-center h-7 rounded-full w-12`}
    >
      <span className="sr-only">Enable dark mode</span>
      <span
        className={`${
          dark ? "translate-x-6" : "translate-x-1"
        } inline-block w-5 h-5 transform bg-yellow-500 dark:bg-black rounded-full relative justify-center text-xs `}
      >
        <div className=" text-yellow-200 text-left  flex">
          {dark ? (
            <Moon className="fill-current h-5  m-0 p-0" />
          ) : (
            <Sun className="fill-current h-5  m-0 p-0" />
          )}
        </div>
      </span>
    </Switch>
  );
}
