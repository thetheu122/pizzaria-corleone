import CompAtalhosAdm from "../../../components/compAtalhosAdm"
import Lupa from '../../../assets/images/pictures/lupa 1.png'
import Setaesquerda from '../../../assets/images/pictures/seta-preta 1.png'
import SetaDireita from '../../../assets/images/pictures/setadireita.png'
import Deletar from '../../../assets/images/pictures/deletar.png'
import Editar from '../../../assets/images/pictures/editar.png'
import Setaprabaixo from '../../../assets/images/pictures/setaprabaixo.png'
import axios from "axios"
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import React from "react"
// isntalar --> npm i react-confirm-alert --save       
//para parar o erro

import './index.scss'

import { API_URL } from "../../../config/constants"


export default function ListarProdutosAdm() {

    const [filtro, setFiltro] = useState('');
    const [produtos, setProdutos] = useState([])
    const [restricoes, setRestricoes] = useState([])
    const [tipos, setTipos] = useState([])



    const navigate = useNavigate();

    function entrarAlterar(id) {
        navigate(`/produto/alterar/${id}`)
    }

    useEffect(() => {

        if (filtro.length > 0){
            buscarProdutos()
        }else {
            Listando();
        }
        


    }, [filtro])

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); 
            buscarProdutos(); 
          }
      }




    //fiz algumas alteracoes no back de produtos, que foi colocar no select produto(listar por nome e listar todos) para aparecer o id da restricao tbm


    //alteração no banco de dados, coloquei ON DELETE CASCADE na tabela restricao
    //alteracoes no backend. alteraçoes no restricao e adicionados algumas coisas no produto
    


    //BUSCAR OU LISTAR OS PRODUTOS
    async function buscarProdutos() {
        const resposta = await axios.get(API_URL + '/produto/' + filtro)
        setProdutos(resposta.data)
    }

    async function Listando() {
        const r = await axios.get(API_URL + '/produto')
        console.log(r.data)
        setProdutos(r.data)
    }

    async function buscarPorTipo() {
        const resposta = await axios.get(`${API_URL}/produto/tipos/${tipos}`)
        setProdutos(resposta.data)
    }

    async function buscarPorRestricao() {
        const resposta = await axios.get(`${API_URL}/produto/restricoes/${restricoes}`)
        setProdutos(resposta.data)
    }




    //DELETAR UM PRODUTO
    async function apagarProduto(id) {
        try {
            const r = await axios.get(API_URL + '/produto');


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
                                if (!filtro) {
                                    try {
                                        const respostaImagem = await axios.delete(`${API_URL}/imagem/deletar/${imagemid}`);
                                        const respostaRestricao = await axios.delete(`${API_URL}/restricao/${restricaoId}`);
                                        const respostaProduto = await axios.delete(`${API_URL}/produto/${id}`);
                                        alert('Produto removido');
                                        Listando();
                                    } catch (err) {
                                        alert(err.response.data.erro);
                                    }
                                }

                                else if (filtro) {
                                    try {
                                        const respostaImagem = await axios.delete(`${API_URL}/imagem/deletar/${imagemid}`);
                                        const respostaRestricao = await axios.delete(`${API_URL}/restricao/${restricaoId}`);
                                        const respostaProduto = await axios.delete(`${API_URL}/produto/${id}`);
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



    //FILTRAR OS PRODUTOS CLICANDO NO CHECKBOX

    
    const handleCheckboxChange = (value, category) => {
        if (category === "restricoes") {
          if (restricoes.includes(value)) {
            setRestricoes(restricoes.filter((item) => item !== value));
          } else {
            setRestricoes([...restricoes, value]);
          }
        } else if (category === "tipos") {
          if (tipos.includes(value)) {
            setTipos(tipos.filter((item) => item !== value));
          } else {
            setTipos([...tipos, value]);
          }
        }
      };

      function buscar() {
        if (tipos.length > 0) {
          buscarPorTipo();
        } else if (restricoes.length > 0) {
          buscarPorRestricao();
        } else {
          Listando();
        }
      }



    //NÃO REPETIR PRODUTOS
/*
    async function NaoRepetir() {
        const r = await axios.get(`${API_URL}/produto`)
        const resp = r.data


        const categoriasVistas = {};
        const produtosRepetidos = {};
        const produtosUnicos = [];

        resp.forEach((produto) => {
            const { ID } = produto;

            if (categoriasVistas[ID]) {
                
                if (!produtosRepetidos[ID]) {
                    produtosRepetidos[ID] = ID;
                  }
            } else {
                
                categoriasVistas[ID] = true;
            }
        });


        produtos.forEach((produto) => {
            const { ID } = produto;
            if (!produtosRepetidos[ID] || produtosRepetidos[ID] === ID) {
              produtosUnicos.push(produto);
            }
          });

          console.log(produtosUnicos)
        
          return produtosUnicos;

        

    }

    function mostrarProdutosUnicos(produtos) {
        const categoriasVistas = {};
        const produtosRepetidos = {};
        const produtosUnicos = [];
      
        produtos.forEach((produto) => {
          const { nome, categoria } = produto;
      
          if (categoriasVistas[categoria]) {
            if (!produtosRepetidos[categoria]) {
              produtosRepetidos[categoria] = nome;
            }
          } else {
            categoriasVistas[categoria] = true;
          }
        })
      
        produtos.forEach((produto) => {
          const { nome, categoria } = produto;
          if (!produtosRepetidos[categoria] || produtosRepetidos[categoria] === nome) {
            produtosUnicos.push(produto);
          }
        });
      
        return produtosUnicos;
      }
      
      */
      
 


    return (
        <div className="pagina-alterar-produtos">

            <CompAtalhosAdm />

            <section className="container-produtos">

                <div className="cabecalho-listar">
                    <h2>Produtos</h2>
                </div>

                <div className="sub-titulo-listar">
                    <h1>Lista de Produtos</h1>
                </div>


                <div className="conteudo">
                    <div className="produtos">
                        <div className="buscar">
                            <div onClick={buscarProdutos}><img src={Lupa} /></div>
                            <input type="text" placeholder="busque por nome do produto" value={filtro} onChange={e => setFiltro(e.target.value)} onKeyDown={handleKeyPress} />
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
                                            
                                            <tr className="lista-produto">
                                                <td>#{item.ID}</td>
                                                <td>{item.nome}</td>
                                                <td className='deletar' ><img src={Deletar} onClick={() => {
                                                    apagarProduto(item.ID, item.idimagem, item.idrestricao);
                                                }} /></td>
                                                <td className="alterar" ><img src={Editar} onClick={() => {
                                                    console.log("ID do Produto:", item.ID);
                                                    console.log("ID da Restrição:", item.idrestricao);
                                                    console.log("ID da imagem:", item.idimagem);
                                                    entrarAlterar(item.ID, item.idimagem, item.idrestricao)
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
                           
                        </div>

                        <div className="bloco-filtro">
                            <div className="tipo">
                                <input type="checkbox"
                                    value="vegano"
                                    checked={restricoes.includes('vegano')}
                                    onChange={() => handleCheckboxChange("vegano", "restricoes")}
                                />
                                <p>Vegano(a)</p>
                            </div>
                            <div className="linha-produtos"></div>
                            <div className="tipo">
                                <input
                                    type="checkbox"
                                    value="Vegetariano"
                                    checked={restricoes.includes("Vegetariano")}
                                    onChange={() => handleCheckboxChange("Vegetariano", "restricoes")}
                                />
                                <p>Vegetariano(a)</p>
                            </div>
                            <div className="linha-produtos"></div>

                            <div className="tipo">
                                <input
                                    type="checkbox"
                                    value="ovo"
                                    checked={restricoes.includes("ovo")}
                                    onChange={() => handleCheckboxChange("ovo", "restricoes")}
                                />
                                <p>Intolerante a Ovo</p>
                            </div>
                            <div className="linha-produtos"></div>

                            <div className="tipo">
                                <input
                                    type="checkbox"
                                    value="gluten"
                                    checked={restricoes.includes("gluten")}
                                    onChange={() => handleCheckboxChange("gluten", "restricoes")}
                                />
                                <p>Intolerante a Glúten</p>
                            </div>
                            <div className="linha-produtos"></div>

                            <div className="tipo">
                                <input
                                    type="checkbox"
                                    value="lactose"
                                    checked={restricoes.includes("lactose")}
                                    onChange={() => handleCheckboxChange("lactose", "restricoes")}
                                />
                                <p>Intolerante a Lactose</p>
                            </div>
                            <div className="linha-produtos"></div>


                            <button onClick={buscar}> BUSCAR</button>
                        </div>
                    </div>


                    <div className="bloquinho"></div>
                </div>

            </section>

        </div>
    )
}