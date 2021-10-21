import React from "react";
import { Switch } from "@headlessui/react";

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
        } inline-block w-5 h-5 transform bg-white rounded-full relative justify-center text-xs `}
      >
        <span className="inline-block align-baseline">
          {dark ? "🌙" : "☀️"}
        </span>
      </span>
    </Switch>
  );
}
