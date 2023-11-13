import './index.scss'
import pizza from '../../images/pizza.png';
import Vinho from '../../images/vinho.png'
import sobre from '../../images/sobremesa.png'
import relogio from '../../images/relogio.png'
import localizacao from '../../images/localizacao.png'

export default function PedidosAtivos() {
    return (
        <div className="container-maior">
            <div className='container-grande'>
                <div className='imagens'>
                    <div className='moldura'>

                    </div>
                </div>
                <div className='titu'>
                    <h1>PIZZA MARGHERITA, AMARO E ZABAIONE</h1>
                </div>
                <div className='informação'>
                    <h2>PEDIDO: #4020</h2>
                    <h2>feito as 14:30</h2>
                    <h2>Localizador do Pedidos: 4204 912</h2>
                </div>

                <div className='horario'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                        <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z"></path>
                    </svg>
                    <p>Entrega Prevista: 15:30 </p>
                </div>

                <div className='info'>
                    <div className='pri'>
                        <p>Status do pedido</p>
                        <p className='verde'>Despachado</p>
                        <p>Há 1 minuto</p>
                    </div>

                    <div class="acompanhamento">
                        <div class="etapa">
                            <div class="bolinha"></div>
                            <div class="linha"></div>
                        </div>
                        <div class="etapa">
                            <div class="bolinha"></div>
                            <div class="linha"></div>
                        </div>
                        <div class="etapa">
                            <div class="bolinha"></div>
                            <div class="linhaa"></div>
                        </div>
                        <div class="etapa">
                            <div class="bolinhaa"></div>

                        </div>
                    </div>

                    <div className='t-chegada'>
                        <div className='chegada'>
                            <p>Pedido Confirmado</p>
                            <h1 className='hora'>14:31</h1>
                        </div>

                        <div className='chegada'>
                            <p>Inicío do preparo</p>
                            <h1 className='hora'>14:41</h1>
                        </div>

                        <div className='chegada'>
                            <p>Pedido Despachado</p>
                            <h1 className='hora'>14:56</h1>
                        </div>

                        <div className='chegada'>
                            <p>Pedido Concluído</p>
                            <div className='previsao'>
                                <p>Previsão:</p>
                                <p className='hora'>15:30</p>
                            </div>

                        </div>
                    </div>

                </div>
                <div>
                    <div className='localizacao'>
                        <p>Rua castro Alves, 651 - Apartamento 53 - Tatuap </p>
                        <p className='cep'>CEP: 05423021 - São Paulo</p>
                        <div className='bairro'>
                            <img src={localizacao} />
                            <p>Cliente solicitou que o pedido seja deixado em portaria do prédio/condominio.</p>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}