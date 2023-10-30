import './index.scss'
import CompAtalhosAdm from "../../components/compAtalhosAdm"
import Lupa from '../../assets/images/pictures/lupa 1.png'
import Carrinho from '../../assets/img/carrinho.png'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import React from 'react'
import axios from 'axios'
import Coracao from '../../assets/img/Union (1).png'



export default function CadaFavorito() {
    const navigate = useNavigate();

    const [favorito, Setfavorito] = useState()
    const [tdsFavoritos, setTdsFavoritos] = useState([])
    const[nome, setNome]= useState('')
    const {id} = useParams();


    const api = axios.create({
        baseURL: 'http://localhost:5000'
    })

    useEffect(() => {
        ListarFavoritos()
        mostrarNome()

    }, [])
    console.log(id)

    async function ListarFavoritos() {
        const r = await axios.get(`http://localhost:5000/corleone/produtos/favoritos/usuario/${id}`)
        setTdsFavoritos(r.data)
    }

    async function mostrarNome() {
        const r = await axios.get(`http://localhost:5000/corleone/produtos/favoritos/usuario/${id}`)
        const resp = r.data[0]
        const resposta = resp.cliente
        console.log(resp)
        setNome(resposta)
    }



    return (
        <div className='pagina-cada-favoritos'>
            <CompAtalhosAdm />

            <div className='container-cada-favoritos'>

                <div className='cabecalho-cada-favoritos'>
                    <h1>Clientes</h1>
                </div>

                <div className='subtitulo-cada-favoritos'>
                    <h1>Favoritos</h1>
                </div>




                <div className='conteudo-cada-favoritos'>

                    <div className='principal-cada-favorito'>

                        <div className="buscar">
                            <div ><img src={Lupa} /></div>
                            <input type="text" placeholder="busque por nome do produto" value={favorito} onChange={e => Setfavorito(e.target.value)} /*onKeyDown={handleKeyPress}*/ />
                        </div>


                        <div className='titulo-cada-favorito'>
                            <h1>Produtos Favoritados pelo cliente {nome}</h1>
                        </div>

                        <div className='linha'></div>


                        <table className='tabela-cada-favoritos'>

                            <thead>

                            </thead>

                            <tbody>


                                {tdsFavoritos.map(item =>
                                    <tr className="cada-linha">
                                        <td className='imagem-fav'><img src={`${api.getUri()}/${item.imagem}`} /></td>
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