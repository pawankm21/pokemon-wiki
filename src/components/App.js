import { Card } from "./card";
import { Search } from "./search";
import { Modal } from "./modal";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((response) => response.json())
      .then((allpokemon) => {
        setResult(allpokemon.results);
        console.log(allpokemon.results);
        setLoading(false);
      });
  }, []);
  return (
    <div className="App  ">
      <div className="flex flex-col h-100 my-auto items-center">
      <a
        className="block self-center
        pointer-events-none
        mt-12
        mb-3
        ml-3
        mr-3
        "
        href="https://fontmeme.com/pokemon-font/"
      >
        <img
          src="https://fontmeme.com/permalink/211019/72ea9d2ef45b2b66e797f2bf51698ebe.png"
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
      <div className="flex grid-flow-row-dense">
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
      <div className="grid grid-cols-3 m-12 items-center">
        {loading ? (
          <></>
        ) : (
          result.map((pokemon, idx) => {
            console.log(pokemon);
            return <Card key={idx} name={pokemon.name} url={pokemon.url} />;
          })
        )}
      </div>
      {/* <Modal /> */}
    </div>
  );
}

export default App;
