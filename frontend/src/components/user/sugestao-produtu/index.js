import './index.scss'
import Star from '../../../assets/images/icons/star_icon.svg'
import Margherita from '../../../assets/images/pictures/margherita.png';
export default function  Sugestao(props){
    
    return(
       <div className='com-sugestao'>
           
           <img src={Margherita} />
           
           
               <p>{props.produto.nome}</p>

          

           <div>
                <h4> R${props.produto.preco}</h4>
                <div>
                        <img src={Star}/>
                        <p>{  props.produto.media !== null ? props.produto.meida : 0}</p>
                </div>
           </div>

           <button> Adicionar</button>
           
       </div>
    )
}