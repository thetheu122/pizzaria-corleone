import { useEffect, useState } from 'react'

import './index.scss'
import CompAtalhosAdm from '../../../components/compAtalhosAdm';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal'
import axios from 'axios'



import { API_URL } from '../../../config/constants';

Modal.setAppElement('#root')

export default function ListarPedido() {



    const navigate = useNavigate()

    function MaisDetalhes() {
        navigate('/detalhes')
    }


    ///<button className="modal-button" type="submit">Aplicar Filtros</button>
    const [buscarid, setBuscarid] = useState('')
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [pedidos, setPedidos] = useState([])


    //////////////////////////////filtros
    const [AaoZ, setAaoZ] = useState(false)
    const [data, setData] = useState('')
    const [entregue, setEntregue] = useState(false)
    const [cancelado, setCancelado] = useState(false)
    /////////////////////////////////


    //console.log(AaoZ)
    //console.log(data)
    console.log(entregue)


    useEffect(() => {
        if (buscarid.length > 0) {
            ListarporNomeOuId()
        } else {
            ListarPedidos()
        }
    }, [buscarid])

    async function ListarPedidos() {
        const r = await axios.get(API_URL + '/pedido')
        console.log(r.data)
        setPedidos(r.data)
    }


    async function ListarporNomeOuId() {

        if (!isNaN(buscarid)) {
            const rId = await axios.get(`${API_URL}/pedido/id/${buscarid}`)
            setPedidos(rId.data)
        } else {
            const rNome = await axios.get(`${API_URL}/pedido/nome/${buscarid}`)
            setPedidos(rNome.data)
        }
    }


    function openModal() {
        setModalIsOpen(true);
    }


    function closeModal() {
        setModalIsOpen(false);
    }




    async function TodasFuncoes() {
        if (AaoZ === true) {
            const r = await axios.get(`http://localhost:5013/pedido/ordem`)
            setPedidos(r.data)
        }

        if (data) {
            const r = await axios.get(`http://localhost:5013/pedido/data/${data}`)
            setPedidos(r.data)
        }

        if (entregue === true && cancelado == false) {
            const r = await axios.get(`http://localhost:5013/pedido/status/entregue`)
            setPedidos(r.data)
        }

        if (cancelado == true && entregue == false) {
            const r = await axios.get(`http://localhost:5013/pedido/status/cancelado`)
            setPedidos(r.data)
        }



        setModalIsOpen(false)

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
                                placeholder='Busque por id ou nome do pedido'
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
                                <form className='conteudo-filtros'>

                                    <label className='modal-label-pedidos1'>
                                        <p>ordernar por</p>

                                        <div className='modal-first-conteudo'>
                                            <div className='payment-input-pedidos1'>
                                                <input type='checkbox'
                                                    checked={AaoZ}
                                                    onChange={() => setAaoZ(!AaoZ)}
                                                />
                                            </div>
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
                                            onChange={(e) => setData(e.target.value)}
                                        />
                                    </label>

                                    <div className='divisao-filtros'></div>

                                    <label className='modal-label-pedidos2'>
                                        <p>Status</p>

                                        <div className='modal-second-conteudo'>
                                            <div className='payment-input-pedidos2'>
                                                <input className='inputt'
                                                    type='checkbox'
                                                    checked={entregue}
                                                    onChange={() => setEntregue(!entregue)}
                                                />
                                            </div>
                                            <h6>Entregue</h6>
                                        </div>

                                        <div className='modal-second-conteudo'>
                                            <div className='payment-input-pedidos2'>
                                                <input type='checkbox'
                                                    checked={cancelado}
                                                    onChange={() => setCancelado(!cancelado)}
                                                />
                                            </div>
                                            <h6>Cancelado</h6>
                                        </div>


                                    </label>

                                </form>

                                <div className='modal-button-filtros'>
                                    <button onClick={TodasFuncoes} className="modal-button" type="submit">Aplicar Filtros</button>
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

                            {pedidos.map(item => (
                                item.produto &&
                                item.data ? (
                                    <tr className="linha-separadora" key={item.idpedido}>
                                        <td>{item.idpedido}</td>
                                        <td>{item.nome}</td>
                                        <td>Cartão de crédito</td>
                                        <td>{item.produto}</td>
                                        <td>{item.data.substr(0, 10)}</td>
                                        <td>
                                            {item.situacao === 'Entregue' && <div className='status-entregue'></div>}
                                            {item.situacao === 'cancelado' && <div className='status-cancelado'></div>}
                                            {item.situacao === 'pendente' && null}
                                        </td>
                                        <td className='preto' onClick={MaisDetalhes}>mais detalhes...</td>
                                    </tr>
                                ) : null
                            ))}


                        </tbody>
                    </table>

                </div>



            </div>

        </div >



    )
}