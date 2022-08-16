/** @format */
import { useState } from "react";
import "../../Home/Home.css";

const Boton = ({ listaPokemones, setListaPokemones, pokemonInfo }) => {
  const [bandera, setBandera] = useState(true);
  const manejarBoton = () => {
    if (bandera) {
      const sorted1 = [...listaPokemones].sort(
        (a, b) => Number(a.Numero.slice(1)) - Number(b.Numero.slice(1))
      );
      setListaPokemones(sorted1);
      setBandera(!bandera);
    } else {
      setListaPokemones(pokemonInfo);
      setBandera(!bandera);
    }
  };

  return (
    <button className='btn-arrow-filter' onClick={manejarBoton}>
      <p>#↓</p>
    </button>
  );
};

export default Boton;
