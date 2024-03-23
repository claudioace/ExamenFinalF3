import React from 'react'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDentistById } from "../api/dentists";
import { useGlobalStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams();
  const [dentistSelected, setDentistSelected] = useState({});
  const {state, dispatch} = useGlobalStates()
  console.log( state )
  
  useEffect(() => {
 
    const getData = async()=>{
      let dentistData = await getDentistById(id);
      setDentistSelected(dentistData);
    }
    getData()

  }, [id]);

  return (
    <><Navbar/>
      <h2>Nombre: {dentistSelected.name} </h2>
      <h3>e-mail: {dentistSelected.email}</h3>
      <p>Teléfono: {phone}</p>
      <p>Sitio Web: {website}</p>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <Footer/>
    </>
  )
}

export default Detail