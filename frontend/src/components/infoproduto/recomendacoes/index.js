import './index.scss'
import estrela from '../../../assets/img/star_77949 1.png'
import carinho from '../../../assets/img/shopping-cart (1) 1.png'
import Modal from '../../user/modal';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../../config/constants';


export default function Recomendacoes(props) {
    const [isModalOpen, setModalOpen] = useState(false);
    const [sugestao, setSugestao] = useState([])
    const [numeroAleatorio, setNumeroAleatorio] = useState(null);


    const api = axios.create({
        baseURL: API_URL
    })

    useEffect(() => {
        gerarNumeroAleatorio()

        ListarSugestao()
    }, [])






    const gerarNumeroAleatorio = () => {
      const novoNumero = Math.floor(Math.random() * 10) + 1;
      console.log(`numero aleatorio: ${numeroAleatorio}`)
      setNumeroAleatorio(novoNumero);
    };


    async function ListarSugestao() {
        const r = await axios.get(`${API_URL}/corleone/sugestao/pizza/${numeroAleatorio}`)
        console.log(r.data)
        setSugestao(r.data)
    }



    return (


        <div className='recomendacao '>

            <img className='recomendacao-comida-img' src={`${api.getUri()}/${props.recomendacao?.imagem}`} />

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