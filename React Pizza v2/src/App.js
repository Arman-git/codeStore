import React from "react";
import Header from "./Components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./scss/app.scss";
import "./App.css";

function App() {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
        <Home />
        <NotFound />
        </div>
      </div>
    </div>
  );
}

export default App;
