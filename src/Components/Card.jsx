import React from "react";
import  {Link} from "react-router-dom";

const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <h3>{name}</h3>
        <h4>{`${username},id: ${id}`}</h4>
        <Link to={`/details/${id}`}><img 
          src="/images/doctor.jpg"
          alt="foto"
          style={
            {width: "100%",
             height: 200,
              objectFit: "cover" 
            }
          }
          /></Link>
        <button onClick={addFav} className="favButton">
          <img src="/favicon.ico" alt="icono Favoritos" /><p>Marcar Favorito</p></button>
    </div>
  );
};

export default Card;
