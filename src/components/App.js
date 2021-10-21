import  Card  from "./card";
import  Search  from "./search";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(9);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .then((response) => response.json())
      .then((allpokemon) => {
        setResult(allpokemon.results);
      
        setLoading(false);
      });
  }, [limit, offset]);
  return (
    <div className="App  ">
      <div className=" text-white flex justify-center mb-10">
        {" "}
        <button
          onClick={() => {
            setLimit(limit + 1);
          }}
        ></button>
      </div>

      <div className="flex flex-col h-100 my-auto items-center">
        <a
          className="block self-center
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
        <p className=" pl-4 pr-4 pt-6 w-3/4 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          voluptatibus, nisi, esse qui placeat nobis nihil voluptate veniam a
          consequuntur saepe recusandae, nostrum et vitae blanditiis facere
          quibusdam corporis obcaecati?
        </p>
        <div className="grid grid-cols-3 m-3 p-2">
          <img
            className="h-24 m-5 "
            src={process.env.PUBLIC_URL + "/images/turtle.png"}
            alt=""
          />
          <img
            className="h-24 m-5"
            src={process.env.PUBLIC_URL + "/images/mouse.png"}
            alt=""
          />
          <img
            className="h-24 m-5 "
            src={process.env.PUBLIC_URL + "/images/dragon.png"}
            alt=""
          />
        </div>
        <Search />
      </div>
      <div className="grid grid-cols-3 m-12  content-center ">
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
    </div>
  );
}

export default App;
