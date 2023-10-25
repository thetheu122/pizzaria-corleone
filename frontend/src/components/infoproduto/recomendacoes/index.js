import './index.scss'
import estrela from '../../../assets/img/star_77949 1.png'
import carinho from '../../../assets/img/shopping-cart (1) 1.png'
import Modal from '../../user/modal';
import { useState } from 'react';


export default function Recomendacoes(props) {
    const [isModalOpen, setModalOpen] = useState(false);

    return (


        <div className='recomendacao '>

            <img className='recomendacao-comida-img' src={props.recomendacao?.imagem} />

            <div className='recomendacao-lateral' >


                <div>
                    <div>
                        <h3 className='name'>{props.recomendacao?.nome}</h3>
                    </div>
                    <div className='estrela'>
                        <h4>4.7</h4>
                        <img src={estrela} />
                    </div>

                </div>

                <div className='circulo-carinho' onClick={() => setModalOpen(!isModalOpen)}>

                    <img src={carinho} />
                </div>
            </div>

            {isModalOpen && <Modal onClose={() => setModalOpen(false)} />}


        </div>



    )
}