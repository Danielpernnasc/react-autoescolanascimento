import React from 'react';

import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Product from './servicos';

const AppRoutes = () => (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Sobre" element={<About/>} />
      <Route path="/Servicos" element={<Product/>} />
    </Routes>
);

export default AppRoutes;
