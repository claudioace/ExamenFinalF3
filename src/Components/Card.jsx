import React, { useEffect, useState } from "react";
import  {Link} from "react-router-dom";
import { useGlobalStates } from './utils/global.context';
import { getDentistById } from "../api/dentists";

const Card = ({ name, username, id }) => {
  const [dentistSelected, setDentistSelected] = useState({});
  const {state, dispatch} = useGlobalStates()

  useEffect(() => {
 
    const getData = async()=>{
      let dentistData = await getDentistById(id);
      setDentistSelected(dentistData);
    }
    getData()

  }, [id]);

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <h3>{name}</h3>
        <h4>{`${username},id: ${id}`}</h4>
        <Link to={`/detail/${id}`}><img 
          src="/images/doctor.jpg"
          alt="foto"
          style={
            {width: "100%",
             height: 200,
              objectFit: "cover" 
            }
          }
          /></Link>

        <button onClick={()=> dispatch( {type:"ADD_FAVORITES", payload: dentistSelected })} className="favButton">
          ⭐
        </button>
    </div>
  );
};

export default Card;
