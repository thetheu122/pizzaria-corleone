import './index.scss'
import CompAtalhosAdm from '../../../components/compAtalhosAdm';
import { useEffect, useState } from 'react';
import Modal from 'react-modal'
import { API_URL } from '../../../config/constants';
import axios from 'axios';

export default function ClienteAdm() {
    const [pesquisa, setPesquisa] = useState('')
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [rastreamneto, setRastreamento] = useState([])


    useEffect(() => {
        Rastreamento();
    }, [])

    function openModal() {
        setModalIsOpen(true);
    }


    function closeModal() {
        setModalIsOpen(false);
    }


    async function Rastreamento() {
        const r = await axios.get(`${API_URL}/pedido/rastreamento`)
        console.log(r.data)
        setRastreamento(r.data)
    }

    return (
        <div className='comp'>
            <CompAtalhosAdm />

            <div className='cont-dois'>


                <div className='titulo-pedidos'>
                    <h1>Pedidos</h1>
                </div>

                <div className='lista-subtitulo'>
                    <h1>Rastreamento de Pedidos</h1>
                </div>



                <div className='container-tres'>

                    <div className='cont-quatro'>
                        <div className="input-container">
                            <input
                                type='text'
                                placeholder='Pesquise aqui'
                                value={pesquisa}
                                onChange={e => setPesquisa(e.target.value)}
                            />
                            <div className="input-image"></div>
                        </div>

                        <div className='filtro'>
                            <div onClick={openModal} className='filtro'>
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
                                <form className='conteudo-filtros'>

                                    <label className='modal-label-pedidos1'>
                                        <p>ordernar por</p>

                                        <div className='modal-first-conteudo'>
                                            <div className='payment-input-pedidos1'>
                                                <input type='checkbox'
                                                />
                                            </div>
                                            <h4>A ao Z</h4>
                                        </div>

                                    </label>

                                    <div className='divisao-filtros'></div>

                                    <label className='modal-label-pedidos2'>
                                        <p>Status</p>

                                        <div className='modal-second-conteudo'>
                                            <div className='payment-input-pedidos2'>
                                                <input className='inputt'
                                                    type='checkbox'
                                                />
                                            </div>
                                            <h6>Em preparo</h6>
                                        </div>

                                        <div className='modal-second-conteudo'>
                                            <div className='payment-input-pedidos2'>
                                                <input type='checkbox'
                                                />
                                            </div>
                                            <h6>Entregue</h6>
                                        </div>


                                    </label>

                                </form>

                                <div className='modal-button-filtros'>
                                    <button  className="modal-button" type="submit">Aplicar Filtros</button>
                                </div>
                            </Modal>
                            
                        </div>

                    </div>


                    

                    <table className="tabela-cliente">
                        <thead>
                            <tr>
                                <th>Horáio do Pedido</th>
                                <th>Produto</th>
                                <th>CEP</th>
                                <th>Total</th>
                                <th>Cliente</th>
                                <th className='status'>Status</th>
                                <th className='pedido'>Andamento do pedido</th>
                            </tr>
                        </thead>

                        <tr className='linha-separadora'></tr>


                        <tbody>

                            {rastreamneto.map(item => 
                            <tr className="linha-separadora">
                            
                            <td>{item.data.substr(11, 5)}</td>
                            <td>{item.produtos}</td>
                            <td>{item.cep}</td>
                            <td>{item.total}</td>
                            <td>{item.cliente}</td>
                            <td className='con'>{item.status}</td>
                            

                                <td className='pedido-em-andamento'>
                                    <div class="pedido-andamento">
                                        <div class="etapa">
                                            <div class="bolinha">1</div>
                                            <div class="linha"></div>
                                        </div>
                                        <div class="etapa">
                                            <div class="bolinha">2</div>
                                            <div class="linha"></div>
                                        </div>
                                        <div class="etapa">
                                            <div class="bolinha">3</div>
                                        </div>
                                    </div>
                                </td>
                        </tr>
                                )}
        
                            

                        </tbody>

                    </table>



                </div>

            </div>
        </div>

    )
}

