import './index.scss'

import CardFavorito from '../cardfavorito'
import Barralateral from '../barralateral'

export default function Favorito(){

    return(
        <div className='favorito'>
             <Barralateral/>
            <div className='fundo'>
        <CardFavorito/>
        <CardFavorito/><CardFavorito/>
              
            </div>
        </div>
    )
}