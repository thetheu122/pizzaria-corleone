import { Link, useParams } from 'react-router-dom';
import './index.scss'

import Pizza from '../../../assets/img/descricao.png';
import comida from '../../../assets/img/document 1.png'
import Voltar from '../../../assets/img/seta-esquerda.png'
import estrela from '../../../assets/img/star_77949 1.png'
import carrinho from '../../../assets/img/shopping-cart (1) 1.png'
import duplaestrela from '../../../assets/img/image 52.png'
import coracao from '../../../assets/img/Union (1).png'
import estrelabranca from '../../../assets/img/Vector (14).png'

import Recomendacoes from '../recomendacoes/index';
import Cabecalho from '../../user/cabecalho';
import Comentarios from '../comentario/index';
import Modal from '../../user/modal'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Informacoes() {
    const { id } = useParams();
    const [produto, setProduto] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        async function listar() {
            const response = await axios.get('http://localhost:5000/produto/listar/'+ id);
            setProduto(response.data);
        }
        listar();
    }, [id]);

    return (
        <div className='informacoes'>
            <Cabecalho />
            <div className='informacoes-titulo'>
                {produto.map((item) => (
                    <h1>Pizza {item.nome}</h1>
                ))}
            </div>
            <div className='secao-01-voltar'>
                <img src={Voltar} alt="Voltar" />
                <Link className='link' to='/cardapio'>Voltar</Link>
            </div>
            <div className='secao-01-pizza'>
                <div className='secao-01-pizza-descricao'>
                    
                    <img src={Pizza} alt="Pizza" />
                    <div className='secao-01-ingredientes'>
                    {produto.map((item) => (
                    <p>Pizza {item.ingredientes}</p>
                ))}
                    </div>
                </div>
                <div className='secao-01-parte-lateral'>
                    <div className='secao-01-parte-lateral-pizza'>

                    {produto.map((item) => (
                      <h1> {item.nome}</h1>
                       ))}
                         {produto.map((item) => (
                              <h2> {item.preço}</h2>
                ))}
                        <div className='coracao'>
                            <img src={coracao} alt="Coração" />
                        </div>
                    </div>
                    <div>
                        <h3>4.1</h3>
                        <img src={estrela} alt="Estrela" />
                    </div>
                    <div>
                        <div className='button-01' onClick={() => setModalOpen(!isModalOpen)}>
                            <img src={carrinho} alt="Carrinho" />
                            <p>Adicione ao carrinho</p>
                        </div>
                        <div className='button-02'>
                            <img src={duplaestrela} alt="Dupla Estrela" />
                            <p>Avalie nosso serviço</p>
                        </div>
                    </div>
                    <h4>Você talvez gostaria</h4>
                    <Recomendacoes recomendacao={{ nome: "calloni", imagem: comida }} />

                    {produto.map((item) => (
                    <p>Pizza {item.descricao}</p>
                ))}               
                
             </div>
            </div>
            <div className='secao-informacao-avaliacao'>
                <h1>Avaliações</h1>
                <div className='secao-informacao-avaliacao-input'>
                    <input placeholder='Digite sua mensagem' />
                    <div>
                        <img src={estrelabranca} alt="Estrela Branca" />
                        <img src={estrelabranca} alt="Estrela Branca" />
                        <img src={estrelabranca} alt="Estrela Branca" />
                        <img src={estrelabranca} alt="Estrela Branca" />
                        <img src={estrelabranca} alt="Estrela Branca" />
                    </div>
                    <button>Enviar</button>
                </div>
                <div className='secao-informacao-avaliacao-comentario'>
                    <Comentarios usuario={{ nome: "Regina", Comentario: "Farinha, água, sal, fermento, molho de tomate, muçarela fresca, manjericão fresco, azeite de oliva extra virgem" }} />
                    <Comentarios usuario={{ nome: "Matheus", Comentario: "Farinha, água, sal, fermento, molho de tomate, muçarela fresca, manjericão fresco, azeite de oliva extra virgem" }} />
                    <Comentarios usuario={{ nome: "Bruno", Comentario: "Farinha, água, sal, fermento, molho de tomate, muçarela fresca, manjericão fresco, azeite de oliva extra virgem" }} />
                    <Comentarios usuario={{ nome: "João", Comentario: "Farinha, água, sal, fermento, molho de tomate, muçarela fresca, manjericão fresco, azeite de oliva extra virgem" }} />
                </div>
            </div>
            {isModalOpen && <Modal onClose={() => setModalOpen(false)} />}
        </div>
    )
}
