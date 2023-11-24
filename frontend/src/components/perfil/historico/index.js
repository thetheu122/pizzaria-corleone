import './index.scss'

import Cardhistorico from '../cardhistorico'
import { toast } from 'react-toastify'
import axios from 'axios'
import { API_URL } from '../../../config/constants'
import { useEffect, useState } from 'react'
export default function Historico() {

const [pedido, setPedido] = useState([])

useEffect(()=>{
listarcompras()
},[])

 async function listarcompras (){
    try {
        let us = localStorage.getItem('usuario-logado');
        us = JSON.parse(us)

        const response = await axios.get(`${API_URL}/pedido/status/entregue/${us.id}`)
        setPedido(response.data)
    } catch (error) {
        toast.error(error.message)
    }

 }

    return (
        <div className='fundo'>
            <h1>Historico de compras : </h1>

            <div className='cartoesHistorico'>
                {pedido.map((item)=>(
                    <Cardhistorico pedido={{id:item.idpedido, data:item.data,situacao:item.situacao,produtos:item.produtos}} />
                ))}
            </div>
        </div>
    )
}