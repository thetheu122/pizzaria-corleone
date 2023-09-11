import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Leading from './pages/leading-page';
import Cardapio from './pages/cardapio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Leading />}/>
        <Route path='/cardapio' element={<Cardapio />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

