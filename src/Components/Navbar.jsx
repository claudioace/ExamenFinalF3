import React from 'react';
import  {Link} from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      <img src="DH.ico" alt="" />
      <ul>
        <Link to="/home">Home</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/favs">Favs</Link>
      </ul>
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar