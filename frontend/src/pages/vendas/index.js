import './index.scss'
import Lupa from '../../assets/images/pictures/lupa 1.png'
import Deletar from '../../assets/images/pictures/deletar.png'
import Filtro from '../../assets/img/filtro vendas.png'
import { useState } from 'react'
import CompAtalhosAdm from '../../components/compAtalhosAdm'
import Modal from 'react-modal';

Modal.setAppElement('#root');


export default function Vendas() {

    

    const [filtro, setFiltro] = useState('')
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState(''); 
    const [selectedDate, setSelectedDate] = useState(''); 


    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }


    function handleFilterSubmit(event) {
        event.preventDefault();

        console.log('Forma de pagamento selecionada:', selectedPayment);
        console.log('Data selecionada:', selectedDate);
        closeModal();
    }

    return (
        <div className='pagina-vendas'>

            <CompAtalhosAdm />
            <div className='container-vendas'>
                <div className='cabecalho-vendas'>
                    <h1>Vendas</h1>
                </div>

                <div className='conteudo-produtos-vendas'>

                    <div className='conteudo-input'>
                        <div className="input-container">
                            <input
                                type='text'
                                placeholder='Busque por id ou nome do cliente'
                                value={filtro}
                                onChange={e => setFiltro(e.target.value)}
                            />
                            <div className="input-image"></div>
                        </div>

                        <div className="parte-dois-filtros">
                            <div onClick={openModal} className="parte-dois-filtros-1">
                                <img src={Filtro} />
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
                                    
                                </form>

                                <div className='modal-button-filtros'>
                                    <button className="modal-button" type="submit">Aplicar Filtros</button>
                                </div>
                            </Modal>


                        </div>
                    </div>


                    <h4 className='vendas'>$ Vendas</h4>



                    <table className='tabela-vendas'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Cobrado</th>
                                <th>Pago</th>
                                <th>Troco</th>
                                <th>Método de pag.</th>
                                <th>Pagamento</th>
                                <th>Excluir</th>
                            </tr>
                        </thead>

                        <tr className='linha-separadora'></tr>

                        <tbody>

                            <tr className='cada-valor-vendas'>
                                <td>6</td>
                                <td>R$123,45</td>
                                <td>R$123,45</td>
                                <td>--</td>
                                <td>CARTÃO</td>
                                <td>DÉBITO</td>
                                <td><img src={Deletar} /></td>
                            </tr>


                            <tr className='cada-valor-vendas'>
                                <td>6</td>
                                <td>R$123,45</td>
                                <td>R$123,45</td>
                                <td>--</td>
                                <td>CARTÃO</td>
                                <td>DÉBITO</td>
                                <td><img src={Deletar} /></td>
                            </tr>

                            <tr className='cada-valor-vendas'>
                                <td>6</td>
                                <td>R$123,45</td>
                                <td>R$123,45</td>
                                <td>--</td>
                                <td>CARTÃO</td>
                                <td>DÉBITO</td>
                                <td><img src={Deletar} /></td>
                            </tr>

                            <tr className='cada-valor-vendas'>
                                <td>6</td>
                                <td>R$123,45</td>
                                <td>R$123,45</td>
                                <td>--</td>
                                <td>CARTÃO</td>
                                <td>DÉBITO</td>
                                <td><img src={Deletar} /></td>
                            </tr>

                            <tr className='cada-valor-vendas'>
                                <td>6</td>
                                <td>R$123,45</td>
                                <td>R$123,45</td>
                                <td>--</td>
                                <td>CARTÃO</td>
                                <td>DÉBITO</td>
                                <td><img src={Deletar} /></td>
                            </tr>

                            <tr className='cada-valor-vendas'>
                                <td>6</td>
                                <td>R$123,45</td>
                                <td>R$123,45</td>
                                <td>--</td>
                                <td>CARTÃO</td>
                                <td>DÉBITO</td>
                                <td><img src={Deletar} /></td>
                            </tr>

                            <tr className='cada-valor-vendas'>
                                <td>6</td>
                                <td>R$123,45</td>
                                <td>R$123,45</td>
                                <td>--</td>
                                <td>CARTÃO</td>
                                <td>DÉBITO</td>
                                <td><img src={Deletar} /></td>
                            </tr>

                            <tr className='cada-valor-vendas'>
                                <td>6</td>
                                <td>R$123,45</td>
                                <td>R$123,45</td>
                                <td>--</td>
                                <td>CARTÃO</td>
                                <td>DÉBITO</td>
                                <td><img src={Deletar} /></td>
                            </tr>

                            <tr className='cada-valor-vendas'>
                                <td>6</td>
                                <td>R$123,45</td>
                                <td>R$123,45</td>
                                <td>--</td>
                                <td>CARTÃO</td>
                                <td>DÉBITO</td>
                                <td><img src={Deletar} /></td>
                            </tr>

                            <tr className='cada-valor-vendas'>
                                <td>6</td>
                                <td>R$123,45</td>
                                <td>R$123,45</td>
                                <td>--</td>
                                <td>CARTÃO</td>
                                <td>DÉBITO</td>
                                <td><img src={Deletar} /></td>
                            </tr>



                        </tbody>
                    </table>
                </div>


            </div>
        </div>


    )
}