/** @format */
import React from "react";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Boton from "../Componentes/Boton/Boton";
import Minitarjetas from "../Componentes/Minitarjetas/Minitarjetas";
import { PokemonInfo } from "../tarjetasInfo/PokemonInfo";
import "./Home.css";
export function Home() {
  const [listaPokemones, setListaPokemones] = useState(PokemonInfo);
  const [texto, setTexto] = useState("");
  const manejarInput = (e) => {
    setTexto(e.target.value);
  };

  return (
    <div>
      <header>
        <div className='PascalHeader'>
          <img
            className='Headerimg'
            src={"Images/Pokeball.png"}
            alt='Pokeballron'
          />
          <h1>Pokédex</h1>
        </div>

        <Boton
          listaPokemones={listaPokemones}
          setListaPokemones={setListaPokemones}
          pokemonInfo={PokemonInfo}
        />
      </header>

      <nav>
        <div className='PascalSearch'>
          <img class='imgLupa' src={"Images/Lupa.png"} alt='Lupa' />
          <input
            className='Imputheader'
            type='text'
            placeholder='Search...'
            onChange={manejarInput}
          />
        </div>
      </nav>
      <div>
        <Minitarjetas texto={texto} listaPokemones={listaPokemones} />
      </div>
      <BrowserRouter />
      
    </div>
  )
}
