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
    const [modalStatus, setModalStatus] = useState(false)
    const [status, setStatus] = useState('')


    useEffect(() => {
        Rastreamento();
    }, [])



    async function Update1(idpedido) {
        const r = await axios.get(`${API_URL}/pedido/rastreamento/empreparo/${idpedido}`)
        setStatus(r)
    }

    //////////////// abrir modal status (wendel gostoso)

    function AbrirModalStatus(idpedido) {
        setModalStatus(true)
        //console.log(idpedido)
    }

    function FecharModalStatus() {
        setModalStatus(false)
    }

    ////////////abrir modal filtros, wendel lindo
    function openModal(idpedido) {
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
                                    <button className="modal-button" type="submit">Aplicar Filtros</button>
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
                                        {item.status === 'Em preparo' &&
                                            <div onClick={() => { AbrirModalStatus(item.idpedido) }} class="pedido-andamento">
                                                <div class="etapa">
                                                    <div class="bolinha">1</div>
                                                    <div class="linha-cinza"></div>
                                                </div>
                                                <div class="etapa">
                                                    <div class="bolinha-cinza">2</div>
                                                    <div class="linha-cinza"></div>
                                                </div>
                                                <div class="etapa">
                                                    <div class="bolinha-cinza">3</div>
                                                </div>
                                            </div>}
                                        {item.status === 'Saiu para entrega' && <div onClick={() => { AbrirModalStatus(item.idpedido) }} class="pedido-andamento">
                                            <div class="etapa">
                                                <div class="bolinha">1</div>
                                                <div class="linha"></div>
                                            </div>
                                            <div class="etapa">
                                                <div class="bolinha">2</div>
                                                <div class="linha-cinza"></div>
                                            </div>
                                            <div class="etapa">
                                                <div class="bolinha-cinza">3</div>
                                            </div>
                                        </div>}
                                        {item.status === 'Entregue' &&
                                            <div onClick={() => { AbrirModalStatus(item.idpedido) }} class="pedido-andamento">
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
                                            </div>}
                                    </td>
                                    <Modal
                                        isOpen={modalStatus}
                                        onRequestClose={FecharModalStatus}
                                        className="custom-modal-cliente"
                                        style={{
                                            overlay: {
                                                backgroundColor: 'rgba(255, 255, 255, 0.75)',
                                                position: 'fixed',
                                                top: '50%',
                                                left: '50%',
                                                inset: '0px'
                                            },
                                            content: {
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                background: '#fff',
                                                padding: '20px',
                                                border: '1px solid #ccc',
                                                borderRadius: '5px',
                                                width: '300px',
                                                height: '200px',
                                            },
                                        }}
                                    >
                                        {item.status === 'Em preparo' && 
                                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} class="pedido-andamento">
                                                <div style={{ display: 'flex', alignItems: 'center' }} class="etapa">
                                                    <div style={{ backgroundColor: '#1bb159', borderRadius: '50%', width: '30px', height: '30px', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>1</div>
                                                    <div style={{ width: '30px', height: '3px', backgroundColor: '#1bb159', margin: '0px' }} class="linha"></div>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center' }} class="etapa">
                                                    <div style={{ backgroundColor: '#1bb159', borderRadius: '50%', width: '30px', height: '30px', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>2</div>
                                                    <div style={{ width: '30px', height: '3px', backgroundColor: '#1bb159', margin: '0px' }} class="linha"></div>
                                                </div>
                                                <div class="etapa">
                                                    <div style={{ backgroundColor: '#1bb159', borderRadius: '50%', width: '30px', height: '30px', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>3</div>
                                                </div>
                                            </div>
                                        </div>}

                                        {item.status === 'Entregue' &&
                                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} class="pedido-andamento">
                                                    <div style={{ display: 'flex', alignItems: 'center' }} class="etapa">
                                                        <div style={{ backgroundColor: '#1bb159', borderRadius: '50%', width: '30px', height: '30px', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>1</div>
                                                        <div style={{ width: '30px', height: '3px', backgroundColor: '#1bb159', margin: '0px' }} class="linha"></div>
                                                    </div>
                                                    <div style={{ display: 'flex', alignItems: 'center' }} class="etapa">
                                                        <div style={{ backgroundColor: '#1bb159', borderRadius: '50%', width: '30px', height: '30px', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>2</div>
                                                        <div style={{ width: '30px', height: '3px', backgroundColor: '#1bb159', margin: '0px' }} class="linha"></div>
                                                    </div>
                                                    <div class="etapa">
                                                        <div style={{ backgroundColor: '#1bb159', borderRadius: '50%', width: '30px', height: '30px', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>3</div>
                                                    </div>
                                                </div>
                                            </div>}
                                    </Modal>
                                </tr>
                            )}



                        </tbody>

                    </table>



                </div>

            </div>
        </div>

    )
}

