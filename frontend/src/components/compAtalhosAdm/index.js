import Dashboard from '../../assets/images/pictures/dashboard.png'
import Produtos from '../../assets/images/pictures/produtos.png'
import Vendas from '../../assets/images/pictures/vendas.png'
import Pedidos from '../../assets/images/pictures/pedidos.png'
import Sair from '../../assets/img/sair.png'
import Setapracima from '../../assets/img/seta-pra-cima.png'
import Lista from '../../assets/img/lista-de-controle.png'
import Adicionar from '../../assets/img/adicionar.png'




import './index.scss'
import { useNavigate } from 'react-router-dom'
import storage from 'local-storage'
import { useEffect, useState } from 'react'


export default function CompAtalhosAdm() {

    const navigate = useNavigate();
    const [popUp, setPopUp] = useState(false)

useEffect(()=> {
 console.log(popUp)   
})
    function abrirPopup() {
        setPopUp(true)
    }

    function fecharPopUp() {
        setPopUp(false)
    }


    async function irdashboard() {
        navigate('/dashboard')
    }

    async function listaProdutos() {
        navigate('/produtos')
    }

    async function cadastraProdutos() {
        navigate('/cadastroproduto')
    }


    async function irvendas() {
        navigate('/')
    }

    async function irpedido() {
        navigate('/listapedido')
    }

    function sairClick() {
        storage.remove('adm-logado')
        navigate('/associado')
    }




    return (
        <div className="pagina-comp-atalhos">
            <div className="container-atalhos">
                <div onClick={() => {navigate('/dashboard')}} className="dashboard">
                    <img src={Dashboard} />
                    <h2>Dashboard</h2>
                </div>

                <div className="produto-atalhos">
                    <div><img  onClick={abrirPopup}src={Produtos} />
                    <h2 onClick={abrirPopup}>Produtos</h2>
                    </div>
                    
                    {popUp && (
                        <div className='pop-up-atalhos'>   
                                <h3 onClick={() => {navigate('/produtos')}}>Listar Produtos</h3>

                                <h4 onClick={() => {navigate('/cadastroproduto')}}>Cadastrar</h4>
                                <img onClick={fecharPopUp} src={Setapracima}/>
                                
                        </div>

                    )}  
                </div>

                <div className="venda">
                    <img src={Vendas} />
                    <h2>Vendas</h2>
                </div>

                <div onClick={() => {navigate('/listapedido')}} className="pedido">
                    <img id='pedido' src={Pedidos} />
                    <h2>Pedidos</h2>
                </div>


            </div>

            <div onClick={sairClick} className='sair'>
                <img src={Sair} />
                <h2>Sair</h2>
            </div>
        </div>
    )
}