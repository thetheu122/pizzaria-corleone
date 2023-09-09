import './index.scss'
import '../../../assets/config/fonts-config.scss'
import Mais from '../../../assets/images/icons/more_icon.svg'
import Sino from '../../../assets/images/icons/order_on_icon.svg'
import Adm from '../../../assets/images/icons/adm_icon.svg'
import Cardapio from '../../../assets/images/icons/cardapio_icon.svg'
import Carrinho from '../../../assets/images/icons/shopping-cart_icon.svg'
import Conta from '../../../assets/images/icons/conta.svg'

export default function Cabecalho(){


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
                <div className='adm-page'>
                    <img alt='adm' src={Adm}/>
                    <p>Pagina do Associado</p>
                </div>
            </div>

            <div className='logo-principal'></div>

            <div className='direita-cabecalho'>
                <div className='cardapio'>
                    <img alt='cardapio' src={Cardapio}/>
                    <p>Cardapio</p>
                </div>
                <div className='carrinho'>
                    <img alt='Carrinho' src={Carrinho}/>
                    <p>Carrinho</p>
                </div>
                <div className='minha-conta'>
                    <img alt='minha-conta' src={Conta}/>
                    <p>Minha Conta</p>
                </div>
            </div>
        </main>
    )
}