import React from 'react';
import  {Link} from "react-router-dom";
import { useGlobalStates } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
const {state, dispatch} = useGlobalStates()
  return (
    <nav className={state.theme}>
      <img src="DH.ico" alt="" />
      <ul>
        <Link to="/home">Home</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/favs">Favs</Link>
      </ul>
      <button onClick={()=> dispatch( {type: "CHANGE_THEME"} ) }>Change theme</button>
    </nav>
  )
}

export default Navbar