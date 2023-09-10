import './index.scss'
import '../../../assets/config/fonts-config.scss'
import Whatsapp from '../../../assets/images/icons/whatsapp.svg'
import Facebook from '../../../assets/images/icons/facebook.svg'
import X from '../../../assets/images/icons/x.svg'
import Instagram from '../../../assets/images/icons/instagram.svg'
import Telefone from '../../../assets/images/icons/telefone.svg'

export default function Rodape(){


    return(
        <main className='rodape'>
            <div>
                <h3 className='titutoContato'>Paginas</h3>
                <p>Cardápio</p>
                <p>Reserve</p>
                <p>Sobre Nos</p>
                <p>Página do Associado</p>
            </div>

            <div>
                <h3 className='titutoContato'>Unidades</h3>
                <p>Av Giovanni Gronchi Vila Andrade,74</p>
                <p>Rua Cachoeira Alta,610</p>
                <p>R. Itapechinga, 6-24</p>
            </div>

            <div>
                <h3 className='titutoContato'>Suporte</h3>
                <p>Fale Conosco</p>
            </div>

            <div>
                <div className='redes-sociais'>
                    <h4>Siga-nos nas redes Sociais</h4>
                    <div>
                        <img alt='whatsapp' src={Whatsapp} className='contato'/>
                        <img alt='instagram' src={Instagram} className='contato'/>
                        <img alt='facebook' src={Facebook} className='contato'/>
                        <img alt='x' src={X} className='contato'/>
                    </div>
                </div>

                <div className='contatos'>
                    <h4>Outros Contatos</h4>
                    <div>
                        <img alt='telefone' src={Telefone} className='contato'/>
                        <p>+55 11 993673706</p>
                    </div>
                    <div>
                        <img alt='telefone' src={Telefone} className='contato'/>
                        <p>+55 11 923063609</p>
                    </div>

                </div>
            </div>
        </main>
    )
}
