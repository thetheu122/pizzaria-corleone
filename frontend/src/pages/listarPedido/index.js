import { useState } from 'react'

import './index.scss'
import CompAtalhosAdm from '../../components/compAtalhosAdm';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal'

Modal.setAppElement('#root')

export default function ListarPedido() {

    const [buscarid, setBuscarid] = useState('')

    const navigate = useNavigate()

    function MaisDetalhes() {
        navigate('/detalhes')
    }


    ///<button className="modal-button" type="submit">Aplicar Filtros</button>

    const [filtro, setFiltro] = useState('')
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState(''); // Para armazenar a forma de pagamento selecionada
    const [selectedDate, setSelectedDate] = useState(''); // Para armazenar a data selecionada

    // Função para abrir o modal
    function openModal() {
        setModalIsOpen(true);
    }

    // Função para fechar o modal
    function closeModal() {
        setModalIsOpen(false);
    }

    // Função para lidar com a submissão do formulário
    function handleFilterSubmit(event) {
        event.preventDefault();
        // Aqui você pode processar os filtros de pagamento e data
        console.log('Forma de pagamento selecionada:', selectedPayment);
        console.log('Data selecionada:', selectedDate);
        closeModal();
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
                            <div className='filtro' onClick={openModal}>
                                <div className="filtro-image"></div>
                                <h2>Todos os filtros</h2>
                            </div>
                            

                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                contentLabel="Modal de Filtros"
                                className="custom-modal"
                            >
                                
                                <h2 className="modal-title">Filtros</h2>
                                <form className='conteudo-filtros' onSubmit={handleFilterSubmit}>

                                    <label className='modal-label-pedidos1'>
                                        <p>ordernar por</p>
                                       
                                        <div className='modal-first-conteudo'>
                                            <div className='payment-input-pedidos1'><input type='checkbox' /></div>
                                            <h4>A ao Z</h4>
                                        </div>
                                        
                                    </label>

                                    <div className='divisao-filtros'></div>

                                    <label className="modal-label"> 
                                    <p>Formas de pagamento</p>
                                        <div className='paymentForm'>
                                            <div className='payment-input'><input type='checkbox' /></div>
                                            <h5>Pix</h5>
                                        </div>

                                        <div className='paymentForm'>
                                            <div className='payment-input'><input type='checkbox' /></div>
                                            <h5>Dinheiro</h5>
                                        </div>

                                        <div className='paymentForm'>
                                            <div className='payment-input'><input type='checkbox' /></div>
                                            <h5>Cartão de credito</h5>
                                        </div>
                                    </label>

                                    <div className='divisao-filtros'></div>


                                    <label className="modal-label-2">
                                        <p>Data</p>
                                        <input
                                            className="modal-input"
                                            type="date"
                                            onChange={(e) => setSelectedDate(e.target.value)}
                                        />
                                    </label>

                                    <div className='divisao-filtros'></div>

                                    <label className='modal-label-pedidos2'>
                                        <p>Status</p>
                                        
                                        <div className='modal-second-conteudo'>
                                            <div className='payment-input-pedidos2'><input className='inputt' type='checkbox' /></div>
                                            <h6>Entregue</h6>
                                        </div>

                                        <div className='modal-second-conteudo'>
                                            <div className='payment-input-pedidos2'><input type='checkbox' /></div>
                                            <h6>Cancelado</h6>
                                        </div>
                                        
                                        
                                    </label>

                                </form>

                                <div className='modal-button-filtros'>
                                    <button className="modal-button" type="submit">Aplicar Filtros</button>
                                </div>
                            </Modal>
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