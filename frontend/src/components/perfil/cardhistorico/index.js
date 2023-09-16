import './index.scss'

import  ok from '../assets/images/marca-de-verificacao 6.png'

export default function Cardhistorico (){

    return(

        <div className='card-historico'>
 
              <div className='card-secao-01'>

                    <p>15 de Abril</p>
                    <h5> Comprar novamente</h5>
              </div>

              <div className='card-secao-02'>

                    <h4> #1</h4>
                    <h4 >Uma Napoletana tamnho familia e uma Margherita invidual</h4>
              </div>
              
              <div className='card-secao-03'>
                    <img src={ok}/>
                    <p> Entregue</p>
              </div>
               

        </div>
    )
}