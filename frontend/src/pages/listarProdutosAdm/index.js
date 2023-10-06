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
    const [restricoes, setRestricoes] = useState('')
    const [tipos, setTipos] = useState('')



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

    

    async function buscarPorTipo() {
        const resposta = await axios.get(`http://localhost:5000/produto/tipos/${tipos}`)
        setProdutos(resposta.data)
    }

    async function buscarPorRestricao() {
        const resposta = await axios.get(`http://localhost:5000/produto/restricoes/${restricoes}`)
        setProdutos(resposta.data)
    }










    async function apagarProduto(id) {
        try {
            const r = await axios.get('http://localhost:5000/produto');

            // Encontre o produto correto com base no ID
            const produto = r.data.find(item => item.ID === id);
            console.log(produto)

            if (produto) {
                const imagemid = produto.idimagem;
                const restricaoId = produto.idrestricao;

                alert(imagemid)
                alert(restricaoId)

                confirmAlert({
                    title: 'Produto',
                    message: 'Tem certeza que deseja apagar esse produto?',
                    buttons: [
                        {
                            label: 'Sim',
                            onClick: async () => {
                                if (!filtro && imagemid !== null) {
                                    try {
                                        const respostaImagem = await axios.delete(`http://localhost:5000/imagem/deletar/${imagemid}`);
                                        const respostaRestricao = await axios.delete(`http://localhost:5000/restricao/${restricaoId}`);
                                        const respostaProduto = await axios.delete(`http://localhost:5000/produto/${id}`);
                                        alert('Produto removido');
                                        Listando();
                                    } catch (err) {
                                        alert(err.response.data.erro);
                                    }
                                }

                                else if (filtro && imagemid !== null) {
                                    try {
                                        const respostaImagem = await axios.delete(`http://localhost:5000/imagem/deletar/${imagemid}`);
                                        const respostaRestricao = await axios.delete(`http://localhost:5000/restricao/${restricaoId}`);
                                        const respostaProduto = await axios.delete(`http://localhost:5000/produto/${id}`);
                                        alert('Produto removido');
                                        buscarProdutos();
                                    } catch (err) {
                                        alert(err.response.data.erro);
                                    }
                                }
                                else {
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




    const handleCheckboxChangerestriction = (value) => {
        
        if (restricoes.includes(value)) {
            // Se a restrição já estiver no array, remova-a
            setRestricoes(restricoes.filter((item) => item !== value));
        } else {
            // Caso contrário, adicione-a ao array
            setRestricoes([...restricoes, value]);
        }
    };

    const handleCheckboxChangetype = (value) => {
        
        if (tipos.includes(value)) {
            // Se a restrição já estiver no array, remova-a
            setTipos(tipos.filter((item) => item !== value));
        } else {
            // Caso contrário, adicione-a ao array
            setTipos([...tipos, value]);
        }
    };

    function buscar() {
        if (tipos == 'vinho' || tipos == 'sobremesa') {
            buscarPorTipo();
        } 

        else if (!restricoes && !tipos) {
            Listando();
        }

        else{
            buscarPorRestricao();
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
                                                    apagarProduto(item.ID, item.idimagem, item.idrestricao);
                                                }} /></td>
                                                <td className="alterar" ><img src={Editar}  onClick={() => {
                                                    console.log("ID do Produto:", item.ID);
                                                    console.log("ID da Restrição:", item.idrestricao);
                                                    console.log("ID da imagem:", item.idimagem);
                                                    entrarAlterar(item.ID, item.imagem, item.idrestricao)
                                                }} /></td>

                                            </tr>

                                        </tr>
                                    )}

                                </tbody>
                            </table>






                        </div>
                    </div>

                    <div className="filtros-produtos">
                        <div className="ordernar">
                            <h2>Ordernar por:</h2>
                            <div>
                                <input type="search" placeholder="Mais Vendidas" />
                                <img src={Setaprabaixo} />
                            </div>
                        </div>

                        <div className="bloco-filtro">
                            <div className="tipo">
                                <input type="checkbox"
                                    value="vegano"
                                    checked={restricoes.includes('vegano')}
                                    onChange={() => handleCheckboxChangerestriction("vegano")}
                                />
                                <p>Vegano(a)</p>
                            </div>
                            <div className="linha-produtos"></div>
                            <div className="tipo">
                                <input
                                    type="checkbox"
                                    value="Vegetariano"
                                    checked={restricoes.includes("Vegetariano")}
                                    onChange={() => handleCheckboxChangerestriction("Vegetariano")}
                                />
                                <p>Vegetariano(a)</p>
                            </div>
                            <div className="linha-produtos"></div>

                            <div className="tipo">
                                <input
                                    type="checkbox"
                                    value="ovo"
                                    checked={restricoes.includes("ovo")}
                                    onChange={() => handleCheckboxChangerestriction("ovo")}
                                />
                                <p>Intolerante a Ovo</p>
                            </div>
                            <div className="linha-produtos"></div>

                            <div className="tipo">
                                <input
                                    type="checkbox"
                                    value="gluten"
                                    checked={restricoes.includes("gluten")}
                                    onChange={() => handleCheckboxChangerestriction("gluten")}
                                />
                                <p>Intolerante a Glúten</p>
                            </div>
                            <div className="linha-produtos"></div>

                            <div className="tipo">
                                <input
                                    type="checkbox"
                                    value="lactose"
                                    checked={restricoes.includes("lactose")}
                                    onChange={() => handleCheckboxChangerestriction("lactose")}
                                />
                                <p>Intolerante a Lactose</p>
                            </div>
                            <div className="linha-produtos"></div>

                            <div className="tipo">
                                <input
                                    type="checkbox"
                                    value="vinho"
                                    checked={tipos.includes("vinho")}
                                    onChange={() => handleCheckboxChangetype("vinho")}
                                />
                                <p>Vinho</p>
                            </div>
                            <div className="linha-produtos"></div>

                            <div className="tipo">
                                <input
                                    type="checkbox"
                                    value="sobremesa"
                                    checked={tipos.includes("sobremesa")}
                                    onChange={() => handleCheckboxChangetype("sobremesa")}
                                />
                                <p>Sobremesa</p>
                            </div>

                            <button onClick={buscar}> BUSCAR</button>
                        </div>
                    </div>


                    <div className="bloquinho"></div>
                </div>

            </section>

        </div>
    )
}