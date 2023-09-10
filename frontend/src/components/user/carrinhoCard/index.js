import './index.scss'
import '../../../assets/config/fonts-config.scss'

import Star from '../../../assets/images/icons/star_icon.svg'
import Coracao from '../../../assets/images/icons/coracao_icon.svg'

export default function CardCarrinho() {


    return (
        <main className='cardCarrinho'>

            <div className='alimento'></div>

            <div className='pequenasInformacoes'>

                <div className='descricaoProduto'>
                    <h3>Pizza Margherita</h3>
                    <div className='circulo'>
                        <img alt='coracao' src={Coracao}/>
                    </div>
                </div>

                <div className='baixoDescricaoProdutos'>
                    <div className='pretin'>
                        <p>4.9</p>
                        <img alt='estrela' src={Star}/>
                    </div>
                    <p>R$ 80,00</p>
                </div>


            </div>
        </main>
    )
}