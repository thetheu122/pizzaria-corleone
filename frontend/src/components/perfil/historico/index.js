import './index.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'

import Cardhistorico from '../cardhistorico'
import { API_URL } from '../../../config/constants'
export default function Historico() {
    const [historico, setHistorico] = useState([])

    useEffect(() => {
       async function fetchData(){
        let response = await axios.get(API_URL + ``)
       } 
    },[])

    return (
        <div className='fundo'>
            <h1>Historico de compras : </h1>

            <div className='cartoesHistorico'>
                <Cardhistorico />
                <Cardhistorico />
                <Cardhistorico />
                <Cardhistorico />
                <Cardhistorico />
            </div>
        </div>
    )
}