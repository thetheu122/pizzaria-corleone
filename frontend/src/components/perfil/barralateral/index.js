import { Link } from 'react-router-dom'
import './index.scss'

import  estreladupla from '../assets/images/image 52.png'
import  carrinho     from '../assets/images/vista-lateral-vazia-do-carrinho-de-compras (1).png'  
import  perfil       from '../assets/images/icone-cadastro 1.png'
import  sair         from '../assets/images/image 51.png'
import  voltar       from '../assets/images/seta-esquerda.png'


export default function Barralateral(){

    return(
        <div className='barra-lateral'>

               <div className='fundo'>
                    
                    
                     <div className='barra-lateral-secao-01'>
                            <div className='barra-lateral-voltar'>
                                <img src={voltar}/> 
                                <Link className='link-barra-lateral'>Voltar</Link>
                            </div>
                     <div className=' barra-lateral-secao-01-circulo'>   </div>
 
                                <h3>John</h3>
                              <p>John.silva@gmail.com</p>
                        
                        </div>

                      
                        <p>Painel</p>
                     
                     <div className='barra-lateral-links'>
                            <div className='pedidos-ativos'>
                                 
                                <Link  className='link-barra-lateral'> Pedidos ativos </Link>
                            </div>

                            <div>
                                <img src={estreladupla}/>
                                <Link to='/favoritos' className='link-barra-lateral'> Favoritos </Link>
                            </div>

                            <div>
                                <img src={carrinho}/>
                                <Link to='/historico' className='link-barra-lateral'> Historico de compras  </Link>
                            </div>

                            <div>
                                <img src={perfil}/>
                                <Link  className='link-barra-lateral'> Detalhes da conta   </Link>
                            </div>

                            <div>
                                <img src={sair}/>
                                <Link className='link-barra-lateral'>  Sair  </Link>
                            </div>
                     </div>




               
             </div>


           


        </div>
    )
}