import React from "react";
// import Header from "./Components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import FullPizza from "./pages/FullPizza";
import { Routes, Route } from "react-router-dom";

import "./scss/app.scss";
import "./App.css";
import MainLayout from "./layouts/MainLayout";


function App() {



  return (
          <Routes className="container">   
            <Route path='/' element={<MainLayout/>}>
              <Route path="" element={<Home />} />
              <Route path="cart" element={<Cart />} />
              <Route path="pizza/:id" element={<FullPizza />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>      
  );
}

export default App;
