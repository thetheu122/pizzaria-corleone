import './index.scss'
import CompAtalhosAdm from '../../components/compAtalhosAdm';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';


export default function ClienteDetalhe() {

    const [buscarcliente, setBuscarcliente] = useState('')
    const [cliente, setCliente] = useState([])

    const navigate = useNavigate()

    function entrarFavoritos(id) {
        navigate(`/cadafavorito/cliente/${id}`)
        console.log(id)
    }


    useEffect(() => {
        if (buscarcliente.length > 0) {
          listarPorNome();
        } else {
          Listarcliente();
        }
      }, [buscarcliente]);
      

    async function Listarcliente() {
        const r = await axios.get('http://localhost:5000/clientes')
        setCliente(r.data)

    }
    
    

        async function listarPorNome() {
        const r = await axios.get(`http://localhost:5000/clientes/nome/${buscarcliente}`)
        setCliente(r.data)

    }



    return (
        <div className='connttainer' >
            <CompAtalhosAdm />

            <div className='subbcontainer'>

                <div className='tiitulo'>
                    <h1>Clientes</h1>
                </div>

                <div className='subbtitulo'>
                    <h1>Lista de clientes</h1>
                </div>



                <div className='tabela-cliente'>

                    <div className="input-container">
                        <input
                        
                            type='text'
                            placeholder='Busque por nome do cliente'
                            value={buscarcliente}
                            onChange={e => setBuscarcliente(e.target.value)}
                        />
                        <div className="input-image"></div>
                    </div>


                    <table className="tabela-clienteAdm">
                        <thead >
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Telefone</th>
                                <th>Nascimento</th>
                                <th>Cep</th>
                            </tr>
                        </thead>

                        <tr className='linha-separadora'></tr>

                        <tbody>

                            {cliente.map(item =>


                                <tr
                                 
                                onClick={() => {entrarFavoritos(item.idcliente)}} className="linha-separadora">
                                    <td>#{item.idcliente}</td>
                                    <td>{item.cliente}</td>
                                    <td>{item.email}</td>
                                    <td>{item.telefone}</td>
                                    <td>{item.nascimento}</td>
                                    <td >{item.cep}</td>

                                </tr>
                            )

                            }



                        </tbody>


                    </table>

                </div>




            </div>


        </div>
    )
}