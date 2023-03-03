import react, { useEffect, useState } from "react";
import "./App.css"
import { BrowserRouter ,Routes,Route } from "react-router-dom";
import About from "./Component/About";
import Contact from "./Component/contact";
import Home from "./Component/Home";
import HomeIcone from '@mui/icons-material'
import Erro from "./Component/Erro";
import Main from "./Component/Mainhaeder";
import Log from "./Component/Log in";


function App() {

  return (
    <>

      <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Main />}>
        <Route index element={<Home />} /> 
        <Route path="/login"  element={<Log/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
       
        <Route path="*" element={<Erro/>} />
      </Route>
      </Routes>
    </BrowserRouter>






    </>
  )
}

export default App
