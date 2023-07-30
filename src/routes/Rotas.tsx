
import { Route, Routes as ReactRouter } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import Inicio from "../Pages/Inicio/Inicio";
import Sobre from '../Pages/Sobre/Sobre';
import Servicos from '../Pages/Servicos/Servicos';

import Contato from '../Pages/Contato/Contato';
const Rotas = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <ReactRouter>
      <Route  path="/" element={<Inicio />} />
      <Route  path="/sobre" element={<Sobre />} />
      <Route  path="/servicos" element={<Servicos />} />
      <Route  path="/contato" element={<Contato />} />
    </ReactRouter>
  );
};

export default Rotas;
