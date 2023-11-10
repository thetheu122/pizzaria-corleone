import './index.scss'
import CompAtalhosAdm from "../../../components/compAtalhosAdm"
import Lupa from '../../../assets/images/pictures/lupa 1.png'
import Carrinho from '../../../assets/img/carrinho.png'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import React from 'react'
import axios from 'axios'
import Coracao from '../../../assets/img/Union (1).png'

import { API_URL } from '../../../config/constants'



export default function CadaFavorito() {
    const navigate = useNavigate();

    const [favorito, Setfavorito] = useState()
    const [tdsFavoritos, setTdsFavoritos] = useState([])
    const [nome, setNome] = useState('')
    const [selecao, setSelecao] = useState('');
    const [buscarNome, setBuscarnome] = useState('')
    const { id } = useParams();


    const api = axios.create({
        baseURL: API_URL
    })

    useEffect(() => {

        if (buscarNome.length > 0) {
            ListarnomeFavoritos()
        }

        else {
            ListarFavoritos()

        }
        mostrarNome()
    }, [buscarNome])


    async function ListarFavoritos() {
        const r = await axios.get(`${API_URL}/corleone/produtos/favoritos/usuario/${id}`)
        setTdsFavoritos(r.data)
    }

    async function mostrarNome() {
        const r = await axios.get(`${API_URL}/corleone/produtos/favoritos/usuario/${id}`)
        const resp = r.data[0]
        const resposta = resp.cliente
        console.log(resp)
        setNome(resposta)
    }




    async function ListarnomeFavoritos() {
        const r = await axios.get(API_URL + '/corleone/produto/' + buscarNome)
        setTdsFavoritos(r.data)

    }

    const handleSelecaoChange = (event) => {
        const valorSelecionado = event.target.value;
        if (valorSelecionado === 'carrinho') {
            navigate(`/corleone/usuario/carrinho/listar/${id}`);
        } else if (valorSelecionado === 'favoritos') {
            navigate('/favoritos');
        }
    };


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

                        <div className='favorito-buscar'>

                            <div className="buscar">
                                <div ><img src={Lupa} /></div>
                                <input type="text" placeholder="busque por nome do produto" value={buscarNome} onChange={e => setBuscarnome(e.target.value)} /*onKeyDown={handleKeyPress}*/ />
                            </div>

                            <div className="parte-filtros-carrinho">
                                <label htmlFor="carrinho"></label>
                                <select id="carrinho" onChange={handleSelecaoChange} value={selecao}>
                                    <optgroup label="Ordenar">
                                        <option value="favoritos">Favoritos</option>
                                        <option value="carrinho">Carrinho</option>

                                    </optgroup>
                                </select>
                            </div>

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






                </div>


            </div>





        </div>
    )
}