import CompAtalhosAdm from "../../components/compAtalhosAdm"
import Lupa from '../../assets/images/pictures/lupa 1.png'
import Setaesquerda from '../../assets/images/pictures/seta-preta 1.png'
import SetaDireita from '../../assets/images/pictures/setadireita.png'
import Deletar from '../../assets/images/pictures/deletar.png'
import Editar from '../../assets/images/pictures/editar.png'
import Setaprabaixo from '../../assets/images/pictures/setaprabaixo.png'
import axios from "axios"
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
// isntalar --> npm i react-confirm-alert --save       
//para parar o erro

import './index.scss'

export default function ListarProdutosAdm() {

    const [filtro, setFiltro] = useState('');
    const[produtosBusca, setProdutosBusca] = useState([])


    const [produtos, setProdutos] = useState([])


    const navigate = useNavigate();

    function entrarAlterar(id) {
        navigate(`/produto/alterar/${id}`)
    }

    useEffect(() => {
        Listando();
    }, [])







    async function buscarProdutos() {
        const resposta = await axios.get('http://localhost:5000/produto/' + filtro)
        setProdutos(resposta.data)
    }

        async function Listando() {
        const r = await axios.get('http://localhost:5000/produto')
        setProdutos(r.data)
    }


    async function apagarProduto(id) {

        confirmAlert({
            title: 'Produto',
            message: 'Tem certeza que deseja apagar esse produto?',
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        try {
                            const resposta = await axios.delete('http://localhost:5000/produto/' + id)
                            alert('Produto removido')
                            Listando();
                        } catch (err) {
                            alert(err.response.data.erro);
                        }
                    }
                },
                {
                    label: 'Não'
                }
            ]
        });

    }

    








    return (
        <div className="pagina-alterar-produtos">

            <CompAtalhosAdm />

            <section className="container-produtos">

                <div className="cabecalho">
                    <h2>Produtos</h2>
                </div>

                <div className="sub-titulo">
                    <h1>Lista de Produtos</h1>
                </div>


                <div className="conteudo">
                    <div className="produtos">
                        <div className="buscar">
                            <div onClick={buscarProdutos}><img src={Lupa} /></div>
                            <input type="text" placeholder="busque por nome do produto" value={filtro} onChange={e => setFiltro(e.target.value)} />
                        </div>

                        <div className="paginas">
                            <p>1 - 30 de 66 pedidos</p>
                            <img src={Setaesquerda} />
                            <img src={SetaDireita} />
                        </div>

                        <div className="produtos-listados">

                            <table className="tabela-listados">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Produto</th>
                                        <th>Excluir</th>
                                        <th>Alterar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    

                                    {produtos.map(item =>
                                        <tr className="cada-produto">
                                            <td className="comp-linha"></td>
                                            <tr className="lista-produto">
                                            <td>#{item.ID}</td>
                                            <td>{item.nome}</td>
                                            <td className='deletar' onClick={() => apagarProduto(item.ID)}><img src={Deletar} /></td>
                                            <td className="alterar" onClick={() => entrarAlterar(item.ID)}><img src={Editar} /></td>

                                            </tr>
                                            
                                        </tr>
                                        )}
                        
                                </tbody>
                            </table>
   

                            



                        </div>
                    </div>

                    <div className="filtros">
                        <div className="ordernar">
                            <h2>Ordernar por:</h2>
                            <div>
                                <input type="search" placeholder="Mais Vendidas" />
                                <img src={Setaprabaixo} />
                            </div>
                        </div>

                        <div className="bloco-filtro">
                            <div className="tipo">
                                <input type="checkbox" />
                                <p>Vegana</p>
                            </div>
                            <div className="linha"></div>
                            <div className="tipo">
                                <input type="checkbox" />
                                <p>Vegetariana</p>
                            </div>
                            <div className="linha"></div>
                            <div className="tipo">
                                <input type="checkbox" />
                                <p>Intolerante a Ovo</p>
                            </div>
                            <div className="linha"></div>
                            <div className="tipo">
                                <input type="checkbox" />
                                <p>Intolerante a Glúten</p>
                            </div>
                            <div className="linha"></div>
                            <div className="tipo">
                                <input type="checkbox" />
                                <p>Intolerante a Lactose</p>
                            </div>
                            <div className="linha"></div>
                            <div className="tipo">
                                <input type="checkbox" />
                                <p>Vinho</p>
                            </div>
                            <div className="linha"></div>
                            <div className="tipo">
                                <input type="checkbox" />
                                <p>Sobremesa</p>
                            </div>

                        </div>
                    </div>

                    <div className="bloquinho"></div>
                </div>

            </section>

        </div>
    )
}