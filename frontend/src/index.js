import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './assets/config/fonts-config.scss'

import Leading from './pages/leading-page';
import Cardapio from './pages/cardapio';
import CompSobre from './components/compSobre'; 
import SobreNos from './pages/sobrenos';
import TelaAssociado from './pages/telaassociado';
import Pagamento from './pages/pagamento';
import Pedidosativos from './pages/pedidosativos';
import Cadastrarproduto from './pages/cadastrarproduto';
import Informacoes from './components/infoproduto/informacoes';
import CompAtalhosAdm from './components/compAtalhosAdm';
import ListarProdutosAdm from './pages/listarProdutosAdm';
import ComprarPedido from './pages/comprarPedido';
import EnderecoPedido from './pages/enderecopedido';
import Confirmacaopedidos from './pages/confirmacaopedidos';
import EditarProduto from './pages/editarProduto';
import MaisDetalhes from './pages/maisDetalhes';
import Dashboard from './pages/dashboard';
import ListarPedido from './pages/listarPedido';
import MinhaConta from './pages/perfil';
import ClienteAdm from './pages/clienteAdm';
import Vendas from './pages/vendas';

import Finalizarcadastrado from './pages/finalisarcompra';
import ClienteDetalhe from './pages/clienteDetalhes';
import Carrinhodecompras from './pages/carrinhodecompras';
import CadaFavorito from './pages/cadaFavorito';


import Favoritos from './pages/favoritosAdm';

import Teste from './pages/teste';

import ClienteMaisdetalhe from './pages/ClienteAdmMaisdetalhe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Leading />} />
        <Route path='/sobrenos' element ={<SobreNos/>} />
        <Route path='/cardapio' element={<Cardapio />} />
        <Route path='/associado' element={<TelaAssociado/>} />
        <Route path='/comp' element={<CompSobre />} />
        <Route path='/pagamento' element={<Pagamento/>}/>
        <Route path='/ativos' element={<Pedidosativos/>}/>
        <Route path='/cadastroproduto' element={<Cadastrarproduto/>}/>
        <Route path='/informacao/:id' element={<Informacoes/>}/>
        <Route path='/compatalhos' element={<CompAtalhosAdm/>} />
        <Route path='/produtos' element={<ListarProdutosAdm/>} />
        <Route path='/pedido1' element={<ComprarPedido />} />
        <Route path='/pedido2' element={<EnderecoPedido/>} />
        <Route path='/pedido3' element={<Confirmacaopedidos/>} />
        <Route path='/produto/alterar/:id' element={<EditarProduto/>} />
        <Route path='/detalhes' element={<MaisDetalhes/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/listapedido' element={<ListarPedido/>} />
        <Route path='/minhaconta' element={<MinhaConta/>} />
        <Route path='/cliente' element={<ClienteAdm/>} />
        <Route path='/vendas' element={<Vendas/>}/>
        <Route path='/corleone/usuario/carrinho/listar/:id' element={<Carrinhodecompras/>} />
        <Route path ='/corleone/usuario/compra' element={<Finalizarcadastrado/>}/>
       <Route path='/clienteDetalhes' element={<ClienteDetalhe/>}/>
       <Route path='/favoritos' element={<Favoritos/>}/>
       <Route path='/cadafavorito/cliente/:id' element={<CadaFavorito/>}/>

       <Route path='/clienteadmmaisdetalhe/:id' element={<ClienteMaisdetalhe/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

