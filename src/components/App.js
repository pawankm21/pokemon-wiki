import Card from "./card";
import Search from "./search";
import "./App.css";
import { useEffect, useState } from "react";
import useDarkMode from "../useDark";
import MyToggle from "./toggle";
function App() {
  const [dark, setDark] = useDarkMode();
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(15);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .then((response) => response.json())
      .then((allpokemon) => {
        setResult(allpokemon.results);

        setLoading(false);
      });
  }, [limit, offset]);
  return (
    <div className={"dark:bg-gray-900 dark:text-gray-100"}>
      <div className=" text-white flex justify-center mb-10"> </div>

      <div className="flex flex-col h-100 my-auto items-center">
        <div className="grid grid-cols-6  p-2 absolute top-10 z-0">
          <img
            className="col-start-1 lg:h-48"
            src={process.env.PUBLIC_URL + "/images/turtle.png"}
            alt=""
          />

          <img
            className="col-end-7 lg:h-48"
            src={process.env.PUBLIC_URL + "/images/dragon.png"}
            alt=""
          />
        </div>
        <a
          className="block self-center z-10
          w-1/2
        pointer-events-none
        mt-12
        mb-3
        ml-3
        mr-3
        "
          href="https://fontmeme.com/pokemon-font/"
        >
          <img
            src="https://fontmeme.com/permalink/211021/74c529ba8b8fbb1b745ad02e1602b5f8.png"
            alt="pokemon-font"
            border="0"
          />
        </a>
        <p className=" pl-4 pr-4 pt-6 w-3/4 text-center z-10">
          A Simple Pokemon Search tool made with ReactJs.
        </p>
        <div className=" grid grid-cols-2 gap-4 mt-5">
          <a href="https://github.com/pawankm21/pokemon-wiki">
            {" "}
            <img
              className="h-8"
              alt="GitHub Org's stars"
              src="https://img.shields.io/github/stars/pawankm21/pokemon-wiki?style=social"
            />
          </a>
          <a href="https://github.com/pawankm21/pokemon-wiki">
            {" "}
            <img
              className="h-8"
              alt="GitHub forks"
              src="https://img.shields.io/github/forks/pawankm21/pokemon-wiki?style=social"
            />
          </a>
        </div>
        <div className="mt-10 mb-3">
          <MyToggle dark={dark} setDark={setDark} />
        </div>
        <p>Switch to your preferred theme.</p>
        <Search />
        <div>
          <label for="limit">Pokemons per page :</label>
          <select name="limit" id="limit" className="focus:ring-4 ml-3 ring-red-400 outline-none p-1 rounded-xl bg-red-500 text-white option:hover:bg-white" onChange={(e) => {
            setLimit(Number(e.target.value));
          }} >
            <option value={15}>15</option>
            <option  value={30}>30</option>
            <option value={60}>60</option>
            <option value={90}>90</option>
            <option value={120}>120</option>
     
          </select>

        </div>
      </div>
      <div className="grid lg:grid-cols-3 m-12 xl:grid-cols-4 md:grid-cols-2 content-center ">
        {loading ? (
          <></>
        ) : (
          result.map((pokemon, idx) => {
            return <Card key={idx} name={pokemon.name} url={pokemon.url} />;
          })
        )}
      </div>
      <div className=" text-white flex justify-center mb-10">
        <button
          onClick={() => {
            setOffset(Math.max(0, offset - limit));
          }}
          className="shadow-xl  rounded-lg focus:ring-4 focus:ring-red-300 focus:outline-none bg-red-500 mr-5 pl-5 pr-5 p-2"
        >
          prev
        </button>
        <button className="shadow-xl  rounded-lg focus:ring-4 focus:ring-red-300 focus:outline-none bg-red-700  p-2 pointer-events-none w-20">
          {Math.floor(offset / limit)}
        </button>
        <button
          onClick={() => {
            setOffset(offset + limit);
          }}
          className=" shadow-xl rounded-lg focus:ring-4 focus:ring-red-300 focus:outline-none bg-red-500 ml-5 pl-4 pr-5 p-2"
        >
          next
        </button>
      </div>
      <footer className="  w-full h-48 dark:bg-black bg-red-900 text-white text-center p-4 overflow-hidden">
        <h1 className=" font-xl mt-10 transition duration-700 ease-in-out transform hover:scale-110 text-white">
          Crafted with passion <span className=" animate-ping  ">{"❤️"}</span>
          <a
            href="https://github.com/pawankm21"
            className="text-red-100 font-bold dark:text-red-300"
          >
            @pawankm21
          </a>
        </h1>
      </footer>
    </div>
  );
}

export default App;
