import './index.scss'
import CompAtalhosAdm from '../../components/compAtalhosAdm';
import { useState } from 'react';

export default function ClienteDetalhe(){

  const[buscarcliente, setBuscarcliente]=useState()
    return(
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
                                placeholder='Busque por id ou nome do cliente'
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

                     <tr className="linha-separadora">
                                <td>#4020</td>
                                <td>Amanda</td>
                                <td>Amanda@gmail.com.br</td>
                                <td>9058-48784</td>
                                <td>30/07/2005</td>
                                <td >0485-210</td>

                            </tr>


                            <tr className="linha-separadora">
                                <td>#4020</td>
                                <td>Amanda</td>
                                <td>Amanda@gmail.com.br</td>
                                <td>9058-48784</td>
                                <td>30/07/2005</td>
                                <td >0485-210</td>

                            </tr>

                            <tr className="linha-separadora">
                                <td>#4020</td>
                                <td>Amanda</td>
                                <td>Amanda@gmail.com.br</td>
                                <td>9058-48784</td>
                                <td>30/07/2005</td>
                                <td >0485-210</td>

                            </tr>

                            <tr className="linha-separadora">
                                <td>#4020</td>
                                <td>Amanda</td>
                                <td>Amanda@gmail.com.br</td>
                                <td>9058-48784</td>
                                <td>30/07/2005</td>
                                <td >0485-210</td>

                            </tr>

                            <tr className="linha-separadora">
                                <td>#4020</td>
                                <td>Amanda</td>
                                <td>Amanda@gmail.com.br</td>
                                <td>9058-48784</td>
                                <td>30/07/2005</td>
                                <td >0485-210</td>

                            </tr>

                            <tr className="linha-separadora">
                                <td>#4020</td>
                                <td>Amanda</td>
                                <td>Amanda@gmail.com.br</td>
                                <td>9058-48784</td>
                                <td>30/07/2005</td>
                                <td >0485-210</td>

                            </tr>

                            <tr className="linha-separadora">
                                <td>#4020</td>
                                <td>Amanda</td>
                                <td>Amanda@gmail.com.br</td>
                                <td>9058-48784</td>
                                <td>30/07/2005</td>
                                <td >0485-210</td>

                            </tr>

                            <tr className="linha-separadora">
                                <td>#4020</td>
                                <td>Amanda</td>
                                <td>Amanda@gmail.com.br</td>
                                <td>9058-48784</td>
                                <td>30/07/2005</td>
                                <td >0485-210</td>

                            </tr>

                            <tr className="linha-separadora">
                                <td>#4020</td>
                                <td>Amanda</td>
                                <td>Amanda@gmail.com.br</td>
                                <td>9058-48784</td>
                                <td>30/07/2005</td>
                                <td >0485-210</td>

                            </tr>

                            <tr className="linha-separadora">
                                <td>#4020</td>
                                <td>Amanda</td>
                                <td>Amanda@gmail.com.br</td>
                                <td>9058-48784</td>
                                <td>30/07/2005</td>
                                <td >0485-210</td>

                            </tr>

                            <tr className="linha-separadora">
                                <td>#4020</td>
                                <td>Amanda</td>
                                <td>Amanda@gmail.com.br</td>
                                <td>9058-48784</td>
                                <td>30/07/2005</td>
                                <td >0485-210</td>

                            </tr>

                            <tr className="linha-separadora">
                                <td>#4020</td>
                                <td>Amanda</td>
                                <td>Amanda@gmail.com.br</td>
                                <td>9058-48784</td>
                                <td>30/07/2005</td>
                                <td >0485-210</td>

                            </tr>

                            <tr className="linha-separadora">
                                <td>#4020</td>
                                <td>Amanda</td>
                                <td>Amanda@gmail.com.br</td>
                                <td>9058-48784</td>
                                <td>30/07/2005</td>
                                <td >0485-210</td>

                            </tr>

                            <tr className="linha-separadora">
                                <td>#4020</td>
                                <td>Amanda</td>
                                <td>Amanda@gmail.com.br</td>
                                <td>9058-48784</td>
                                <td>30/07/2005</td>
                                <td >0485-210</td>

                            </tr>

                            <tr className="linha-separadora">
                                <td>#4020</td>
                                <td>Amanda</td>
                                <td>Amanda@gmail.com.br</td>
                                <td>9058-48784</td>
                                <td>30/07/2005</td>
                                <td >0485-210</td>

                            </tr>

                            <tr className="linha-separadora">
                                <td>#4020</td>
                                <td>Amanda</td>
                                <td>Amanda@gmail.com.br</td>
                                <td>9058-48784</td>
                                <td>30/07/2005</td>
                                <td >0485-210</td>

                            </tr>

                            <tr className="linha-separadora">
                                <td>#4020</td>
                                <td>Amanda</td>
                                <td>Amanda@gmail.com.br</td>
                                <td>9058-48784</td>
                                <td>30/07/2005</td>
                                <td >0485-210</td>

                            </tr>

                            <tr className="linha-separadora">
                                <td>#4020</td>
                                <td>Amanda</td>
                                <td>Amanda@gmail.com.br</td>
                                <td>9058-48784</td>
                                <td>30/07/2005</td>
                                <td >0485-210</td>

                            </tr>

                            <tr className="linha-separadora">
                                <td>#4020</td>
                                <td>Amanda</td>
                                <td>Amanda@gmail.com.br</td>
                                <td>9058-48784</td>
                                <td>30/07/2005</td>
                                <td >0485-210</td>

                            </tr>

                            <tr className="linha-separadora">
                                <td>#4020</td>
                                <td>Amanda</td>
                                <td>Amanda@gmail.com.br</td>
                                <td>9058-48784</td>
                                <td>30/07/2005</td>
                                <td >0485-210</td>

                            </tr>


                     </tbody>


                </table>

                </div>




              </div>


        </div>
    )
}