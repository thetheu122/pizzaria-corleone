import Cabecalho from '../../components/user/cabecalho'
import './index.scss'
import ProdutoCompra from '../../components/user/produtocompra'
import { useState } from 'react'

export default function Finalizarcadastrado(){
    
const [ label , setLabel] = useState( false)
const [cupom, setCupom] = useState('')

    return(
        
        <div>
            
            <div className='cab'> <Cabecalho/></div>
            <div className='body'  >



            <div> 
                   <div className='mae-comp'>
                      <h2> Meu Carrinho</h2>
                      <ProdutoCompra />

                      <h2> Sugestões </h2>
                      
                   </div>

                 
            </div>
           



           
            <div className='ld-esquerdo'>

                <div>

                    
                </div>
                    
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

                <div className='ld-esquerdo-fl'>
                       <h4>
                            Subtotal   
                        </h4>

                        <h4> 
                            R$ 480 
                        </h4> 

                </div> 

                <div  className='ld-esquerdo-fl'>
                     <p> Frete </p>   <p>a calcular</p>
                </div>

                <div className='ld-esquerdo-fl'>
                            <h3>Total   </h3>
                            <h3>R$ 480</h3>
                    </div>

                    <button> Comprar </button>
                    <div>
                        <div className='butao'>
                            { cupom.length  > 0 && 
                            <label>Cupom</label>
                            }
                        <input placeholder='Cupom' 
                            value={cupom}
                            onChange={ (e) => { setCupom ( e.target.value) ;}}
                            onClick={()=> { setLabel(true) }  } /> 
                        </div>
                    
                    </div>

                    <button className='claro'>Aplicar</button>
                 </div>
             </div>

              

        </div>
    )
}