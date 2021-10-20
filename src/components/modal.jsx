import React,{useState,useEffect} from "react";

export const Modal = ({name,species,abilities,forms,types,weight,height,image}) => {
 
   return (
     <div>
       <h1>{name}</h1>
       <p>{species}</p>
       <p></p>
       <ol>
         <h2>Abilities</h2>
         {abilities.map((obj) => {
           return <li>{obj.ability.name}</li>;
         })}
       </ol>

       <ol>
         <h2>Forms</h2>
         {forms.map((obj) => {
           return <li>{obj.name}</li>;
         })}
       </ol>
       <ol>
         <h2>Types</h2>
         {forms.map((obj) => {
           return <li>{obj.name}</li>;
         })}
       </ol>
     </div>
   );
};
