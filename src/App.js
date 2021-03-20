import React from "react";

import  { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ThemeProvider from "./styles/ThemeProvider";
import GlobaSytle from "./styles/GlobalStyle";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
// import Product from './components/pages/ProductDetail';

function App() {
  return (
    <ThemeProvider>
      <GlobaSytle />
         <Router>
           <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/Sobre" element={<About/>}/>
           </Routes>
         </Router>
    </ThemeProvider>
  );
}

export default App;
