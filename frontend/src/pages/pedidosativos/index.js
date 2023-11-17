import './index.scss'
import pizza from '../../images/pizza.png';
import Vinho from '../../images/vinho.png'
import sobre from '../../images/sobremesa.png'
import relogio from '../../images/relogio.png'
import localizacao from '../../images/localizacao.png'
import { toast } from 'react-toastify';
import axios from 'axios';
import { API_URL } from '../../config/constants';
import { useEffect, useState } from 'react';
import { useFetcher } from 'react-router-dom';

export default function PedidosAtivos() {

const [listaPedido,setListaPedido] = useState([])
const [ produtos , setProdutos] = useState([])
useEffect(() => {
    async function fetchData() {
      try {
        // Obter a lista de pedidos
        const responsePedidos = await axios.get(`${API_URL}/pedido/rastreamento`);
        setListaPedido(responsePedidos.data);

        // Obter detalhes dos produtos para cada pedido
        const produtosPromises = responsePedidos.data.map(async (pedido) => {
          const produtosDoPedido = await Promise.all(
            pedido.produtos.map(async (produto) => {
              const responseProduto = await axios.get(`${API_URL}/produto/${produto.id_produto}`);
              return responseProduto.data;
            })
          );

          return { ...pedido, produtos: produtosDoPedido };
        });

        const pedidosComProdutos = await Promise.all(produtosPromises);

        // Setar o estado com os pedidos e produtos
        setListaPedido(pedidosComProdutos);
      } catch (error) {
        toast.error(error.message);
      }
    }

    fetchData();
  }, []);
  
    return (
        <div className="container-maior">
    {  listaPedido.map((item)=>(

        <div className='container-grande'>
                <div className='imagens'>
                    <div className='moldura'>

                    </div>
                </div>
                <div className='titu'>
                    <h1>PIZZA MARGHERITA, AMARO E ZABAIONE</h1>
                </div>
                <div className='informação'>

                <h2>PEDIDO:{item.idpedido}</h2>
                <h2>Feito em: {new Date(item.data).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h2>
                <h2>Status do pedido</h2>
                <p className='verde'>{item.status}</p>
                {/* <p>Há 1 minuto</p> */}
                    {/* <h2>Localizador do Pedidos: 4204 912</h2> */}
                </div>

                {/* <div className='horario'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                        <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z"></path>
                    </svg>
                    <p>Entrega Prevista: 15:30 </p>
                </div> */}

                <div className='info'>
                    <div className='pri'>
                        <p>Status do pedido</p>
                        <p className='verde'>{item.status}</p>
                        {/* <p>Há 1 minuto</p> */}
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
                            {/* <div class="linhaa"></div> */}
                        </div>
                        {/* <div class="etapa">
                            <div class="bolinhaa"></div>

                        </div> */}
                    </div>

                    <div className='t-chegada'>
                        <div className='chegada'>
                            <p>Em preparo</p>
                            {/* <h1 className='hora'>14:31</h1> */}
                        </div>

                        {/* <div className='chegada'>
                            <p>Inicío do preparo</p>
                            { <h1 className='hora'>14:41</h1> }
                        </div>  */}

                        <div className='chegada'>
                            <p> Saiu para entrega</p>
                            {/* <h1 className='hora'>14:56</h1> */}
                        </div>

                        <div className='chegada'>
                            <p>Entregue</p>
                            <div className='previsao'>
                                {/* <p>Previsão:</p> */}
                                {/* <p className='hora'>15:30</p> */}
                            </div>

                        </div>
                    </div>

                </div>
                <div>
                    <div className='localizacao'>
                        <p>Rua castro Alves, 651 - Apartamento 53 - Tatuap </p>
                        <p className='cep'> {item.cep} - São Paulo</p>
                        {/* <div className='bairro'>
                            <img src={localizacao} />
                            <p>Cliente solicitou que o pedido seja deixado em portaria do prédio/condominio.</p>
                        </div> */}
                    </div>
                </div>
            </div>


  ))}
            



        </div>
    )
}