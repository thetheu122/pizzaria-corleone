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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Informacoes(props) {
    const { id } = useParams();
    const idusuario = props

    function cadastro (){
        idusuario = 0 
        alert(idusuario)
    }

    const [produto, setProduto] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [ comentarioo , setComentarioo ] = useState([])
    const [ digitado , setDigitado ] = useState('')
    const [ vizu, setVizu] = useState(true)


    useEffect(() => {
        async function listar() {
            const response = await axios.get('http://localhost:5000/produto/listar/'+id);
            setProduto(response.data);
        }
        listar();
    }, [id]);

useEffect(()=>{
    comentario()
}, [comentarioo])

    async function comentario(){
        const respo = await axios.get('http://localhost:5000/listar/comentario/'+id)
    
        if(respo.data == ''){
          setVizu(true)
        }
        if(respo.lenght ==2 ){
            alert('erro')
        }    
        setComentarioo(respo.data)
    
    }

    async function inserircomentario() {
        let erro = [];
        const palavras = ['merda', 'porra', 'puta', 'carralho', 'crl', 'cu', 'tmnc', 'vaca', 'viado'];
      
        for (let cont of palavras) {
          if (digitado.includes(cont)) {
            erro.push(cont);
            break; 
          }
        }
      
        if (erro.length === 0) {
          let comen = {
            comentario: digitado,
            id: id,
            cliente: 1
          };
      
          const resp = await axios.post('http://localhost:5000/comentario', comen);
          setDigitado('');
        } else {
          toast.info("Não permitimos palavras ofensivas no nosso site");
          setDigitado('')
        }
      }
      
        
      

    

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
                    <input placeholder='Digite sua mensagem' value={digitado} onChange={ (e) => setDigitado ( e.target.value)}/>
                    <div>
                        <img src={estrelabranca} alt="Estrela Branca" />
                        <img src={estrelabranca} alt="Estrela Branca" />
                        <img src={estrelabranca} alt="Estrela Branca" />
                        <img src={estrelabranca} alt="Estrela Branca" />
                        <img src={estrelabranca} alt="Estrela Branca" />
                    </div>
                    <button onClick={inserircomentario}>Enviar</button>
                </div>
                <div className='secao-informacao-avaliacao-comentario'>
                    
                    {comentarioo.map((item) => (
                          <Comentarios usuario ={{nome :item.cliente , comentario:item.Comentario}}/>
                          ))}

                    
                </div>
            </div>
            {isModalOpen && <Modal onClose={() => setModalOpen(false)} />}
        </div>
    )
}
