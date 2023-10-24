import Cabecalho from '../../components/user/cabecalho'
import './index.scss'
import ProdutoCompra from '../../components/user/produtocompra'

export default function Finalizarcadastrado(){
    
    return(
        
        <div>
            
            <div> <Cabecalho/></div>
            <div className='body'>



            <div> 
                   <div>
                      <h2> Meu Carrinho</h2>
                      <ProdutoCompra/>
                   </div>

                   <div></div>
                 
            </div>

            <div className='ld-esquerdo'>
                    
                 <h2>Resumo do Pedido </h2>

                <div> 
                    <div>  <p> Produtos (10 itens ) </p>
                           <p> R$  500</p>
                    </div>
                    
                    <div>
                           <p> Descontos </p>
                           <p> - R$ 20 </p> 
                    </div>   
                </div> 

                <div>
                    <h4>
                        Subtotal   
                    </h4>

                    <h4> 
                        R$ 480 
                    </h4> 

                    <p> Frete a calcular</p>
                </div> 

                <div>
                        <h3>Total   </h3>
                        <h3>R$ 480</h3>
                </div>

                <button> Comprar </button>
                <div>
                    <div>
                       <input /> 
                    </div>
                    <button>Aplicar</button>
                </div>
            </div>
            </div>

              

        </div>
    )
}