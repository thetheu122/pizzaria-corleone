import './index.scss'
import '../../../assets/config/fonts-config.scss'

import Carrinho from '../../../assets/images/icons/shopping-cart_icon.svg'
import Star from '../../../assets/images/icons/star_icon.svg'

export default function CardProduct(props) {


    return (
        <main className='card-product'>

            <div className='produto'></div>

            <div className='descricao-produto'>

                <div className='descricaoProduto'>
                    <h3>Pizza Margherit</h3>
                    <div className='pretin'>
                        <p>4.9</p>
                        <img alt='estrela' src={Star} />
                    </div>
                </div>

                <div className='circulo'>
                    <img alt='carrinho' src={Carrinho} />
                </div>


            </div>
        </main>
    )
}