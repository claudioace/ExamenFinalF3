import { useEffect, useState } from "react";
import React from 'react'
import Card from '../Components/Card'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { getDentists } from "../api/dentists";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {


  const [dentists, setDentists] = useState([]);


  useEffect(() => {

    const getData = async ()=>{
      let dentistsData =  await getDentists()
      setDentists(dentistsData)
    }
    getData()
  

  }, []);

  return (
    <main className="" >
      <Navbar/>
          
      <h1>Home</h1>
      <div className='card-grid'>
      {dentists.map((dentist) => {
        return <Card name={dentist.name} username = {dentist.username} id={dentist.id} key={dentist.id} />;
      })}
      </div>
      <Footer/>
    </main>
  )
}

export default Home