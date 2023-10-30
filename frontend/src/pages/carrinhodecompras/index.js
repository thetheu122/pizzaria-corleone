import './index.scss'

import CompAtalhosAdm from "../../components/compAtalhosAdm"
import Lupa from '../../assets/images/pictures/lupa 1.png'
import ImgAleatria from '../../assets/images/pictures/pizza-marguerita.png'
import Coracao from '../../assets/img/coracao 2.png'

import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'






export default function Carrinhodecompras() {
    const navigate = useNavigate()

    const [filtro, setFiltro] = useState(null)
    const [carrinho, setCarrinho] = useState([])
    const [tdscarrinhos, setTdscarrinhos] = useState([])
    const [adicionadoCheckbox, setAdicionadoCheckbox] = useState(false);
    const [removidoCheckbox, setRemovidoCheckbox] = useState(false);




    const api = axios.create({
        baseURL: 'http://localhost:5000'
    })

    async function ListarCarrinho() {
        const r = await axios.get(`http://localhost:5000/corleone/usuario/carrinho/listar`)
        setTdscarrinhos(r.data)
    }

    useEffect(() => {
        ListarCarrinho();

    }, [])

    useEffect(() => {
        ListarCarrinho();
    }, []);

    const handleFilter = () => {
        if (filtro === "adicionado") {
            const disponiveis = tdscarrinhos.filter(item => item.carrinho === "disponivel");
            setCarrinho(disponiveis);
        } else if (filtro === "removido") {
            const removidos = tdscarrinhos.filter(item => item.carrinho === "indisponivel");
            setCarrinho(removidos);
        }
    };
    




    /* const handleKeyPress = (e) => {
         if (e.key === 'Enter') {
             e.preventDefault(); 
             buscarProdutos(); 
           }
       }
 */








    return (
        <section className="pagina-carrinho">
            <CompAtalhosAdm />
            <div className="container-carrinho">
                <div className='cabecalho-carrinho'>
                    <h1>Clientes</h1>
                </div>

                <div className='subtitulo-carrinho'>
                    <h1>Carrinho de Compras</h1>
                </div>


                <div className="conteudo-carrinho">
                    <div className="principal-carrinho">
                        <div className="buscar">
                            <div ><img src={Lupa} /></div>
                            <input type="text" placeholder="busque por nome do produto" value={filtro} onChange={e => setFiltro(e.target.value)} /*onKeyDown={handleKeyPress}*/ />
                        </div>



                        <table className='tabela-carrinho'>
                            <thead>
                                <tr>
                                    <th>imagem</th>
                                    <th>produto</th>
                                    <th>Removido</th>
                                    <th>adicionado</th>
                                </tr>
                            </thead>


                            <tbody>

                                {tdscarrinhos.map(item =>
                                    <tr className="cada-linha" key={item.id_carrinho}>
                                        <td><img src={`${api.getUri()}/${item.imagem}`} /></td>
                                        <td>{item.produto}</td>
                                        <td>
                                            {item.carrinho === "disponivel" ? (
                                                <div className='tracinhos'></div>
                                            ) : item.carrinho === "indisponível" ? (
                                                <div className='removido'></div>
                                            ) : (
                                                <div className='tracinhos'></div>
                                            )}
                                        </td>
                                        <td>
                                            {item.carrinho === "disponivel" ? (
                                                <div className='adicionado'></div>
                                            ) : item.carrinho === "indisponível" ? (
                                                <div className='tracinhos'></div>
                                            ) : (
                                                <div className='tracinhos'></div>
                                            )}
                                        </td>
                                    </tr>
                                )}



                            </tbody>
                        </table>
                    </div>


                    <div className="parte-filtros-carrinho">
                        <div className="parte-1">
                            <h1>Ordenar por:</h1>
                            <div onClick={() => navigate('/favoritos')}>
                                <img src={Coracao} />
                                <p>Favoritos</p>
                            </div>
                        </div>

                        <div className="parte-2">
                <div>
                    <input
                        type="checkbox"
                        value="adicionado"
                        checked={filtro === "adicionado"}
                        onChange={() => setFiltro("adicionado")}
                    />
                    <h4>Adicionado</h4>
                </div>
                <div className="linha-filtro"></div>
                <div>
                    <input
                        type="checkbox"
                        value="removido"
                        checked={filtro === "removido"}
                        onChange={() => setFiltro("removido")}
                    />
                    <h4>Removido</h4>
                </div>
                <div className="linha-filtro"></div>
                <button className='bbotao' onClick={handleFilter}>Filtrar</button>
            </div>
            </div>
            </div>

                            
                        </div>
                 



              
           
        </section>
    )
}