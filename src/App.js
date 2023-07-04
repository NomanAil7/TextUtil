import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import TextFrom from './component/TextFrom';
import About from './component/About';
import { useState } from 'react';
import Alert from './component/Alert';
import React from "react";
import {
  Routes,Route
} from "react-router-dom";

function App() {
 
  return (
  <>
<Navbar  />
<Alert alert="Welcome To TextUtils"/>
<div>
  <Routes>
  <Route path='/' element={ <TextFrom  head="Enter Your Text To Analyized " />}/>
          <Route path='/about' element={<About />}/>
         

  </Routes>

</div>
</>
     

  );
}

export default App;

