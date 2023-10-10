import { useState } from 'react'

import './index.scss'
import CompAtalhosAdm from '../../components/compAtalhosAdm';

export default function ListarPedido() {

    const [buscarid, setBuscarid] = useState('')

    return (

        <div className='contatiner-um'>
         <CompAtalhosAdm />
    
        <div className='container-dois'>
            <div className='titulo-pedidos'>
                <h1>Pedidos</h1>
            </div>

            <div className='lista-subtitulo'>
                <h1>Lista de Pedidos</h1>
            </div>

            <div className='container-tres'>
                <div className="input-container">
                    <input
                        type='text'
                        placeholder='Busque por id ou nome do cliente'
                        value={buscarid}
                        onChange={e => setBuscarid(e.target.value)}
                    />
                    <div className="input-image"></div>
                </div>

                <div className='filtro'>
                    <div className="filtro-image"></div>
                    <h2>Todos os filtros</h2>
                </div>


                <h2 className='entregue'>Status: Entregue</h2>
                <h2 className='data'>Data: 30/07/2023</h2>

            </div>

            </div>

       </div>



    )
}