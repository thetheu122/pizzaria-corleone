import './index.scss'
import Lupa from '../../assets/images/pictures/lupa 1.png'
import Deletar from '../../assets/images/pictures/deletar.png'
import Filtro from '../../assets/img/filtro vendas.png'
import { useState } from 'react'
import CompAtalhosAdm from '../../components/compAtalhosAdm'


export default function Vendas() {

    const[filtro, setFiltro] = useState('')
    
    return (
        <div className='pagina-vendas'>

            <CompAtalhosAdm/>
            <div className='container-vendas'>
                <div className='cabecalho-vendas'>
                    <h1>Vendas</h1>
                </div>

                <div className='conteudo-produtos-vendas'>
        
                        <div className='conteudo-input'>
                        <div className="input-container">
                            <input
                                type='text'
                                placeholder='Busque por id ou nome do cliente'
                                value={filtro}
                                onChange={e => setFiltro(e.target.value)}
                            />
                            <div className="input-image"></div>
                        </div>

                        <div className="parte-dois-filtros">
                            <img src={Filtro} />
                            <h2>Todos os filtro</h2>
                        </div>
                        </div>
                    

                    <h4 className='vendas'>$ Vendas</h4>

                     

                    <table className='tabela-vendas'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Cobrado</th>
                                <th>Pago</th>
                                <th>Troco</th>
                                <th>Método de pag.</th>
                                <th>Pagamento</th>
                                <th>Excluir</th>
                            </tr>
                        </thead>

                        <tr className='linha-separadora'></tr>

                        <tbody>
                       
                                <tr className='cada-valor-vendas'>
                                    <td>6</td>
                                    <td>R$123,45</td>
                                    <td>R$123,45</td>
                                    <td>--</td>
                                    <td>CARTÃO</td>
                                    <td>DÉBITO</td>
                                    <td><img src={Deletar}/></td>
                                </tr>

                               
                                <tr className='cada-valor-vendas'>
                                    <td>6</td>
                                    <td>R$123,45</td>
                                    <td>R$123,45</td>
                                    <td>--</td>
                                    <td>CARTÃO</td>
                                    <td>DÉBITO</td>
                                    <td><img src={Deletar}/></td>
                                </tr>

                                <tr className='cada-valor-vendas'>
                                    <td>6</td>
                                    <td>R$123,45</td>
                                    <td>R$123,45</td>
                                    <td>--</td>
                                    <td>CARTÃO</td>
                                    <td>DÉBITO</td>
                                    <td><img src={Deletar}/></td>
                                </tr>

                                <tr className='cada-valor-vendas'>
                                    <td>6</td>
                                    <td>R$123,45</td>
                                    <td>R$123,45</td>
                                    <td>--</td>
                                    <td>CARTÃO</td>
                                    <td>DÉBITO</td>
                                    <td><img src={Deletar}/></td>
                                </tr>

                                <tr className='cada-valor-vendas'>
                                    <td>6</td>
                                    <td>R$123,45</td>
                                    <td>R$123,45</td>
                                    <td>--</td>
                                    <td>CARTÃO</td>
                                    <td>DÉBITO</td>
                                    <td><img src={Deletar}/></td>
                                </tr>

                                <tr className='cada-valor-vendas'>
                                    <td>6</td>
                                    <td>R$123,45</td>
                                    <td>R$123,45</td>
                                    <td>--</td>
                                    <td>CARTÃO</td>
                                    <td>DÉBITO</td>
                                    <td><img src={Deletar}/></td>
                                </tr>

                                <tr className='cada-valor-vendas'>
                                    <td>6</td>
                                    <td>R$123,45</td>
                                    <td>R$123,45</td>
                                    <td>--</td>
                                    <td>CARTÃO</td>
                                    <td>DÉBITO</td>
                                    <td><img src={Deletar}/></td>
                                </tr>

                                <tr className='cada-valor-vendas'>
                                    <td>6</td>
                                    <td>R$123,45</td>
                                    <td>R$123,45</td>
                                    <td>--</td>
                                    <td>CARTÃO</td>
                                    <td>DÉBITO</td>
                                    <td><img src={Deletar}/></td>
                                </tr>

                                <tr className='cada-valor-vendas'>
                                    <td>6</td>
                                    <td>R$123,45</td>
                                    <td>R$123,45</td>
                                    <td>--</td>
                                    <td>CARTÃO</td>
                                    <td>DÉBITO</td>
                                    <td><img src={Deletar}/></td>
                                </tr>

                                <tr className='cada-valor-vendas'>
                                    <td>6</td>
                                    <td>R$123,45</td>
                                    <td>R$123,45</td>
                                    <td>--</td>
                                    <td>CARTÃO</td>
                                    <td>DÉBITO</td>
                                    <td><img src={Deletar}/></td>
                                </tr>

                                
                           
                        </tbody>
                    </table>
                    </div>
                

                </div>
            </div>
      
       
    )
}