import './index.scss'
import '../../../assets/config/fonts-config.scss'

import LinhaAmarela from '../../../assets/images/icons/linha-amarela.svg'
//import Pizza from '../../../assets/images/icons/carrinho-completo.png'
import Coracao from '../../../assets/images/icons/coracao_icon.svg'
import Carrinho from '../../../assets/images/icons/shopping-cart_icon.svg'
import Seta from '../../../assets/images/icons/seta_icon.svg'
import Star from '../../../assets/images/icons/star_icon.svg'

export default function CardProduto(){


    return(
        <main className='card-produto'>
            <img alt='linha' src={LinhaAmarela} className='linha1'/>
            <div className='produto'>
                <div className='circulo'>
                    <img alt='coracao' src={Coracao}/>
                </div>
            </div>
            <img alt='linha' src={LinhaAmarela} className='linha2'/>

            <div className='descricao-produto'>

                <div className='precoNome'>
                    <h3>Pizza Margherita</h3>
                    <p>R$ 71,00</p>
                </div>

                <div className='baixo'>
                    <div>
                        <div className='circulo'>
                            <img alt='carrinho' src={Carrinho}/>
                        </div>
                        <div className='mais-detalhes'>
                            <p>Mais Detalhes</p>
                            <img alt='seta' src={Seta}/>
                        </div>
                    </div>
                    <div className='pretin'>
                        <p>4.9</p>
                        <img alt='estrela' src={Star}/>
                    </div>
                </div>
            </div>
        </main>
    )
}