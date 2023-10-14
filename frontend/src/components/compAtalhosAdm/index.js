import Dashboard from '../../assets/images/pictures/dashboard.png'
import Produtos from '../../assets/images/pictures/produtos.png'
import Vendas from '../../assets/images/pictures/vendas.png'
import Pedidos from '../../assets/images/pictures/pedidos.png'
import Sair from '../../assets/img/sair.png'

import './index.scss'
import { useNavigate } from 'react-router-dom'
import storage from 'local-storage'


export default function CompAtalhosAdm() {

    const navigate = useNavigate();

    async function irdashboard() {
        navigate('/dashboard')
    }

    async function irprodutos() {
        navigate('/produtos')
    }

    async function irvendas() {
        navigate('/')
    }

    async function irpedido() {
        navigate('/')
    }

    function sairClick() {
        storage.remove('adm-logado')
        navigate('/associado')
    }




    return(
        <div className="pagina-comp-atalhos">
            <div className="container-atalhos">
                <div onClick={irdashboard} className="dashboard">
                    <img src={Dashboard} />
                    <h2>Dashboard</h2>
                </div>

                <div onClick={irprodutos} className="produto">
                    <img src={Produtos} />
                    <h2>Produtos</h2>
                </div>

                <div className="venda">
                    <img src={Vendas} />
                    <h2>Vendas</h2>
                </div>

                <div className="pedido">
                    <img id='pedido' src={Pedidos} />
                    <h2>Pedidos</h2>
                </div>


            </div>

            <div  onClick={sairClick} className='sair'>
                <img src={Sair} />
                <h2>Sair</h2>
            </div>
        </div>
    )
}