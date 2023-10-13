import './index.scss'
import Banco from '../../assets/img/banco.png'
import Dinheiro from '../../assets/img/money.png'
import Caixa from '../../assets/img/caixa.png'
import Desligado from '../../assets/img/on or off.png';
import CompAtalhosAdm from '../../components/compAtalhosAdm'


export default function Dashboard() {
    return (
        <section className='pagina-dashboard'>
            <CompAtalhosAdm/>
            <div className="container-dashboard">
                <div className="topo-dashboard">
                    <h1>Minha Operação</h1>
                </div>

                <div className='grafico-dashboard'>
                    <div className='total-vendas'>
                        <img src={Banco} />
                        <h1>6 vendas</h1>
                        <p>Quantidade de vendas realizadas neste dia</p>
                    </div>

                    <div className='custo-vendido'>
                        <img src={Dinheiro} />
                        <h1>R$ 139,51 vendido</h1>
                        <p>Valor total vendido neste dia</p>
                    </div>

                    <div className='produtos-cadastrados'>
                        <img src={Caixa} />
                        <h1>8 produtos</h1>
                        <p>Quantidade de produtos cadastrados</p>
                    </div>

                    <div className='produtos-ativos'>
                        <img src={Desligado} />
                        <h1>6 produtos ativo</h1>
                        <p>Quantidade de produtos ativos</p>
                    </div>
                </div>


                <div className='conteudo-dashboard'>
                    <h2>Dashboard</h2>
                    <p>últimas vendas realizadas no dia</p>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Cobrado</th>
                                <th>Pago</th>
                                <th>Troco</th>
                                <th>Método de Pag.</th>
                                <th>Pagamento</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className='conteudo-tabela'>
                                <td className='comp-linha'></td>
                                <tr className='cada-valor'>
                                    <td>6</td>
                                    <td>R$123,45</td>
                                    <td>R$123,45</td>
                                    <td>--</td>
                                    <td>CARTÃO</td>
                                    <td>DÉBITO</td>
                                </tr>

                                <td className='comp-linha'></td>
                                <tr className='cada-valor'>
                                    <td>6</td>
                                    <td>R$123,45</td>
                                    <td>R$123,45</td>
                                    <td>--</td>
                                    <td>CARTÃO</td>
                                    <td>DÉBITO</td>
                                </tr>

                                <td className='comp-linha'></td>
                                <tr className='cada-valor'>
                                    <td>6</td>
                                    <td>R$123,45</td>
                                    <td>R$150,00</td>
                                    <td>R$26,55</td>
                                    <td>DINHEIRO</td>
                                    <td>--</td>
                                </tr>

                                <td className='comp-linha'></td>
                                <tr className='cada-valor'>
                                    <td>6</td>
                                    <td>R$123,45</td>
                                    <td>R$150,00</td>
                                    <td>R$26,55</td>
                                    <td>DINHEIRO</td>
                                    <td>--</td>
                                </tr>

                                <td className='comp-linha'></td>
                                <tr className='cada-valor'>
                                    <td>6</td>
                                    <td>R$123,45</td>
                                    <td>R$150,00</td>
                                    <td>R$26,55</td>
                                    <td>DINHEIRO</td>
                                    <td>--</td>
                                </tr>

                                <td className='comp-linha'></td>
                                <tr className='cada-valor'>
                                    <td>6</td>
                                    <td>R$123,45</td>
                                    <td>R$150,00</td>
                                    <td>R$26,55</td>
                                    <td>DINHEIRO</td>
                                    <td>--</td>
                                </tr>

                                <td className='comp-linha'></td>
                                <tr className='cada-valor'>
                                    <td>6</td>
                                    <td>R$123,45</td>
                                    <td>R$150,00</td>
                                    <td>R$26,55</td>
                                    <td>DINHEIRO</td>
                                    <td>--</td>
                                </tr>

                                
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}