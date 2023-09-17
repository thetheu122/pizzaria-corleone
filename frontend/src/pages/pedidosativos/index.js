import './index.scss'
import pizza from '../../images/pizza.png';
import Vinho from '../../images/vinho.png'
import sobre from '../../images/sobremesa.png'
import relogio from '../../images/relogio.png'
import localizacao from '../../images/localizacao.png'

export default function pedidosativos(){
    return(
        <div className="container-maior">
            <div className='container-medio'>
                <div className='prime'>
                    <h3>Pizza Margherita...</h3>
                    <h2 className='esquerdoo'>há 25 min</h2>
                    <h3>#4020</h3>
                </div>

                <div className='primee'>
                    <h3>Calzone</h3>
                    <h2 className='esquerdo'>24/12/2023</h2>
                    <h3>#4002</h3>
                </div>

            </div>

        <div className='container-grande'> 
            <div className='imagens'>
                <img className='pizza'src={pizza}/>
                <img className='vinho' src={Vinho}/>
                
                <img className='sobre' src={sobre}/>
                
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
                <img src={relogio} />
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
                    <img src={localizacao}/>
                    <p>Cliente solicitou que o pedido seja deixado em portaria do prédio/condominio.</p>
                </div>
            </div>
        </div>
        </div>

       


        </div>
    )
}