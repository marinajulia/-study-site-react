import React from "react";
import Contato from "../Contato";
import Sobre from "../Sobre";
import Inicio from "../Inicio";
import '../../style.css';

function Home() {
  return (
    <div>
      <Inicio/>
      <Sobre/>
      <Contato/>
    </div>
  );
}

export default Home;
