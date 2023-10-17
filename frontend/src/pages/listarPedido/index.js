import { useState } from 'react'

import './index.scss'
import CompAtalhosAdm from '../../components/compAtalhosAdm';
import { useNavigate } from 'react-router-dom';

export default function ListarPedido() {

    const [buscarid, setBuscarid] = useState('')

    const navigate = useNavigate()

    function MaisDetalhes() {
        navigate('/detalhes')
    }

    return (

        <div className='contatiner-um'>
            <CompAtalhosAdm />

            <div className='container-dois'>
                <div className='titulo-pedidos'>
                    <h1>Pedidos</h1>
                </div>

                <div className='lista-subtitulo'>
                    <h1>Lista de Pedidos</h1>
                </div>

                <div className='container-tres'>

                    <div className='cont-quatro'>
                        <div className="input-container">
                            <input
                                type='text'
                                placeholder='Busque por id ou nome do cliente'
                                value={buscarid}
                                onChange={e => setBuscarid(e.target.value)}
                            />
                            <div className="input-image"></div>
                        </div>

                        <div className='filtro'>
                            <div className="filtro-image"></div>
                            <h2>Todos os filtros</h2>
                        </div>


                        <h2 className='entregue'>Status: Entregue</h2>
                        <h2 className='data'>Data: 30/07/2023</h2>
                    </div>

                   

                    <div className="linha-pedido"></div>

                    <table className="tabela-listarProduto">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Pagamento</th>
                                <th>Produto</th>
                                <th>Data</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                      
                      <tr className='linha-separadora'></tr>

                        <tbody>


                            <tr className="linha-separadora">
                                <td>#4020</td>
                                <td>Carlos Ribeiro</td>
                                <td>Cartão de crédito</td>
                                <td>Calzone</td>
                                <td>30/07/2023</td>
                                <td className='status-entregue'></td>
                                <td  className='preto' onClick={MaisDetalhes}>mais detalhes...</td>



                            </tr>

                           
                            <tr className="cada-pedido">
                                <td>#4020</td>
                                <td>Carlos Ribeiro</td>
                                <td>Cartão de crédito</td>
                                <td>Calzone</td>
                                <td>30/07/2023</td>
                                <td className='status-entregue'></td>
                                <td className='preto' onClick={MaisDetalhes}>mais detalhes...</td>

                                
                            </tr>

                           

                            <tr className="cada-pedido">
                                <td>#4021</td>
                                <td>João Silva</td>
                                <td>Dinheiro</td>
                                <td>Pizza</td>
                                <td>01/08/2023</td>
                                <td className='status-entregue'></td>
                                <td className='preto' onClick={MaisDetalhes}>mais detalhes...</td>
                            </tr >

                            <tr className="cada-pedido">
                                <td>#4020</td>
                                <td>Carlos Ribeiro</td>
                                <td>Cartão de crédito</td>
                                <td>Calzone</td>
                                <td>30/07/2023</td>
                                <td className='status-entregue'></td>
                                <td className='preto' onClick={MaisDetalhes}>mais detalhes...</td>

                                
                            </tr>

                            <tr className="cada-pedido">
                                <td>#4020</td>
                                <td>Carlos Ribeiro</td>
                                <td>Cartão de crédito</td>
                                <td>Calzone</td>
                                <td>30/07/2023</td>
                                <td className='status-entregue'></td>
                                <td className='preto' onClick={MaisDetalhes}>mais detalhes...</td>

                                
                            </tr>

                            <tr className="cada-pedido">
                                <td>#4020</td>
                                <td>Carlos Ribeiro</td>
                                <td>Cartão de crédito</td>
                                <td>Calzone</td>
                                <td>30/07/2023</td>
                                <td className='status-entregue'></td>
                                <td className='preto' onClick={MaisDetalhes}>mais detalhes...</td>

                                
                            </tr>

                            <tr className="cada-pedido">
                                <td>#4020</td>
                                <td>Carlos Ribeiro</td>
                                <td>Cartão de crédito</td>
                                <td>Calzone</td>
                                <td>30/07/2023</td>
                                <td className='status-entregue'></td>
                                <td className='preto' onClick={MaisDetalhes}>mais detalhes...</td>

                                
                            </tr>

                            <tr className="cada-pedido">
                                <td>#4020</td>
                                <td>Carlos Ribeiro</td>
                                <td>Cartão de crédito</td>
                                <td>Calzone</td>
                                <td>30/07/2023</td>
                                <td className='status-entregue'></td>
                                <td className='preto' onClick={MaisDetalhes}>mais detalhes...</td>

                                
                            </tr>

                            <tr className="cada-pedido">
                                <td>#4020</td>
                                <td>Carlos Ribeiro</td>
                                <td>Cartão de crédito</td>
                                <td>Calzone</td>
                                <td>30/07/2023</td>
                                <td className='status-entregue'></td>
                                <td className='preto' onClick={MaisDetalhes}>mais detalhes...</td>

                                
                            </tr>

                            <tr className="cada-pedido">
                                <td>#4020</td>
                                <td>Carlos Ribeiro</td>
                                <td>Cartão de crédito</td>
                                <td>Calzone</td>
                                <td>30/07/2023</td>
                                <td className='status-entregue'></td>
                                <td onClick={MaisDetalhes} className="vermelho">mais detalhes...</td>

                                
                            </tr>

                            <tr className="cada-pedido">
                                <td>#4020</td>
                                <td>Carlos Ribeiro</td>
                                <td>Cartão de crédito</td>
                                <td>Calzone</td>
                                <td>30/07/2023</td>
                                <td className='status-entregue'></td>
                                <td className='preto' onClick={MaisDetalhes}>mais detalhes...</td>

                                
                            </tr>

                            <tr className="cada-pedido">
                                <td>#4020</td>
                                <td>Carlos Ribeiro</td>
                                <td>Cartão de crédito</td>
                                <td>Calzone</td>
                                <td>30/07/2023</td>
                                <td className='status-entregue'></td>
                                <td className='preto' onClick={MaisDetalhes}>mais detalhes...</td>

                                
                            </tr>

                            <tr className="cada-pedido">
                                <td>#4020</td>
                                <td>Carlos Ribeiro</td>
                                <td>Cartão de crédito</td>
                                <td>Calzone</td>
                                <td>30/07/2023</td>
                                <td className='status-entregue'></td>
                                <td className='preto' onClick={MaisDetalhes}>mais detalhes...</td>

                                
                            </tr>

                            <tr className="cada-pedido">
                                <td>#4020</td>
                                <td>Carlos Ribeiro</td>
                                <td>Cartão de crédito</td>
                                <td>Calzone</td>
                                <td>30/07/2023</td>
                                <td className='status-entregue'></td>
                                <td className='preto' onClick={MaisDetalhes}>mais detalhes...</td>

                                
                            </tr>

                            <tr className="cada-pedido">
                                <td>#4020</td>
                                <td>Carlos Ribeiro</td>
                                <td>Cartão de crédito</td>
                                <td>Calzone</td>
                                <td>30/07/2023</td>
                                <td className='status-entregue'></td>
                                <td className='preto' onClick={MaisDetalhes}>mais detalhes...</td>

                                
                            </tr>

                            <tr className="cada-pedido">
                                <td>#4020</td>
                                <td>Carlos Ribeiro</td>
                                <td>Cartão de crédito</td>
                                <td>Calzone</td>
                                <td>30/07/2023</td>
                                <td className='status-entregue'></td>
                                <td className='preto' onClick={MaisDetalhes}>mais detalhes...</td>

                                
                            </tr>

                            <tr className="cada-pedido">
                                <td>#4020</td>
                                <td>Carlos Ribeiro</td>
                                <td>Cartão de crédito</td>
                                <td>Calzone</td>
                                <td>30/07/2023</td>
                                <td className='status-entregue'></td>
                                <td className='preto' onClick={MaisDetalhes}>mais detalhes...</td>

                                
                            </tr>

                            <tr className="cada-pedido">
                                <td>#4020</td>
                                <td>Carlos Ribeiro</td>
                                <td>Cartão de crédito</td>
                                <td>Calzone</td>
                                <td>30/07/2023</td>
                                <td className='status-entregue'></td>
                                <td className='preto' onClick={MaisDetalhes}>mais detalhes...</td>

                                
                            </tr>

                            <tr className="cada-pedido">
                                <td>#4020</td>
                                <td>Carlos Ribeiro</td>
                                <td>Cartão de crédito</td>
                                <td>Calzone</td>
                                <td>30/07/2023</td>
                                <td className='status-entregue'></td>
                                <td className='preto' onClick={MaisDetalhes}>mais detalhes...</td>

                                
                            </tr>

                            
                           

                        </tbody>
                    </table>

                </div>



            </div>

        </div >



    )
}