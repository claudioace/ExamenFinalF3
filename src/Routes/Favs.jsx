import React, { useState } from "react";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useGlobalStates } from "../Components/utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state, dispatch} = useGlobalStates()

  const [dentists, setDentists] = useState([]);
  return (
    <div className={state.theme}>
      <Navbar/>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
      <Footer/>
    </div>
  );
};

export default Favs;
