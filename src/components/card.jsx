import React from "react";
import pokeball from "./pokemon-4657023_960_720.png";
import Modal from "./modal";
import useData from "./useData";
export default function Card({ name, url }) {
  const [
    { abilities, weight, height, types, image, moves, show, forms },
    { setShow,setError },
  ] = useData(url);
  return (
    <>
      <button
        onClick={() => {
          setShow(true);
        }}
        className="items-center bg-red-100 p-1  m-3 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:scale-110"
      >
        <h1 className=" capitalize p-1 text-xl truncate font-bold text-red-900 ">
          <img src={pokeball} className="h-5 inline mr-2" alt="" />
          {name}
        </h1>
        <img className="h-24 float-left" src={image} alt="" />
      </button>
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
    </>
  );
}
