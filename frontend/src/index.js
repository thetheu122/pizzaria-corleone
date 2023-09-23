import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './assets/config/fonts-config.scss'

import Leading from './pages/leading-page';
import Cardapio from './pages/cardapio';
import Cadastro from './pages/cadastro'
import CadastroPart2 from './pages/cadastropart2';
import Login from './pages/login'
import CompSobre from './components/compSobre'; 
import SobreNos from './pages/sobrenos';
import TelaAssociado from './pages/telaassociado';
import Pagamento from './pages/pagamento';
import Pedidosativos from './pages/pedidosativos';
import Cadastrarproduto from './pages/cadastrarproduto';
import Informacoes from './components/infoproduto/informacoes';
import CompAtalhosAdm from './components/compAtalhosAdm';
import AlterarProdutosAdm from './pages/alterarProdutosAdm';
import ComprarPedido from './pages/comprarPedido';
import EnderecoPedido from './pages/enderecopedido';
import Confirmacaopedidos from './pages/confirmacaopedidos';
import EditarProduto from './pages/editarProduto';



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
        <Route path='/pagamento' element={<Pagamento/>}/>
        <Route path='/ativos' element={<Pedidosativos/>}/>
        <Route path='/cadastroproduto' element={<Cadastrarproduto/>}/>
        <Route path='/informacao' element={<Informacoes/>}/>
        <Route path='/compatalhos' element={<CompAtalhosAdm/>} />
        <Route path='/produtos' element={<AlterarProdutosAdm/>} />
        <Route path='/pedido1' element={<ComprarPedido />} />
        <Route path='/pedido2' element={<EnderecoPedido/>} />
        <Route path='/pedido3' element={<Confirmacaopedidos/>} />
        <Route path='/produto/alterar/:id' element={<EditarProduto/>} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

