import React from "react";

export default function Modal({
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
  return (
    <>
      {showModal&&name ? (
        <>
          <div className="justify-center items-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto lg:max-w-xl ">
              {/*content*/}

              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="capitalize flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="  lg:text-3xl font-semibold">
                    {error ? "Not Found 😢" : name}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}{" "}
                <div className="capitalize relative p-6 flex-auto">
                  {error ? (
                    "The Pokemon you are looking for is not available😓"
                  ) : (
                    <>
                      <img className="float-right h-48 " src={image} alt="" />
                      <section className=" my-4 text-gray-900 text-lg font-bold leading-relaxed">
                        <p className="mr-5">
                          Weight:{" "}
                          <span className="font-normal text-xl text-gray-700">
                            {weight}
                          </span>
                        </p>
                        <p>
                          Height:{" "}
                          <span className="font-normal text-xl text-gray-700">
                            {height}
                          </span>
                        </p>
                        <h1>Abilities</h1>

                        {abilities.map((ob, idx) => {
                          return (
                            <li
                              className="font-normal text-base text-gray-700"
                              key={idx}
                            >
                              {ob.ability.name}
                            </li>
                          );
                        })}

                        <h1>Form(s)</h1>
                        {forms.map((ob, idx) => {
                          return (
                            <li
                              className="font-normal text-base text-gray-700"
                              key={idx}
                            >
                              {ob.name}
                            </li>
                          );
                        })}
                        <h1>Type(s)</h1>
                        {types.map((ob, idx) => {
                          return (
                            <li
                              className="font-normal text-base text-gray-700"
                              key={idx}
                            >
                              {ob.type.name}
                            </li>
                          );
                        })}
                        <h1>Moves</h1>
                        <p className="font-normal  text-sm text-gray-700 ">
                          {moves.map((m, idx) => {
                            return <span key={idx}>{m.move.name}, </span>;
                          })}
                          .
                        </p>
                      </section>
                    </>
                  )}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-red-600 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setError(undefined);
                      setShowModal(false);
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
