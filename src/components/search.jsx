import React, { useState } from "react";
import useData from "./useData";
import Modal from "./modal";

export default function Search(props) {
  const [val, setVal] = useState("1");
  const [urlName, setUrlName] = useState();
  const [
    {
      abilities,
      weight,
      height,
      types,
      image,
      moves,
      forms,
      name,
      error,
      show,
    },
    { setError, setShow },
  ] = useData(`https://pokeapi.co/api/v2/pokemon/${urlName}/`);

  return (
    <>
      {show && name ? (
        <Modal
          showModal={show}
          setShowModal={setShow}
          weight={weight}
          height={height}
          types={types}
          forms={forms}
          name={name}
          image={image}
          abilities={abilities}
          moves={moves}
          error={error}
          setError={setError}
        />
      ) : (
        <></>
      )}
      <div className="p-8  w-full flex justify-center ">
        <div className="flex  rounded-full shadow transition duration-500 ease-in-out hover:shadow-lg lg:text-base text-sm sm:w-full lg:w-1/2 bg-white dark:bg-gray-800 dark:border-black">
          <input
            className="rounded-l-full w-full py-4 px-6 text-gray-900 leading-tight focus:outline-none focus:ring-red-400 focus:ring-4 transition dark:bg-gray-800 dark:border-black duration-500 ease-in-out   "
            id="search"
            type="text"
            placeholder="Search your favourite pokemon ...."
            name="search"
            onChange={(e) => {
              setVal(e.target.value.toLowerCase());
            }}
          />
          <div className="p-4 ">
            <button
              onClick={(e) => {
                e.preventDefault();
                setUrlName(val);
                setShow(true);
              }}
              className="bg-black text-white rounded-full p-2  transition duration-500 ease-in-out hover:bg-red-600 focus:outline-none w-12 h-12 flex items-center justify-center "
            >
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
    </>
  );
}
