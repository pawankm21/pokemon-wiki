import { Card } from "./card";
import { Search } from "./search";
import { Modal } from "./modal";
import './App.css'
function App() {
  return (
    <div className="App flex flex-col h-screen my-auto items-center ">
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
      <Card />
      <Modal />
    </div>
  );
}

export default App;
