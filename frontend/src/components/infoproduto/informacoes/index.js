import { Link } from 'react-router-dom';
import './index.scss'


import  Pizza         from '../../../assets/img/descricao.png';
import  comida  from '../../../assets/img/document 1.png'



import  Voltar        from '../../../assets/img//seta-esquerda.png'
import  estrela       from '../../../assets/img/star_77949 1.png'
import  carrinho      from '../../../assets/img/shopping-cart (1) 1.png'
import  duplaestrela  from '../../../assets/img/image 52.png'
import  coraco        from '../../../assets/img/Union (1).png'
import  estrelabranca from '../../../assets/img/Vector (14).png'
//Vector (14).png/// 

import Recomendacoes from '../recomendacoes/index';
import Cabecalho from '../../user/cabecalho';
import Comentarios from '../comentario/index';

export default function Informacoes(){
    
    return(

        <div className=' informacoes'>
            <Cabecalho></Cabecalho>
              <div className='informacoes-titulo'>
                  <h1> Margherita </h1>
              </div>
               <div className='secao-01-voltar'>

                    
                            <img src={Voltar}/>
                        <Link className='link' > Voltar </Link>
                      
                   

             </div>

             <div className='secao-01-pizza'>

                    <div className='secao-01-pizza-descricao'>
                        <img  src={Pizza}/>   

                            <div className='secao-01-ingredientes'>
                                
                                <h3> ingredientes </h3>
                                
                                <p> Farinha, água, sal, fermento ,molho de tomate, 
                                    muçarela fresca, manjericão fresco,
                                    azeite de oliva extra virgem   </p>

                            </div> 
                    </div>

                     <div className='secao-01-parte-lateral'>

                          
                             <div className='secao-01-parte-lateral-pizza'>
                                    <h1> Pizza margherita</h1>
                                    <h2> 71,00</h2>

                                    <div className='coracao'>
                                          <img src={coraco}/>
                                    </div>
                            </div>
                              

                            <div>
                                    <h3> 4.1 </h3>
                                    <img src={estrela}/>
                            </div>


                            <div>

                                    <div className='button-01'>
                                           <img src={carrinho}/> 
                                           <p>Adicione ao carrinho</p>
                                    </div>  
                                     
                                     <div className='button-02'>
                                           <img src={duplaestrela}/> 
                                           <p>Avalie nosso serviço</p>
                                    </div>  
                            </div>

                            <h4> Voçê talvez gostaria </h4>

                          <Recomendacoes recomendacao={{nome:"calloni",imagem:comida}} />

                          <p> Saboreie a autêntica Pizza Margherita, feita 
                              com ingredientes frescos e de qualidade superior.
                              A combinação perfeita de molho de tomate suculento,
                              queijo mozzarella e manjericão fresco cria uma experiência única.</p>
                    
                    
                    
                              
                    
                    </div>

             </div>

             <div className='secao-informacao-avaliacao'>
                            
                            <h1>Avaliações</h1>

                            <div className='secao-informacao-avaliacao-input'>
                                <input placeholder=' Digite sua mensagem'/>
                               <div>
                                    <img src={estrelabranca}/>
                                    <img src={estrelabranca}/>
                                    <img src={estrelabranca}/>
                                    <img src={estrelabranca}/>
                                    <img src={estrelabranca}/>
                                </div>
                                <button>Enviar</button>
                            </div>


                            <div className='secao-informacao-avaliacao-comentario'>
                                 <Comentarios usuario={{nome: "Regina", Comentario: "Farinha, água, sal, fermento ,molho de tomate, muçarela fresca, manjericão fresco, azeite de oliva extra virgem"}}/>
                                 <Comentarios usuario={{nome: "Matheus  ", Comentario: "Farinha, água, sal, fermento ,molho de tomate, muçarela fresca, manjericão fresco, azeite de oliva extra virgem"}}/>
                                 <Comentarios usuario={{nome: "Bruno", Comentario: "Farinha, água, sal, fermento ,molho de tomate, muçarela fresca, manjericão fresco, azeite de oliva extra virgem"}}/>
                                 <Comentarios usuario={{nome: "João", Comentario: "Farinha, água, sal, fermento ,molho de tomate, muçarela fresca, manjericão fresco, azeite de oliva extra virgem"}} />

                            </div>
                </div>
        </div>
    )
}