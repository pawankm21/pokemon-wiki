import React from "react";

export const Search = (props) => {
  // const [val, setVal] = useState();
  return (
    <div class="p-8  w-full flex justify-center">
      <div class="flex  rounded-full shadow transition duration-500 ease-in-out hover:shadow-lg  w-1/2 bg-white">
        <input
          class="rounded-l-full w-full py-4 px-6 text-gray-900 leading-tight focus:outline-none focus:ring-red-400 focus:ring-4 transition duration-500 ease-in-out"
          id="search"
          type="text"
          placeholder="Search"
        />
        <div class="p-4">
          <button class="bg-black text-white rounded-full p-2 hover:bg-red-600 focus:outline-none w-12 h-12 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
