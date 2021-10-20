import React, { useEffect, useState } from "react";
import pokeball from "./pokemon-4657023_960_720.png";
import Modal from "./modal";
export const Card = ({ name, url }) => {
  async function getData(url) {
    if (url) {
      const data = await fetch(url);
      const jsonData = await data.json();
      setAbilities(jsonData.abilities);
      setHeight(jsonData.height);
      setImage(jsonData.sprites.other.dream_world.front_default);
      setTypes(jsonData.types);
      setWeight(jsonData.weight);
      setForms(jsonData.forms);
      setMoves(jsonData.moves);
    }
  }
  const [abilities, setAbilities] = useState([]);
  const [forms, setForms] = useState([]);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [types, setTypes] = useState([]);
  const [image, setImage] = useState("");
  const [moves, setMoves] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    getData(url);
  }, [url]);
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
      />
    </>
  );
};
