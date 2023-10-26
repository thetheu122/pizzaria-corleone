import './index.scss'

import CompAtalhosAdm from "../../components/compAtalhosAdm"
import Lupa from '../../assets/images/pictures/lupa 1.png'
import ImgAleatria from '../../assets/images/pictures/pizza-marguerita.png'
import Coracao from '../../assets/img/coracao 2.png'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'





export default function Carrinhodecompras() {
    const navigate=useNavigate()

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
                    <h1>Clientes</h1>
                </div>

                <div className='subtitulo-carrinho'>
                    <h1>Carrinho de Compras</h1>
                </div>


                <div className="conteudo-carrinho">
                    <div className="principal-carrinho">
                        <div className="buscar">
                            <div ><img src={Lupa} /></div>
                            <input type="text" placeholder="busque por nome do produto" value={filtro} onChange={e => setFiltro(e.target.value)} /*onKeyDown={handleKeyPress}*/ />
                        </div>

                        <h5>Carrinho de Compras</h5>

                        <div className='linha-carrinho'></div>

                        <table className='tabela-carrinho'>
                            <thead>
                                <tr>
                                    <th>imagem</th>
                                    <th>produto</th>
                                    <th>Removido</th>
                                    <th>adicionado</th>
                                </tr>
                            </thead>


                            <tbody>
                                <tr className="cada-linha">
                                    <td><img src={ImgAleatria} /></td>
                                    <td>Pizza marguerita</td>
                                    <td ><div className='removido'></div></td>
                                    <td ><div className='adicionado'></div></td>
                                </tr>

                                <tr className="cada-linha">
                                    <td><img src={ImgAleatria} /></td>
                                    <td>Calzone</td>
                                    <td ><div className='removido'></div></td>
                                    <td ><div className='adicionado'></div></td>
                                </tr>

                                <tr className="cada-linha">
                                    <td><img src={ImgAleatria} /></td>
                                    <td>Pizza cannabis</td>
                                    <td ><div className='removido'></div></td>
                                    <td ><div className='adicionado'></div></td>
                                </tr>

                                <tr className="cada-linha">
                                    <td><img src={ImgAleatria} /></td>
                                    <td>Prosciutto</td>
                                    <td ><div className='removido'></div></td>
                                    <td ><div className='adicionado'></div></td>
                                </tr>

                                <tr className="cada-linha">
                                    <td><img src={ImgAleatria} /></td>
                                    <td>Calzone</td>
                                    <td ><div className='removido'></div></td>
                                    <td ><div className='adicionado'></div></td>
                                </tr>

                                <tr className="cada-linha">
                                    <td><img src={ImgAleatria} /></td>
                                    <td>Calzone</td>
                                    <td ><div className='removido'></div></td>
                                    <td ><div className='adicionado'></div></td>
                                </tr>

                                <tr className="cada-linha">
                                    <td><img src={ImgAleatria} /></td>
                                    <td>Calzone</td>
                                    <td ><div className='removido'></div></td>
                                    <td ><div className='adicionado'></div></td>
                                </tr>
                                <tr className="cada-linha">
                                    <td><img src={ImgAleatria} /></td>
                                    <td>Calzone</td>
                                    <td ><div className='removido'></div></td>
                                    <td ><div className='adicionado'></div></td>
                                </tr>                                <tr className="cada-linha">
                                    <td><img src={ImgAleatria} /></td>
                                    <td>Calzone</td>
                                    <td ><div className='removido'></div></td>
                                    <td ><div className='adicionado'></div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    <div className="parte-filtros-carrinho">
                        <div className="parte-1">
                            <h1>Ordenar por:</h1>
                            <div onClick={()=>navigate('/favoritos')}>
                                <img src={Coracao} />
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