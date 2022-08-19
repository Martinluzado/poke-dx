/** @format */

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import TarjetaEntera from "./Componentes/TarjetaEntera/Tarjetaentera";
import PokemonInfo from "./tarjetasInfo/PokemonInfo";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            {" "}
          </Route>
          <Route
            path='/:PokemonNombre'
            element={<TarjetaEntera listaPokemones={PokemonInfo}/>}>
            {" "}
          </Route>
          <Route path="Home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
