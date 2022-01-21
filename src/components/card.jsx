import React from "react";
import pokeball from "./images/pokeball.png";
import Modal from "./mymodal";
import useData from "./useData";
export default function Card({ name, url }) {
  const [
    { abilities, weight, height, types, image, moves, show, forms },
    { setShow,setError,},
  ] = useData(url);
  return (
    <>
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
        setError={setError}
      />
      <button
        onClick={() => {
          setShow(true);
        }}
        className="items-center bg-red-100 p-1 m-3 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:scale-110 dark:bg-red-900  "
      >
        <h1 className="dark:text-gray-100 capitalize lg:p-1 sm:text-xs lg:text-xl truncate font-bold text-red-900  ">
          <img src={pokeball} className="h-5 inline mr-2" alt="" />
          {name}
        </h1>
        <img className="h-24 float-left" src={image} alt="" />
      </button>
    </>
  );
}
