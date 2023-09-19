
import './index.scss'
import Certo from '../../assets/images/pictures/certo-andamento.png';


export default function CompPedido() {
    return (
    <div className="pagina-andamento">
        <div className="container">
            <div className="etapa-1">
                <div className="bolinha">
                    <h5>1</h5>
                </div>
                <div className='certo'>
                    <img src={Certo} />
                </div>
                <p>Comprar</p>
            </div>

            <div className='linha'></div>

            <div className="etapa-1">
                <div className="bolinha">
                    <h5>2</h5>
                </div>
                <div className='certo'>
                    <img src={Certo} />
                </div>
                <p>Endereço</p>
            </div>

            <div className='linha'></div>

            <div className="etapa-2">
                <div className="bolinha">
                    <h5>3</h5>
                </div>
                <div className='certo'>
                    <img src={Certo} />
                </div>
                <p>Confirmação do pedido</p>
            </div>

            <div className='linha'></div>

            <div className="etapa-2">
                <div className="bolinha">
                    <h5>4</h5>
                </div>
                <div className='certo'>
                    <img src={Certo} />
                </div>
                <p>Pedido Confirmado</p>
            </div>




        </div>
    </div>
    );
}