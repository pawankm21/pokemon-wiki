import { useState, useEffect } from "react";

const useData = (url) => {
  async function getData(url) {
    if (url) {
      fetch(url)
        .then((res) => {
          if (!res.ok) throw Error("Could not find the Pokemon 😟");
          return res.json();
        })
        .then((jsonData) => {
          setAbilities(jsonData.abilities);
          setHeight(jsonData.height);
          setImage(
            jsonData.sprites.other.dream_world.front_default !== null
              ? jsonData.sprites.other.dream_world.front_default
              : jsonData.sprites.front_default !== null
              ? jsonData.sprites.front_default
              : jsonData.sprites.other["official-artwork"].front_default
          );
          setTypes(jsonData.types);
          setWeight(jsonData.weight);
          setForms(jsonData.forms);
          setMoves(jsonData.moves);
          setName(jsonData.name);
          setLoading(false);
        })
        .catch((error) => {
          setAbilities([]);
          setHeight(0);
          setImage("");
          setTypes([]);
          setWeight(0);
          setForms([]);
          setMoves([]);
          setName("");
        });
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
  const [name, setName] = useState("");
  const [error, setError] = useState(undefined);
  useEffect(() => {
    getData(url);
    if (name)
    {
      setError(undefined);
    }
    else {
      setError("Could not find the Pokemon 😟");
    }
  }, [url,name]);
  const ret = {
    abilities: abilities,
    weight: weight,
    height: height,
    types: types,
    image: image,
    moves: moves,
    show: show,
    forms: forms,
    name: name,
    error: error,

  };
  const setRet = {
    setAbilities: setAbilities,
    setWeight: setWeight,
    setHeight: setHeight,
    setTypes: setTypes,
    setImage: setImage,
    setMoves: setMoves,
    setShow: setShow,
    setForms: setForms,
    setName: setName,
    setError: setError,
  };
  return [ret, setRet];
};

export default useData;
