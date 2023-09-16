import './index.scss'

import Cardhistorico from '../cardhistorico'
import Barralateral from '../barralateral'
export default function Historico (){

    return(

        <div className='historico'>
          <Barralateral/>
         <div className='fundo'>
          <h1>Historico de compras : </h1>
             
             <Cardhistorico/>
             <Cardhistorico/>
             <Cardhistorico/>

            
        </div> 
        </div>
    )
}