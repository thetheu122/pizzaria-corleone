import './index.scss'
import '../../assets/config/fonts-config.scss'
import { Link } from 'react-router-dom'

import Rodape from '../../components/user/rodape'
import Cabecalho from '../../components/user/cabecalho'
import Secao from '../../assets/images/pictures/ingredientes.png'

import CompSobre from '../../components/compSobre'

    
export default function Leading() {


    return (
        <main className='leadingPage'>
            <Cabecalho />
            <div className='introducao'>
                <h2>CORLEONE'S PIZZA</h2>
                <h1>Sabor digno de um Don</h1>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="29" viewBox="0 0 35 29" fill="none">
                        <path d="M2.88354 15.6783V18.3798C2.88354 18.6182 3.17562 18.7771 3.37034 18.7771H29.7546C30.0467 18.7771 30.2414 18.5387 30.2414 18.3798V15.6783C30.2414 15.5988 30.2414 15.4399 30.144 15.3604L24.3025 10.4341H8.91979L3.07826 15.3604C3.07826 15.5194 2.88354 15.5988 2.88354 15.6783ZM9.30923 11.3081H23.913L28.6836 15.281H18.1689C18.0715 15.9166 17.39 16.3139 16.8059 16.3139C16.027 16.3139 15.5402 15.9166 15.4428 15.281H4.73336L9.30923 11.3081ZM3.95449 16.0756H14.5666L14.664 16.155C15.1508 16.7112 15.9296 17.1085 16.7085 17.1085C17.4874 17.1085 18.2662 16.7907 18.753 16.155L18.8504 16.0756H29.4625V17.9825H3.95449V16.0756Z" />
                    </svg>
                    <p>Fazer Pedido</p>
                </button>
            </div>

            <div className='secaoDoisLeading'>
                <div className='propaganda1'>
                    <div className='sombrinha'>
                        <div>
                            <h2>Sabor Excepcional</h2>
                            <p>Palavras presentes em cada mordidas em nossas pizzas.</p>
                        </div>
                        <Link to='/cardapio' style={{ textDecoration: 'none', outline: 'none' }}>
                        <button>Confira Aqui</button>
                        </Link>
                    </div>
                </div>

                <div className='propaganda2'>
                    <div className='sombrinha'>
                        <div>
                            <h2>Qualidade</h2>
                            <p>Trago diretamente da Sicília, Itália. O sabor é indescritível.</p>
                        </div>
                        <Link to='/cardapio' style={{ textDecoration: 'none', outline: 'none' }}>
                        <button>Confira Aqui</button>
                        </Link>
                    </div>
                </div>

                <div className='propaganda3'>
                    <div className='sombrinha'>
                        <div>
                            <h2>Tradição</h2>
                            <p>Palavras presentes em cada mordidas em nossas pizzas.</p>
                        </div>
                        <Link to='/cardapio' style={{ textDecoration: 'none', outline: 'none' }}>
                        <button>Confira Aqui</button>
                        </Link>
                    </div>
                </div>

                <div className='yesterday'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="30" viewBox="0 0 100 30" fill="none">
                        <path d="M2 15H71" stroke="#53220D" stroke-width="3" stroke-linecap="round" />
                        <circle cx="85" cy="15" r="15" fill="#53220D" />
                        <path d="M83 9.5L90 16L83 21.5" stroke="white" stroke-linecap="round" />
                    </svg>
                    <h2>Ver Mais Aqui</h2>
                </div>
            </div>

            <div className='menuzin'>
                <h2>Temos pizza e além</h2>
                <div className='classeProduto'>
                    <div>
                        <div className='classePizza'/>
                        <h3>Pizza</h3>
                        <p>Chefe Responsável: Henrique Fogaça</p>
                    </div>

                    <div>
                        <div className='classeSobremesa'/>
                        <h3>Sobremesa</h3>
                        <p>Chefe Responsável: Henela Riso</p>
                    </div>

                    <div>
                        <div className='classeBebidas'/>
                        <h3>Bebidas</h3>
                        <p>Adega Responsável: Brunello di Montalcino</p>
                    </div>

                    <div>
                        <div className='classeVegana'/>
                        <h3>Opções Veganas</h3>
                        <p>Chefe Responsável: Alex Atala</p>
                    </div>
                </div>

                <button >
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="29" viewBox="0 0 35 29" fill="none">
                        <path d="M2.88354 15.6783V18.3798C2.88354 18.6182 3.17562 18.7771 3.37034 18.7771H29.7546C30.0467 18.7771 30.2414 18.5387 30.2414 18.3798V15.6783C30.2414 15.5988 30.2414 15.4399 30.144 15.3604L24.3025 10.4341H8.91979L3.07826 15.3604C3.07826 15.5194 2.88354 15.5988 2.88354 15.6783ZM9.30923 11.3081H23.913L28.6836 15.281H18.1689C18.0715 15.9166 17.39 16.3139 16.8059 16.3139C16.027 16.3139 15.5402 15.9166 15.4428 15.281H4.73336L9.30923 11.3081ZM3.95449 16.0756H14.5666L14.664 16.155C15.1508 16.7112 15.9296 17.1085 16.7085 17.1085C17.4874 17.1085 18.2662 16.7907 18.753 16.155L18.8504 16.0756H29.4625V17.9825H3.95449V16.0756Z" />
                    </svg>
                    <p>Fazer Pedido</p>
                </button>
            </div>
        <img src={Secao} className='ingredientes'/>

        <Link to='/sobrenos' className='compsobre'>
               <CompSobre/>
        </Link>
        
        <button className='redirecionar'>
            Experimente aqui a <strong>Pizza</strong> digna de um <strong>Don</strong>
        </button>
        <Rodape/>
        </main>
    )
}