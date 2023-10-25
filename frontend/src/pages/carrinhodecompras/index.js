import './index.scss'

import CompAtalhosAdm from "../../components/compAtalhosAdm"
import Lupa from '../../assets/images/pictures/lupa 1.png'
import { useState } from "react"





export default function Carrinhodecompras() {

    const[filtro, setFiltro] = useState('')


   /* const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); 
            buscarProdutos(); 
          }
      }
*/



    return (
        <section className="pagina-carrinho">
            <CompAtalhosAdm/>
            <div className="container-carrinho">
                <div className='cabecalho-carrinho'>
                    <h1>Pedidos</h1>
                </div>

                <div className='subtitulo-carrinho'>
                    <h1>Rastreamento de Pedidos</h1>
                </div>


                <div className="conteudo-carrinho">
                    <div className="principal-carrinho">
                        <div className="buscar">
                            <div ><img src={Lupa} /></div>
                            <input type="text" placeholder="busque por nome do produto" value={filtro} onChange={e => setFiltro(e.target.value)} /*onKeyDown={handleKeyPress}*/ />
                        </div>

                        <table className='tabela-carrinho'>
                            <thead>
                                <tr>
                                    <th>img</th>
                                    <th>produto</th>
                                    <th>Removido</th>
                                    <th>adicionado</th>
                                </tr>
                            </thead>


                            <tbody>
                                <tr className="cada-linha">
                                    <td>..<img src="" /></td>
                                    <td>Calzone</td>
                                    <td>..<div></div></td>
                                    <td>..<div></div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    <div className="parte-filtros-carrinho">
                        <div className="parte-1">
                            <h1>Ordenar por:</h1>
                            <div>
                                <img src="" />
                                <p>Favoritos</p>
                            </div>
                        </div>


                        <div className="parte-2">
                            <div>
                                <input type="checkbox" />
                                <h4>Adicionado</h4>
                            </div>
                            <div className="linha-filtro"></div>
                            <div>
                                <input type="checkbox" />
                                <h4>Removido</h4>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </section>
    )
}