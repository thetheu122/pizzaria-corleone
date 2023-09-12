import { useState } from 'react'
import { Link } from 'react-router-dom'

import './index.scss'
import '../../../assets/config/fonts-config.scss'

import Mais from '../../../assets/images/icons/more_icon.svg'
import Sino from '../../../assets/images/icons/order_on_icon.svg'
import Adm from '../../../assets/images/icons/adm_icon.svg'
import Cardapio from '../../../assets/images/icons/cardapio_icon.svg'
import CarrinhoIcon from '../../../assets/images/icons/shopping-cart_icon.svg';
import Conta from '../../../assets/images/icons/conta.svg'
import Carrinho from '../carrinho'

export default function Cabecalho(){

    const [sideBar, setSideBar] = useState(false)


    return(
        <main className='cabecalho'>
            <div className='esquerda-cabecalho'>
                <div className='sobre-nos'>
                    <img alt='sobre-nos' src={Mais}/>
                    <p>Sobre nos</p>
                </div>
                <div className='pedidos-ativos'>
                    <img alt='pedidos-ativos' src={Sino}/>
                    <p>Pedidos Ativos</p>
                </div>
                
                <Link to='/cadastro' style={{ textDecoration: 'none', outline: 'none' }}>
                <div className='adm-page'>
                    <img alt='adm' src={Adm}/>
                    <p>Cadastro</p>
                </div>
                </Link>
            </div>

            <Link to='/' style={{ textDecoration: 'none', outline: 'none' }}>
            <div className='logo-principal'></div>
            </Link>

            <div className='direita-cabecalho'>
                <Link to='/cardapio' style={{ textDecoration: 'none', outline: 'none' }}>
                <div className='cardapio'>
                    <img alt='cardapio' src={Cardapio}/>
                    <p>Cardapio</p>
                </div>
                </Link>
                <div className='carrinho' onClick={() => setSideBar(!sideBar)}>
                    <img alt='Carrinho' src={CarrinhoIcon}/>
                    <p>Carrinho</p>
                </div>
                <div className='minha-conta'>
                    <img alt='minha-conta' src={Conta}/>
                    <p>Minha Conta</p>
                </div>
            </div>

            {sideBar && <Carrinho onClose={() => setSideBar(false)}/>}
        </main>
    )
}