
import CompPedido from '../../components/compPedido'
import PedidoAndamento1 from '../../components/pedidoAndamento1'
import './index.scss'

export default function ComprarPedido() {
    return (
        <div className="pagina-comprar-pedido">
            <div className="container">
                <div className='andamento'>
                    <CompPedido />
                </div>
                <div className='pedidos-feitos'>
                    <PedidoAndamento1 />
                
                </div>

                <div className='adicionar'><h1>Adicionar mais itens</h1></div>
                

                <div className='final'>

                    <div className='precos'>
                        <div>
                            <h3>Subtotal</h3>
                            <p>151,00</p>
                        </div>

                        <div>
                            <h3>Total</h3>
                            <p>151,00</p>
                        </div>
                    </div>

                    <div className='botoes'>
                        <button id='cancelar'>Cancelar pedido</button>
                        <button id='fazer'>Fazer pedido</button>
                    </div>
                </div>
            </div>
        </div>
    );
}