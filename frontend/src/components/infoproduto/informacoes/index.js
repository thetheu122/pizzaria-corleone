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

    const [estrela1, setEstrela1] = useState(true)
    const [estrela2, setEstrela2] = useState(true)
    const [estrela3, setEstrela3] = useState(true)
    const [estrela4, setEstrela4] = useState(true)
    const [estrela5, setEstrela5] = useState(true)

    const [produto, setProduto] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [comentarioo, setComentarioo] = useState([])
    const [digitado, setDigitado] = useState('')
    const [vizu, setVizu] = useState(true)
    const [resultado, setResultado] = useState(0)

    const [cadastroAtv, setCadastroAtv] = useState(false)

    const { id } = useParams();


    function alterar() {
        setEstrela1(!estrela1)

    }
    function alterar2() {
        setEstrela2(!estrela2)
        if (estrela2)
            setEstrela1(false)
    }
    function alterar3() {

        setEstrela3(!estrela3)
        if (estrela3)
            setEstrela1(false)
        setEstrela2(false)
    }
    function alterar4() {

        setEstrela4(!estrela4)

        if (estrela) {
            setEstrela1(false)
            setEstrela2(false)
            setEstrela3(false)
        }
    }
    function alterar5() {

        setEstrela5(!estrela5)

        if (estrela5) {
            setEstrela1(false)
            setEstrela2(false)
            setEstrela3(false)
            setEstrela4(false)
        }
    }



    useEffect(() => {
        async function listar() {
            const response = await axios.get('http://localhost:5000/produto/listar/' + id);
            setProduto(response.data);
        }
     
        listar();
    }, [id,digitado]);


    useEffect(() => {
        comentario()
    }, [comentarioo, digitado])

    async function comentario() {

        const respo = await axios.get('http://localhost:5000/listar/comentario/' + id);
        if (respo.data == '') {
            setVizu(false)
        }
        else {
            setComentarioo(respo.data);
            setVizu(true);
        }


    }

    function ttt(novoValor) {
        setCadastroAtv(novoValor);
      }

      
       
      async function media(estrelas){

        try {
            let qtd = 0;
    
            if (comentarioo.length > 0) {
                qtd = comentarioo.reduce((total, item) => total + item.avaliacao, 0);
            }
    
            let total = qtd + estrelas;
            let avl = comentarioo.length +1;
    
            let media ={media :(total / avl).toFixed(1)} 
            
       
    
            if (comentarioo.length > 0) {
                const resp = await axios.put('http://localhost:5000/media/' + id, media)
                toast.error(resp.data.err)
                console.log('1media:' +media.media)
            } 
            else {
                const valor = {
                    id: id,
                    media: media.media,
                };
    
                const resp = await axios.post('http://localhost:5000/media', valor);
                toast.error(resp.data.error);
                console.log('2media:' +media)

            }

        }  catch (error) {
            console.error(error);
        }
    }
    



    async function inserircomentario() {
        await setCadastroAtv(false)
        try {

            let erro = [];
            const palavras = ['merda', 'porra', 'puta', 'carralho', 'crl', 'cu', 'tmnc', 'vaca', 'buceta', 'mama', 'arrombado', 'descraça'];

            for (let cont of palavras) {
                if (digitado.includes(cont)) {
                    erro.push(cont);
                    break;
                }
            }

            if (erro.length === 0) {
                let estrelas = 0

                if (estrela5 == false) {
                    estrelas = 5
                }
                else {
                    if (estrela4 == false) {
                        estrelas = 4
                    }
                    else {
                        if (estrela3 == false) {
                            estrelas = 3
                        }
                        else {
                            if (estrela2 == false) {
                                estrelas = 2
                            }
                            else {
                                if (estrela1 == false) {
                                    estrelas = 1
                                }
                                else {
                                    estrelas = 6
                                }
                            }
                        }
                    }
                }

                let usuario = localStorage.getItem('usuario-logado');
                usuario = JSON.parse(usuario);
            

                let comen = {
                    comentario: digitado,
                    id: id,
                    cliente: usuario.id,
                    avaliacao: estrelas
                }

       
                media(estrelas)

                if (digitado.length > 0 ) {
                    if( estrelas === 0 || estrelas === 6){
                        toast.error('É necessario avaliar o comentario ')
                    }
                    else{
                        const resp = await axios.post('http://localhost:5000/comentario', comen);
                        setDigitado('');
                        setEstrela1(true)
                        setEstrela2(true)
                        setEstrela3(true)
                        setEstrela4(true)
                        setEstrela5(true)
                    }

             
                }

            } else {
                toast.info("Não permitimos palavras ofensivas no nosso site");
                setDigitado('')

            }
        } catch (error) {
            if (!localStorage.getItem('usuario-logado')) {
                setCadastroAtv(true)
                toast.error('Impossivel comentar, favor se cadastrar ou realizar login no nosso site')
                
            }
        }


    }






    return (
        <div className='informacoes'>
            <Cabecalho cadastro={cadastroAtv} funcao={ttt} />
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
                            <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="path-1-inside-1_22_170" fill="white">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.4239 1.72615C0.401344 3.7487 0.401343 7.02791 2.4239 9.05047L3.1963 9.82287L3.19503 9.82415L10.5194 17.1485L18.5761 9.09172C20.5987 7.06916 20.5987 3.78995 18.5761 1.76739C16.5536 -0.255162 13.2743 -0.255163 11.2518 1.76739L10.5206 2.49855L9.74822 1.72614C7.72567 -0.296411 4.44646 -0.29641 2.4239 1.72615Z" />
                                </mask>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.4239 1.72615C0.401344 3.7487 0.401343 7.02791 2.4239 9.05047L3.1963 9.82287L3.19503 9.82415L10.5194 17.1485L18.5761 9.09172C20.5987 7.06916 20.5987 3.78995 18.5761 1.76739C16.5536 -0.255162 13.2743 -0.255163 11.2518 1.76739L10.5206 2.49855L9.74822 1.72614C7.72567 -0.296411 4.44646 -0.29641 2.4239 1.72615Z" fill="white" />
                                <path d="M2.4239 9.05047L1.71679 9.75758L1.71679 9.75758L2.4239 9.05047ZM2.4239 1.72615L1.71679 1.01904L2.4239 1.72615ZM3.1963 9.82287L3.90341 10.53L4.61052 9.82287L3.90341 9.11577L3.1963 9.82287ZM3.19503 9.82415L2.48792 9.11704L1.78081 9.82415L2.48792 10.5313L3.19503 9.82415ZM10.5194 17.1485L9.81224 17.8556L10.5194 18.5627L11.2265 17.8556L10.5194 17.1485ZM18.5761 9.09172L17.869 8.38461L17.869 8.38461L18.5761 9.09172ZM18.5761 1.76739L19.2832 1.06029L19.2832 1.06029L18.5761 1.76739ZM11.2518 1.76739L10.5447 1.06029L10.5447 1.06029L11.2518 1.76739ZM10.5206 2.49855L9.81352 3.20566L10.5206 3.91276L11.2277 3.20566L10.5206 2.49855ZM9.74822 1.72614L9.04112 2.43325L9.04112 2.43325L9.74822 1.72614ZM3.13101 8.34336C1.49897 6.71133 1.49897 4.06528 3.13101 2.43325L1.71679 1.01904C-0.696287 3.43212 -0.696288 7.3445 1.71679 9.75758L3.13101 8.34336ZM3.90341 9.11577L3.13101 8.34336L1.71679 9.75758L2.4892 10.53L3.90341 9.11577ZM3.90213 10.5313L3.90341 10.53L2.4892 9.11577L2.48792 9.11704L3.90213 10.5313ZM11.2265 16.4414L3.90213 9.11704L2.48792 10.5313L9.81224 17.8556L11.2265 16.4414ZM17.869 8.38461L9.81224 16.4414L11.2265 17.8556L19.2832 9.79882L17.869 8.38461ZM17.869 2.4745C19.501 4.10653 19.501 6.75258 17.869 8.38461L19.2832 9.79882C21.6963 7.38574 21.6963 3.47337 19.2832 1.06029L17.869 2.4745ZM11.9589 2.4745C13.5909 0.842468 16.237 0.842468 17.869 2.4745L19.2832 1.06029C16.8701 -1.35279 12.9578 -1.35279 10.5447 1.06029L11.9589 2.4745ZM11.2277 3.20566L11.9589 2.4745L10.5447 1.06029L9.81352 1.79144L11.2277 3.20566ZM9.04112 2.43325L9.81352 3.20566L11.2277 1.79144L10.4553 1.01904L9.04112 2.43325ZM3.13101 2.43325C4.76304 0.801221 7.40908 0.80122 9.04112 2.43325L10.4553 1.01904C8.04225 -1.39404 4.12987 -1.39404 1.71679 1.01904L3.13101 2.43325Z" fill="black" mask="url(#path-1-inside-1_22_170)" />
                            </svg>
                        </div>
                    </div>
                    <div>
                    {produto.map((item) => (
                    <h2>{item.media !== null ? item.media : 0}</h2>
                    ))}
                        <h3></h3>
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
                    <input placeholder='Digite sua mensagem' value={digitado} onChange={(e) => setDigitado(e.target.value)} />
                    <div>
                        <img src={estrela1 ? estrelabranca : estrela} alt="Estrela Branca" onClick={alterar} />
                        <img src={estrela2 ? estrelabranca : estrela} alt="Estrela Branca" onClick={alterar2} />
                        <img src={estrela3 ? estrelabranca : estrela} alt="Estrela Branca" onClick={alterar3} />
                        <img src={estrela4 ? estrelabranca : estrela} alt="Estrela Branca" onClick={alterar4} />
                        <img src={estrela5 ? estrelabranca : estrela} alt="Estrela Branca" onClick={alterar5} />
                    </div>
                    <button onClick={inserircomentario}>Enviar</button>
                </div>
                <div className='secao-informacao-avaliacao-comentario'>
                    {vizu ? comentarioo.map((item) => (
                        <Comentarios usuario={{ nome: item.cliente, comentario: item.Comentario, avaliacao: item.avaliacao }} />
                    ))

                        : <div className='vizu'>
                            <h3> Este produto não possui nenhum comentario. Seja o primeiro a  comentar...</h3>
                        </div>

                    }



                </div>
            </div>
            {isModalOpen && <Modal onClose={() => setModalOpen(false)} />}
        </div>
    )
}
