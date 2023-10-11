
import CompAtalhosAdm from '../../components/compAtalhosAdm'
import Lupa from '../../assets/images/pictures/lupa 1.png'
import SetaEsquerda from '../../assets/img/seta-esquerda.png'
import { useEffect, useState } from 'react'
import './index.scss'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'



export default function MaisDetalhes() {

    const {id} = useParams();
    const[idProduto, setIdProduto] = useState(id)
    const[ filtro, setFiltro] = useState('')
    const[detalhes, setDetalhes] = useState([])


    useEffect(() => {
        console.log(id)
    }, [])

    async function PegarInfoPoduto() {
        const r = await axios.get(`http://localhost:5000/produto/listar/${idProduto}`)
        setDetalhes(r.data)
    }

    async function PegarInfoCliente() {
        const r = await axios.get(`http://localhost:5000/produto/listar/${idProduto}`)
        setDetalhes(r.data)
    }

    async function PegarInfoPagamento() {
        
    }

    async function PegarInfoEndereco() {
        const r = await axios.get(`http://localhost:5000/produto/endereco`)
        setDetalhes(r.data)
    }

    async function PegarInfoCliente() {
        
    }
    
    


    const navigate = useNavigate();

    function Voltar() {
        navigate('/')
    }

    /*<tbody>
                        {detalhes.map(item => 
                            <tr>
                            <td className="comp-linha"></td>
                                <td>{item.}</td>
                    
                                <td>wendel</td>
                                <td className="comp-linha"></td>
                                <td>wendel</td>
                                <td className="comp-linha"></td>
                                <td>wendel</td>
                                <td className="comp-linha"></td>
                                <td>wendel</td>
                                <td className="comp-linha"></td>
                                <td>wendel</td>
                                <td className="comp-linha"></td>
                                <td>wendel</td>
                                <td className="comp-linha"></td>
                                <td>wendel</td>
                            </tr>
                            )}
                            
                        </tbody>*/

    return (
        <div className='pagina-mais-detalhes'>
            <CompAtalhosAdm />
            <div className='container-mais'>
                <div className='cabecalho-mais'>
                    <h2>Produtos</h2>
                </div>

                <div className="sub-titulo-mais">
                    <h1>Lista de Produtos</h1>

                    <div onClick={Voltar}>
                        <img src={SetaEsquerda} />
                        <p>voltar</p>
                    </div>
                </div>

                <div className='conteudo-mais'>

                    <div className='parte-dos-filtros'>

                        <div className="buscar-mais">
                            <div><img src={Lupa} /></div>
                            <input type="text" placeholder="Busque por ID " value={filtro} onChange={e => setFiltro(e.target.value)} />
                        </div>

                        <div className='pedido-mais'>
                            <p>Pedido Entregue</p>
                        </div>
                    </div>

                    <table className='tabela-mais-detalhes'>
                        <thead>
                            <tr>
                            <th className="comp-linha"></th>
                                <th>ID</th>
                                <th className="comp-linha"></th>
                                <th>Nome</th>
                                <th className="comp-linha"></th>
                                <th>Pagamento</th>
                                <th className="comp-linha"></th>
                                <th>Produto</th>
                                <th className="comp-linha"></th>
                                <th>Data</th>
                                <th className="comp-linha"></th>
                                <th>Total</th>
                                <th className="comp-linha"></th>
                                <th>Endereço</th>
                                <th className="comp-linha"></th>
                                <th>Telefone</th>
                            </tr>
                        </thead>

                        
                    </table>



                </div>
            </div>
        </div>
    )
}

