import './index.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'

import Cardhistorico from '../cardhistorico'
<<<<<<< HEAD
import { toast } from 'react-toastify'
import axios from 'axios'
import { API_URL } from '../../../config/constants'
import { useEffect, useState } from 'react'
=======
import { API_URL } from '../../../config/constants'
>>>>>>> 3cb32f459974dc79f823633b923c01b1d566a787
export default function Historico() {
    const [historico, setHistorico] = useState([])

    useEffect(() => {
       async function fetchData(){
        let response = await axios.get(API_URL + ``)
       } 
    },[])

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