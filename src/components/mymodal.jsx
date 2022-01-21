import React, { useState, useEffect } from "react";
import "./modal.css";
import {  XCircleIcon } from "@heroicons/react/solid"
import ReactLoading from "react-loading";

function classNames(...classes)
{
  return classes.join(" ").replace(/\s+/g, " ").trim();
}
function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("./images/icons", false, /\.(png|jpe?g|svg)$/)
);
export default function MyModal({
  showModal,
  setShowModal,
  name,
  abilities,
  forms,
  weight,
  height,
  image,
  types,
  moves,
  error,
  setError,
}) {
  
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (showModal)
    {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
    else {
      setLoading(true);
    }
  },[showModal]);
  return (
    <>
      {showModal && !error? <>
        <div className="justify-center items-center  overflow-x-hidden  overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto lg:max-w-2xl ">
            {/*content*/}

            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none  dark:bg-red-900">
              {/*header*/}
              <div className="capitalize flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t ">
                <h3 className="  text-3xl font-semibold">
                  {loading ? (
                    <ReactLoading
                      type={"bars"}
                      color={"#FF605E"}
                      height={20}
                      width={20}
                    />
                  ) : (
                    name
                  )}
                </h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                    <XCircleIcon />
                  </span>
                </button>
              </div>

              <div className="capitalize relative  grid justify-items-stretch">
                {loading? (
                  <div className="w-full h-full p-12">
                    <ReactLoading
                      className="m-auto w-36 h-36"
                      type={"spin"}
                      color={"#FF605E"}
                      height={20}
                      width={20}
                    />
                  </div>
                ) : (
                  <>
                    <img
                      className={classNames("justify-self-center h-48  mt-4",loading?"hidden":"")}
                      src={image}
                      alt=""
                    />
                    <section className="dark:text-gray-50 p-6 my-4 text-gray-900 text-lg font-bold leading-relaxed">
                      <div className="grid grid-cols-2 gap-4 ">
                        <p className="mr-5 ">
                          Weight:{" "}
                          <span className="font-normal text-xl text-gray-700 dark:text-gray-300">
                            {weight / 10} Kg
                          </span>
                        </p>
                        <p>
                          Height:{" "}
                          <span className="font-normal text-xl text-gray-700 dark:text-gray-300">
                            {height / 10} Meters
                          </span>
                        </p>
                        <div>
                          <h1>Abilities</h1>

                          {abilities.map((ob, idx) => {
                            return (
                              <li
                                className="font-normal text-base text-gray-700 dark:text-gray-300"
                                key={idx}
                              >
                                {ob.ability.name}
                              </li>
                            );
                          })}
                        </div>
                        <div>
                          <h1>Form(s)</h1>
                          {forms.map((ob, idx) => {
                            return (
                              <li
                                className="font-normal text-base text-gray-700 dark:text-gray-300"
                                key={idx}
                              >
                                {ob.name}
                              </li>
                            );
                          })}
                        </div>

                        <div className="grid grid-cols-2 w-100">
                          <h1 className="col-span-2">Type(s)</h1>
                          {types.map((ob, idx) => {
                            return (
                              <div
                                className="font-normal text-base text-gray-700 dark:text-gray-300 text-center "
                                key={idx}
                              >
                                <div
                                  className={`${ob.type.name} icon ml-7 m-4 w-1/2 h-auto`}
                                >
                                  <img
                                    src={
                                      images[ob.type.name + ".svg"].default
                                    }
                                    alt={ob.type.name}
                                  />
                                </div>

                                {ob.type.name}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <h1 className="w-1/2 py-2 mx-auto text-center text-2xl  font-bold">
                        Moves
                      </h1>

                      <div
                        className="grid lg:grid-cols-3 p-2 bg-red-900 m-0
                        dark:bg-gray-900 sm:grid-cols-2 rounded-lg "
                      >
                        {moves.map((m, idx) => {
                          return (
                            <li
                              className=" font-normal lg:text-sm text-xs
                               text-white  dark:text-gray-300"
                              key={idx}
                            >
                              {m.move.name}
                            </li>
                          );
                        })}
                      </div>
                    </section>
                  </>
                )}
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="bg-emerald-500 text-red-600 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 dark:bg-gray-900"
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-gray-900"></div>
      </> :null}
    </>
    
  );
}
