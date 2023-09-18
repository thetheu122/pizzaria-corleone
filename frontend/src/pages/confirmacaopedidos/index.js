
import CompPedido from '../../components/compPedido'
import PedidoAndamento1 from '../../components/pedidoAndamento1';
import './index.scss'

export default function Confirmacaopedidos() {
    return(
        <div className="pagina-confirmacao-pedido">
            <div className="container">
                <div className='andamento'>
                    <CompPedido/>
                </div>
                <div className='pedidos-feitos'>
                    <PedidoAndamento1/>
                </div>
                <div className='final'>
                    <div className='precos'>
                        <div>
                            <h3>Subtotal</h3>
                            <p>151,00</p>
                        </div>

                        <div>
                            <h2>Taxa de entrega</h2>
                            <h4>Grátis</h4>
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