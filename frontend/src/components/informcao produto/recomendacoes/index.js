import './index.scss'
import  estrela from '../assets/images/star_77949 1.png' 
import  carinho from '../assets/images/shopping-cart (1) 1.png'

export default function Recomendacoes (props){

    return(


            <div className='recomendacao '>
               
                <img className='recomendacao-comida-img' src={props.recomendacao?.imagem}/>

                <div className='recomendacao-lateral' >
                        
                    
                        <div>
                            <div>
                            <h3>{props.recomendacao?.nome}</h3>
                            </div>
                            <div>
                            <h4>4.7</h4>
                                <img src={estrela}/> 
                            </div>
                                                 
                        </div>

                              <div className='circulo-carinho'>
                        
                                    <img src={carinho}/>
                              </div>
                </div>

               

            </div>

       

    )
}