import './index.scss'

import Cardhistorico from '../cardhistorico'
export default function Historico() {

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