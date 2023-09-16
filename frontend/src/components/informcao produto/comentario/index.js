import './index.scss'
import  estrelabranca from '../assets/images/Vector (14).png'
import  estrela       from '../assets/images/star_77949 1.png'
import  peril         from '../assets/images/Vector (15).png'

export default function Comentarios(props){

    return(
        
        <div className='comentarios'>
          
                <div className='comentarios-perfil'>
                        <img src={peril}/>
                        <h4>{props.usuario?.nome}</h4>
                </div>
                

                <div className='comentarios-estrelas'>
                    <img src={estrela}/>
                    <img src={estrela}/>
                    <img src={estrela}/>
                    <img src={estrelabranca}/>
                    <img src={estrelabranca}/>
                </div>

                <p> {props.usuario?.Comentario}
                </p>
        </div>
    )
}