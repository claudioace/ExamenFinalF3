import React, { useState } from 'react'
import Form from '../Components/Form'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useGlobalStates } from '../Components/utils/global.context';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const {state, dispatch} = useGlobalStates()

  const [dentists, setDentists] = useState([]);
  return (
    
    <div className={state.theme}> 
      <Navbar/>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact