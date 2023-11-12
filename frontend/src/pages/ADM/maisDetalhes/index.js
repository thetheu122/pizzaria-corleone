
import CompAtalhosAdm from '../../../components/compAtalhosAdm'
import Lupa from '../../../assets/images/pictures/lupa 1.png'
import SetaEsquerda from '../../../assets/img/seta-esquerda.png'
import { useEffect, useState } from 'react'
import './index.scss'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

import { API_URL } from '../../../config/constants'


export default function MaisDetalhes() {

    const { id } = useParams();
    const [filtro, setFiltro] = useState('')
    const [detalhes, setDetalhes] = useState([])
    const [status, setStatus] = useState('')



    useEffect(() => {
        listarDetalhes()
        VeriStatus()
    }, [])

    async function listarDetalhes() {
        const r = await axios.get(`${API_URL}/pedido/detalhes/id/${id}`)
        const resp = r.data
        console.log(resp)
        setDetalhes(resp)
    }

    async function VeriStatus() {
        const r = await axios.get(`${API_URL}/pedido/detalhes/id/${id}`)
        const resp = r.data[0]
        const resposta = resp.status
        setStatus(resposta)
    }


    const navigate = useNavigate();

    function Voltar() {
        navigate('/listapedido')
    }

    const groupedDetalhes = detalhes.reduce((acc, item) => {
        if (!acc[item.idpedido]) {
            acc[item.idpedido] = {
                idpedido: item.idpedido,
                nome: item.nome,
                status: item.status,
                pagamento: item.pagamento,
                produtos: [item.produto],
                data: item.data.substr(0, 10),
                total: item.total,
                endereco: `${item.rua} - ${item.bairro} - ${item.cidade}`,
                telefone: item.telefone,
            };
        } else {
            acc[item.idpedido].produtos.push(item.produto);
        }
        return acc;
    }, {});



    return (
        <div className='pagina-mais-detalhes'>
            <CompAtalhosAdm />
            <div className='container-mais'>
                <div className='cabecalho-mais'>
                    <h2>Pedidos</h2>

                </div>

                <div className="sub-titulo-mais">
                    <h1>Mais detalhes</h1>

                    <div onClick={Voltar}>
                        <img src={SetaEsquerda} />
                        <p>voltar</p>
                    </div>
                </div>

                <div className='conteudo-mais'>

                    <div className='parte-dos-filtros'>
                        {status === 'Entregue' ?
                            <div className='pedido-mais'>
                                <p>Pedido Entregue</p>
                            </div> :
                            <div className='pedido-mais-cancelado'>
                                <p>Pedido Cancelado</p>
                            </div>}


                    </div>

                    <table className='tabela-mais-detalhes'>
                        <thead>
                            <tr>
                                <th className="compe-linha-detalhes"></th>
                                <th>ID</th>
                                <th className="comp-linha-detalhes"></th>
                                <th>Nome</th>
                                <th className="comp-linha-detalhes"></th>
                                <th>Pagamento</th>
                                <th className="comp-linha-detalhes"></th>
                                <th>Produto</th>
                                <th className="comp-linha-detalhes"></th>
                                <th>Data</th>
                                <th className="comp-linha-detalhes"></th>
                                <th>Total</th>
                                <th className="comp-linha-detalhes"></th>
                                <th>Endereço</th>
                                <th className="comp-linha-detalhes"></th>
                                <th>Telefone</th>
                            </tr>
                        </thead>


                        <tbody>
                            {Object.values(groupedDetalhes).map((item) => (
                                <tr key={item.idpedido}>
                                    <td className="compe-linha-detalhes"></td>
                                    <td>{item.idpedido}</td>
                                    <td className="comp-linha-detalhes"></td>
                                    <td>{item.nome}</td>
                                    <td className="comp-linha-detalhes"></td>
                                    <td>Dinheiro</td>
                                    <td className="comp-linha-detalhes"></td>
                                    <td>{item.produtos.join(', ')}</td>
                                    <td className="comp-linha-detalhes"></td>
                                    <td>{item.data}</td>
                                    <td className="comp-linha-detalhes"></td>
                                    <td>R$169,00</td>
                                    <td className="comp-linha-detalhes"></td>
                                    <td>{item.endereco}</td>
                                    <td className="comp-linha-detalhes"></td>
                                    <td>{item.telefone}</td>
                                </tr>
                            ))}
                        </tbody>


                    </table>



                </div>
            </div>
        </div>
    )
}

