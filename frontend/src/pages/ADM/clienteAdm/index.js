import './index.scss'
import CompAtalhosAdm from '../../../components/compAtalhosAdm';
import { useState } from 'react';


export default function ClienteAdm() {
    const [pesquisa, setPesquisa] = useState('')

    return (
        <div className='comp'>
            <CompAtalhosAdm />

            <div className='cont-dois'>


                <div className='titulo-pedidos'>
                    <h1>Pedidos</h1>
                </div>

                <div className='lista-subtitulo'>
                    <h1>Rastreamento de Pedidos</h1>
                </div>



                <div className='container-tres'>

                    <div className='cont-quatro'>
                        <div className="input-container">
                            <input
                                type='text'
                                placeholder='Pesquise aqui'
                                value={pesquisa}
                                onChange={e => setPesquisa(e.target.value)}
                            />
                            <div className="input-image"></div>
                        </div>

                        <div className='filtro'>
                            <div className="filtro-image"></div>
                            <h2>Todos os filtros</h2>
                        </div>


                        <h2 className='entregue-dois'>Status: Entregue</h2>
                        <h2 className='dataa'>Data: 30/07/2023</h2>
                    </div>


                    

                    <table className="tabela-cliente">
                        <thead>
                            <tr>
                                <th>Horáio do Pedido</th>
                                <th>Produto</th>
                                <th>Tipo de produto</th>
                                <th>Preço</th>
                                <th>Cliente</th>
                                <th className='status'>Status</th>
                                <th className='pedido'>Andamento do pedido</th>
                            </tr>
                        </thead>

                        <tr className='linha-separadora'></tr>


                        <tbody>
        
                            <tr className="linha-separadora">
                            
                                <td>21:20h</td>
                                <td>Cannoli</td>
                                <td>Sobremesa</td>
                                <td>50,00 R$</td>
                                <td>Rick Lima</td>


                                <td className='con'>Concluido</td>
                                

                                    <td className='pedido-em-andamento'>
                                        <div class="pedido-andamento">
                                            <div class="etapa">
                                                <div class="bolinha">1</div>
                                                <div class="linha"></div>
                                            </div>
                                            <div class="etapa">
                                                <div class="bolinha">2</div>
                                                <div class="linha"></div>
                                            </div>
                                            <div class="etapa">
                                                <div class="bolinha">3</div>
                                            </div>
                                        </div>
                                    </td>
                                    



                            </tr>

                            <tr className="linha-separadora">
                                <td>21:20h</td>
                                <td>Cannoli</td>
                                <td>Sobremesa</td>
                                <td>50,00 R$</td>
                                <td>Rick Lima</td>


                                <td className='con'>Concluido</td>
                                

                                    <td className='pedido-em-andamento'>
                                        <div class="pedido-andamento">
                                            <div class="etapa">
                                                <div class="bolinha">1</div>
                                                <div class="linha"></div>
                                            </div>
                                            <div class="etapa">
                                                <div class="bolinha">2</div>
                                                <div class="linha"></div>
                                            </div>
                                            <div class="etapa">
                                                <div class="bolinha">3</div>
                                            </div>
                                        </div>
                                    </td>
                                    



                            </tr>

                            <tr className="linha-separadora">
                                <td>21:20h</td>
                                <td>Cannoli</td>
                                <td>Sobremesa</td>
                                <td>50,00 R$</td>
                                <td>Rick Lima</td>


                                <td className='con'>Concluido</td>
                                

                                    <td className='pedido-em-andamento'>
                                        <div class="pedido-andamento">
                                            <div class="etapa">
                                                <div class="bolinha">1</div>
                                                <div class="linha"></div>
                                            </div>
                                            <div class="etapa">
                                                <div class="bolinha">2</div>
                                                <div class="linha"></div>
                                            </div>
                                            <div class="etapa">
                                                <div class="bolinha">3</div>
                                            </div>
                                        </div>
                                    </td>
                                    



                            </tr>

                            <tr className="linha-separadora">
                                <td>21:20h</td>
                                <td>Cannoli</td>
                                <td>Sobremesa</td>
                                <td>50,00 R$</td>
                                <td>Rick Lima</td>


                                <td className='con'>Concluido</td>
                                

                                    <td className='pedido-em-andamento'>
                                        <div class="pedido-andamento">
                                            <div class="etapa">
                                                <div class="bolinha">1</div>
                                                <div class="linha"></div>
                                            </div>
                                            <div class="etapa">
                                                <div class="bolinha">2</div>
                                                <div class="linha"></div>
                                            </div>
                                            <div class="etapa">
                                                <div class="bolinha">3</div>
                                            </div>
                                        </div>
                                    </td>
                                    



                            </tr>

                            <tr className="linha-separadora">
                                <td>21:20h</td>
                                <td>Cannoli</td>
                                <td>Sobremesa</td>
                                <td>50,00 R$</td>
                                <td>Rick Lima</td>


                                <td className='con'>Concluido</td>
                                

                                    <td className='pedido-em-andamento'>
                                        <div class="pedido-andamento">
                                            <div class="etapa">
                                                <div class="bolinha">1</div>
                                                <div class="linha"></div>
                                            </div>
                                            <div class="etapa">
                                                <div class="bolinha">2</div>
                                                <div class="linha"></div>
                                            </div>
                                            <div class="etapa">
                                                <div class="bolinha">3</div>
                                            </div>
                                        </div>
                                    </td>
                                    



                            </tr>

                            <tr className="linha-separadora">
                                <td>21:20h</td>
                                <td>Cannoli</td>
                                <td>Sobremesa</td>
                                <td>50,00 R$</td>
                                <td>Rick Lima</td>


                                <td className='con'>Concluido</td>
                                

                                    <td className='pedido-em-andamento'>
                                        <div class="pedido-andamento">
                                            <div class="etapa">
                                                <div class="bolinha">1</div>
                                                <div class="linha"></div>
                                            </div>
                                            <div class="etapa">
                                                <div class="bolinha">2</div>
                                                <div class="linha"></div>
                                            </div>
                                            <div class="etapa">
                                                <div class="bolinha">3</div>
                                            </div>
                                        </div>
                                    </td>
                                    



                            </tr>


                            
                            <tr className="linha-separadora">
                                <td>21:20h</td>
                                <td>Cannoli</td>
                                <td>Sobremesa</td>
                                <td>50,00 R$</td>
                                <td>Rick Lima</td>


                                <td className='con'>Concluido</td>
                                

                                    <td className='pedido-em-andamento'>
                                        <div class="pedido-andamento">
                                            <div class="etapa">
                                                <div class="bolinha">1</div>
                                                <div class="linha"></div>
                                            </div>
                                            <div class="etapa">
                                                <div class="bolinha">2</div>
                                                <div class="linha"></div>
                                            </div>
                                            <div class="etapa">
                                                <div class="bolinha">3</div>
                                            </div>
                                        </div>
                                    </td>
                                    



                            </tr>

                            
                            <tr className="linha-separadora">
                                <td>21:20h</td>
                                <td>Cannoli</td>
                                <td>Sobremesa</td>
                                <td>50,00 R$</td>
                                <td>Rick Lima</td>


                                <td className='con'>Concluido</td>
                                

                                    <td className='pedido-em-andamento'>
                                        <div class="pedido-andamento">
                                            <div class="etapa">
                                                <div class="bolinha">1</div>
                                                <div class="linha"></div>
                                            </div>
                                            <div class="etapa">
                                                <div class="bolinha">2</div>
                                                <div class="linha"></div>
                                            </div>
                                            <div class="etapa">
                                                <div class="bolinha">3</div>
                                            </div>
                                        </div>
                                    </td>
                                    



                            </tr>

                            
                            <tr className="linha-separadora">
                                <td>21:20h</td>
                                <td>Cannoli</td>
                                <td>Sobremesa</td>
                                <td>50,00 R$</td>
                                <td>Rick Lima</td>


                                <td className='con'>Concluido</td>
                                

                                    <td className='pedido-em-andamento'>
                                        <div class="pedido-andamento">
                                            <div class="etapa">
                                                <div class="bolinha">1</div>
                                                <div class="linha"></div>
                                            </div>
                                            <div class="etapa">
                                                <div class="bolinha">2</div>
                                                <div class="linha"></div>
                                            </div>
                                            <div class="etapa">
                                                <div class="bolinha">3</div>
                                            </div>
                                        </div>
                                    </td>
                                    



                            </tr>

                            
                            <tr className="linha-separadora">
                                <td>21:20h</td>
                                <td>Cannoli</td>
                                <td>Sobremesa</td>
                                <td>50,00 R$</td>
                                <td>Rick Lima</td>


                                <td className='con'>Concluido</td>
                                

                                    <td className='pedido-em-andamento'>
                                        <div class="pedido-andamento">
                                            <div class="etapa">
                                                <div class="bolinha">1</div>
                                                <div class="linha"></div>
                                            </div>
                                            <div class="etapa">
                                                <div class="bolinha">2</div>
                                                <div class="linha"></div>
                                            </div>
                                            <div class="etapa">
                                                <div class="bolinha">3</div>
                                            </div>
                                        </div>
                                    </td>
                                    



                            </tr>

                            
                            <tr className="linha-separadora">
                                <td>21:20h</td>
                                <td>Cannoli</td>
                                <td>Sobremesa</td>
                                <td>50,00 R$</td>
                                <td>Rick Lima</td>


                                <td className='con'>Concluido</td>
                                

                                    <td className='pedido-em-andamento'>
                                        <div class="pedido-andamento">
                                            <div class="etapa">
                                                <div class="bolinha">1</div>
                                                <div class="linha"></div>
                                            </div>
                                            <div class="etapa">
                                                <div class="bolinha">2</div>
                                                <div class="linha"></div>
                                            </div>
                                            <div class="etapa">
                                                <div class="bolinha">3</div>
                                            </div>
                                        </div>
                                    </td>
                                    



                            </tr>

                            
                            <tr className="linha-separadora">
                                <td>21:20h</td>
                                <td>Cannoli</td>
                                <td>Sobremesa</td>
                                <td>50,00 R$</td>
                                <td>Rick Lima</td>


                                <td className='con'>Concluido</td>
                                

                                    <td className='pedido-em-andamento'>
                                        <div class="pedido-andamento">
                                            <div class="etapa">
                                                <div class="bolinha">1</div>
                                                <div class="linha"></div>
                                            </div>
                                            <div class="etapa">
                                                <div class="bolinha">2</div>
                                                <div class="linha"></div>
                                            </div>
                                            <div class="etapa">
                                                <div class="bolinha">3</div>
                                            </div>
                                        </div>
                                    </td>
                                    



                            </tr>

                            
                            <tr className="linha-separadora">
                                <td>21:20h</td>
                                <td>Cannoli</td>
                                <td>Sobremesa</td>
                                <td>50,00 R$</td>
                                <td>Rick Lima</td>


                                <td className='con'>Concluido</td>
                                

                                    <td className='pedido-em-andamento'>
                                        <div class="pedido-andamento">
                                            <div class="etapa">
                                                <div class="bolinha">1</div>
                                                <div class="linha"></div>
                                            </div>
                                            <div class="etapa">
                                                <div class="bolinha">2</div>
                                                <div class="linha"></div>
                                            </div>
                                            <div class="etapa">
                                                <div class="bolinha">3</div>
                                            </div>
                                        </div>
                                    </td>
                                    



                            </tr>

                            
                            <tr className="linha-separadora">
                                <td>21:20h</td>
                                <td>Cannoli</td>
                                <td>Sobremesa</td>
                                <td>50,00 R$</td>
                                <td>Rick Lima</td>


                                <td className='con'>Concluido</td>
                                

                                    <td className='pedido-em-andamento'>
                                        <div class="pedido-andamento">
                                            <div class="etapa">
                                                <div class="bolinha">1</div>
                                                <div class="linha"></div>
                                            </div>
                                            <div class="etapa">
                                                <div class="bolinha">2</div>
                                                <div class="linha"></div>
                                            </div>
                                            <div class="etapa">
                                                <div class="bolinha">3</div>
                                            </div>
                                        </div>
                                    </td>
                                    



                            </tr>

                            
                            <tr className="linha-separadora">
                                <td>21:20h</td>
                                <td>Cannoli</td>
                                <td>Sobremesa</td>
                                <td>50,00 R$</td>
                                <td>Rick Lima</td>


                                <td className='con'>Concluido</td>
                                

                                    <td className='pedido-em-andamento'>
                                        <div class="pedido-andamento">
                                            <div class="etapa">
                                                <div class="bolinha">1</div>
                                                <div class="linha"></div>
                                            </div>
                                            <div class="etapa">
                                                <div class="bolinha">2</div>
                                                <div class="linha"></div>
                                            </div>
                                            <div class="etapa">
                                                <div class="bolinha">3</div>
                                            </div>
                                        </div>
                                    </td>
                                    



                            </tr>

                            
                            <tr className="linha-separadora">
                                <td>21:20h</td>
                                <td>Cannoli</td>
                                <td>Sobremesa</td>
                                <td>50,00 R$</td>
                                <td>Rick Lima</td>


                                <td className='con'>Concluido</td>
                                

                                    <td className='pedido-em-andamento'>
                                        <div class="pedido-andamento">
                                            <div class="etapa">
                                                <div class="bolinha">1</div>
                                                <div class="linha"></div>
                                            </div>
                                            <div class="etapa">
                                                <div class="bolinha">2</div>
                                                <div class="linha"></div>
                                            </div>
                                            <div class="etapa">
                                                <div class="bolinha">3</div>
                                            </div>
                                        </div>
                                    </td>
                                    



                            </tr>

                            
                            <tr className="linha-separadora">
                                <td>21:20h</td>
                                <td>Cannoli</td>
                                <td>Sobremesa</td>
                                <td>50,00 R$</td>
                                <td>Rick Lima</td>


                                <td className='con'>Concluido</td>
                                

                                    <td className='pedido-em-andamento'>
                                        <div class="pedido-andamento">
                                            <div class="etapa">
                                                <div class="bolinha">1</div>
                                                <div class="linha"></div>
                                            </div>
                                            <div class="etapa">
                                                <div class="bolinha">2</div>
                                                <div class="linha"></div>
                                            </div>
                                            <div class="etapa">
                                                <div class="bolinha">3</div>
                                            </div>
                                        </div>
                                    </td>
                                    



                            </tr>

                            
                            <tr className="linha-separadora">
                                <td>21:20h</td>
                                <td>Cannoli</td>
                                <td>Sobremesa</td>
                                <td>50,00 R$</td>
                                <td>Rick Lima</td>


                                <td className='con'>Concluido</td>
                                

                                    <td className='pedido-em-andamento'>
                                        <div class="pedido-andamento">
                                            <div class="etapa">
                                                <div class="bolinha">1</div>
                                                <div class="linha"></div>
                                            </div>
                                            <div class="etapa">
                                                <div class="bolinha">2</div>
                                                <div class="linha"></div>
                                            </div>
                                            <div class="etapa">
                                                <div class="bolinha">3</div>
                                            </div>
                                        </div>
                                    </td>
                                    



                            </tr>

                        </tbody>

                    </table>



                </div>

            </div>
        </div>

    )
}

