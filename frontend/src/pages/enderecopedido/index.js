
import CompPedido from '../../components/compPedido'
import './index.scss'

export default function EnderecoPedido() {
    return (
        <div className="pagina-endereco">
            <div className="container">
                <div className='andamento'>
                    <CompPedido />
                </div>

                <div className='conteudo'>
                    <div className='endereco'>
                        <div className='detalhes'>
                            <p>Entregar em</p>
                            <h3>Próximo de R. Pedro Escobar</h3>
                            <p>Jardim Eliana</p>
                        </div>
                        <div>
                            <h2>Alterar</h2>
                        </div>
                    </div>

                    <div className='entrega'>
                        <h1>Tipos de entrega</h1>
                        <div className='padrao'>
                            <div className='tipo'>
                                <h3>padrão</h3>
                                <p>Hoje, 29-39 min</p>
                            </div>
                            <div className='forma'>
                                <h4>Grátis</h4>
                                <div></div>
                            </div>
                        </div>


                        <div className='padrao'>
                            <div className='tipo'>
                                <h3>Rápida</h3>
                                <p>Hoje, 24-30 min</p>
                            </div>
                            <div className='forma-2'>
                                <h5>R$ 9,99</h5>
                                <div></div>
                            </div>
                        </div>
                    </div>

                    <div className='final'>
                        <div className='precos'>
                            <h2>Taxa de entrega</h2>
                            <h4>Grátis</h4>
                        </div>

                        <div className='botoes'>
                            <button>Confirmar</button>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
}