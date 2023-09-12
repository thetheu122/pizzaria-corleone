import './index.scss';
import '../../../assets/config/fonts-config.scss';

import Cozinheiro from '../../../assets/images/pictures/cozinheiro.png'
import CardCarrinho from '../carrinhoCard';

export default function Carrinho({ onClose }) {


    return (
        <div className='carrinhoSideBar'>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 15 17" fill="none" onClick={onClose} >
                <path d="M1 2.01746L13.3896 15.2992" stroke="#53220D" stroke-width="2" stroke-linecap="round" />
                <path d="M1.00049 15.2985L13.3901 2.01674" stroke="#53220D" stroke-width="2" stroke-linecap="round" />
            </svg>

            <div className='cozinheiroCentral'>
                <img src={Cozinheiro}/>
                <h2>Carrinho Vazio</h2>
                <p>Adicione itens ao seu carrinho</p>
            </div>

            <CardCarrinho />
        </div>
    )
}