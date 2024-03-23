import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { render } from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import Favs from './Routes/Favs'
import Detail from './Routes/Detail'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/favs' element={<Favs/>} />
      <Route path='/detail' element={<Detail/>} />
    </Routes>
    
   </BrowserRouter>,
  );

