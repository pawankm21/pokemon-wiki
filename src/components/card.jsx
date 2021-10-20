import React, { useEffect, useState } from "react";

export const Card = ({ name, url }) => {
  async function getData(url) {
    if (url) {
      const data = await fetch(url);
      const jsonData = await data.json();
      setAbilities(jsonData.abilities)
      setHeight(jsonData.height)
      setSpecies(jsonData.species.name)
      setImage(jsonData.sprites.other.dream_world.front_default)
      setTypes(jsonData.types)
      setWeight(jsonData.weight)
      setForms(jsonData.forms)
  
    }
  }
  const [abilities, setAbilities] = useState([])
  const [forms, setForms] = useState([])
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [types, setTypes] = useState([])
  const [species, setSpecies] = useState("")
  const [image, setImage] = useState("")
  useEffect(() => {
    getData(url);
  }, []);
  return (
    <button className="items-center bg-red-100 p-3 focus:outline-none focus:ring-4 focus:ring-red-500 m-4 rounded-lg">
      <h1 className=" capitalize ">{name}</h1>
      <img className="h-24" src={image} alt=""/>
    </button>
  );
};
