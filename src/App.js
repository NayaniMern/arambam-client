
import React, { createContext, useState } from 'react'
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from './Arambam/Footer';
import Header from './Arambam/Header';
import Routing from './Arambam/Routing';
export const loginStatus = createContext()

function App() {
  const[token,setToken] = useState("")
  return (
    <div className="App ">
      <loginStatus.Provider value={[token,setToken]}>
      <Header/>
      <Routing/>
      <Footer/>
      </loginStatus.Provider>
      
    </div>
  );
}

export default App;
