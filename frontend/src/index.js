import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Leading from './pages/leading-page';
import Cardapio from './pages/cardapio';
import Cadastro from './pages/cadastro'
import CadastroPart2 from './pages/cadastropart2';
import Login from './pages/login'
import CompSobre from './components/compSobre'; 
import SobreNos from './pages/sobrenos';
import TelaAssociado from './pages/telaassociado';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Leading />} />
        <Route path='/sobrenos' element ={<SobreNos/>} />
        <Route path='/cardapio' element={<Cardapio />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/associado' element={<TelaAssociado/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/comp' element={<CompSobre />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

