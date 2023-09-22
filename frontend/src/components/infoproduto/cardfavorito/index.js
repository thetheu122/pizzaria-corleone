import './index.scss'

import pizza  from '../../../assets/img/descricao.png'
import carrinho from '../../../assets/img/vista-lateral-vazia-do-carrinho-de-compras (1).png'
import  coracao  from '../../../assets/img/Union (1).png'

export default function CardFavorito(){

    return(

        <div className='card-favorito'>
               
                    <img  className =' favorito-pizza'src={pizza}/>

                   <div>
                    <div className='favorito-secao-lateral'>
                        <h1> Pizza Margherita</h1>
                        <b >
                            Ingredientes :
                        </b>

                        <p> Tomate, queijo mozzarela , molho de tomate  e manjericão</p>
                    </div>


                    <div className='favorito-icons'>

                        <h3> R$ 71,00</h3>
                        <div className ='favorito-circulo'>
                        <img src={carrinho}/>    
                        </div>
                        
                        <img src={coracao} />
                
                
                     </div> 
                
                 </div>

        </div>

    )
}