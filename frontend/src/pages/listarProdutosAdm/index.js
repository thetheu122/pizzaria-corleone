import CompAtalhosAdm from "../../components/compAtalhosAdm"
import Lupa from '../../assets/images/pictures/lupa 1.png'
import Setaesquerda from '../../assets/images/pictures/seta-preta 1.png'
import SetaDireita from '../../assets/images/pictures/setadireita.png'
import Deletar from '../../assets/images/pictures/deletar.png'
import Editar from '../../assets/images/pictures/editar.png'
import Setaprabaixo from '../../assets/images/pictures/setaprabaixo.png'
import axios from "axios"
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
// isntalar --> npm i react-confirm-alert --save       
//para parar o erro

import './index.scss'

export default function ListarProdutosAdm() {

    const [filtro, setFiltro] = useState('');
    const [produtos, setProdutos] = useState([])



    const navigate = useNavigate();

    function entrarAlterar(id) {
        navigate(`/produto/alterar/${id}`)
    }

    useEffect(() => {
        Listando();
        
    }, [])




//fiz algumas alteracoes no back de produtos, que foi colocar no select produto(listar por nome e listar todos) para aparecer o id da restricao tbm


//alteração no banco de dados, coloquei ON DELETE CASCADE na tabela restricao
//alteracoes no backend. alteraçoes no restricao e adicionados algumas coisas no produto
//PROJETO FINALIZADOOOOOOOOOOOOOOOOOOOOOOOO


    async function buscarProdutos() {
        const resposta = await axios.get('http://localhost:5000/produto/' + filtro)
        setProdutos(resposta.data)
    }

        async function Listando() {
        const r = await axios.get('http://localhost:5000/produto')


        setProdutos(r.data)
    }



    

    


    async function apagarProduto(id) {
        try {
            const r = await axios.get('http://localhost:5000/produto');
            
            // Encontre o produto correto com base no ID
            const produto = r.data.find(item => item.ID === id);
            
            if (produto) {
                const imagemid = produto.idimagem;
                const restricaoId = produto.idrestricao;
                
                alert(restricaoId);
    
                confirmAlert({
                    title: 'Produto',
                    message: 'Tem certeza que deseja apagar esse produto?',
                    buttons: [
                        {
                            label: 'Sim',
                            onClick: async () => {
                                if (restricaoId !== null && imagemid !== null) {
                                    try {
                                        const respostaImagem = await axios.delete(`http://localhost:5000/imagem/deletar/${imagemid}`);
                                        const respostaRestricao = await axios.delete(`http://localhost:5000/restricao/${restricaoId}`);
                                        const respostaProduto = await axios.delete(`http://localhost:5000/produto/${id}`);
                                        alert('Produto removido');
                                        Listando();
                                    } catch (err) {
                                        alert(err.response.data.erro);
                                    }
                                } else {
                                    alert('Os IDs de restrição ou imagem estão nulos.');
                                }
                            }
                        },
                        {
                            label: 'Não'
                        }
                    ]
                });
            } else {
                alert('Produto não encontrado.');
            }
        } catch (err) {
            alert('Erro ao buscar produtos.');
        }
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
                                            <td className='deletar' ><img src={Deletar} onClick={() => {
            console.log("ID do Produto:", item.ID);
            console.log("ID da Restrição:", item.idrestricao);
            console.log("ID da imagem:", item.idimagem);
            apagarProduto(item.ID, item.idimagem, item.idrestricao);
        }} /></td>
                                            <td className="alterar" ><img src={Editar} onClick={() => entrarAlterar(item.ID, item.idrestricao)}/></td>

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