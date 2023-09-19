import CompAtalhosAdm from "../../components/compAtalhosAdm"
import Lupa from '../../assets/images/pictures/lupa 1.png'
import Setaesquerda from '../../assets/images/pictures/seta-preta 1.png'
import SetaDireita from '../../assets/images/pictures/setadireita.png'
import Deletar from '../../assets/images/pictures/deletar.png'
import Editar from '../../assets/images/pictures/editar.png'
import Setaprabaixo from '../../assets/images/pictures/setaprabaixo.png'
import axios from 'axios' ;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 




import './index.scss'

export default function AlterarProdutosAdm() {

    const[nome,setNome] = useState('')
    const[tipo, setTipo] = useState('')
    const[ingredientes,setIngredientes] = useState('')
    const[preferencias, setPreferencias] = useState('')
    const[preco, setPreco] = useState('')
    const[descricao, setDescricao] = useState('')
    const[busca, setBusca] = useState('');
    const[listarProdutos, setListarprodutos] = useState([]);
    const[id, setId] = useState(0);


    const navigate = useNavigate();
    

    function alterarProduto(item) {
        setNome(item.Nome);
        setTipo(item.Classificação);
        setIngredientes(item.ingredientes);
        setPreferencias(item.ano);
        setPreco(item.idTipoVeiculo);
        setDescricao(item.Descrição);
      }

    async function buscarProdutos() {
        const resposta = await axios.get('http://localhost:5000/produto?busca=', busca)
        setListarprodutos(resposta.data)
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
                    const resposta = await axios.delete('http://localhost:5000/produto/'+ id)
                    alert('Produto removido')
                    buscarProdutos();
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





      async function alterarProduto() {
        navigate('/cadastroproduto/alterar/:idParam')
      }


    return (
        <div className="pagina-alterar-produtos">

            <CompAtalhosAdm/>

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
                            <input type="" placeholder="busque por nome do produto" onChange={e => setBusca(e.target.value)}/>
                        </div>

                        <div className="paginas">
                            <p>1 - 30 de 66 pedidos</p>
                            <img src={Setaesquerda} />
                            <img src={SetaDireita} />
                        </div>

                        <div className="produtos-listados">
                            <div className="comp-linha"></div>
                            <div className="titulos">
                                <h3>ID</h3>
                                <h3>Produto</h3>
                                <h3>Excluir</h3>
                                <h3>Alterar</h3>
                            </div>

                            <div className="comp-alterar">
                                
                                {listarProdutos.map(item =>
                                <div>
                                    <div className='comp-linha'></div>
                                        <div className="comp-produtos">
                                            <h4>#{item.ID}</h4>
                                            <h3>{item.Nome}</h3>
                                             <div onClick={() => apagarProduto(item.ID)}><img src={Deletar} /></div>
                                            <div onClick={() => alterarProduto(item)}><img src={Editar} /></div>
                                     </div>
                                     
                                    </div>
                                )}
                                
                                <div className='comp-linha'></div>
                            </div>

                            

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