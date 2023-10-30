import './index.scss'
import CompAtalhosAdm from "../../components/compAtalhosAdm"
import Lupa from '../../assets/images/pictures/lupa 1.png'
import Carrinho from '../../assets/img/carrinho.png'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import axios from 'axios'



export default function Favoritos() {
    const navigate = useNavigate();

    const [favorito, Setfavorito] = useState()
    const [tdsFavoritos, setTdsFavoritos] = useState([])

    const api = axios.create({
        baseURL: 'http://localhost:5000'
    })

    useEffect(() => {
        ListarFavoritos();
 
    }, [])

    async function ListarFavoritos() {
        const r = await axios.get(`http://localhost:5000/corleone/produtos/favoritos/listar/ranked`)
        setTdsFavoritos(r.data)
    }



    return (
        <div className='pagina-favoritos'>
            <CompAtalhosAdm />

            <div className='container-favoritos'>

                <div className='cabecalho-favoritos'>
                    <h1>Clientes</h1>
                </div>

                <div className='subtitulo-favoritos'>
                    <h1>Favoritos</h1>
                </div>




                <div className='conteudo-favoritos'>

                    <div className='principal-favorito'>

                        <div className="buscar">
                            <div ><img src={Lupa} /></div>
                            <input type="text" placeholder="busque por nome do produto" value={favorito} onChange={e => Setfavorito(e.target.value)} /*onKeyDown={handleKeyPress}*/ />
                        </div>

                        <table className='tabela-favoritos'>
                            <thead>
                                <tr>
                                    <th>imagem</th>
                                    <th>Contagem de Favoritos</th>
                                    <th>produto</th>

                                </tr>
                            </thead>

                            <tbody>


                                {tdsFavoritos.map(item =>
                                    <tr className="cada-linha">
                                        <td><img src={`${api.getUri()}/${item.imagem}` }/></td>
                                        <td>{item.qtd_favoritos}</td>
                                        <td>{item.produto}</td>

                                    </tr>
                                )}

                            </tbody>
                        </table>

                    </div>

                    <div className="parte-filtros-favoritos">
                        <div className="parte-favorito">
                            <h1>Ordenar por:</h1>
                            <div onClick={() => navigate('/ADM/carrinho')}>
                                <img src={Carrinho} />
                                <p>Carrinho</p>
                            </div>
                        </div>
                    </div>




                </div>


            </div>





        </div>
    )
}