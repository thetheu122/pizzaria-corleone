import './index.scss'
import imagemproduto from '../../../assets/images/pictures/soso.png'
import { useEffect, useState } from 'react'

export default  function ProdutoCompra(){

const [qtd, setQtd] = useState(0)

const atualizar = ()=>{ setQtd ( qtd + 1 ) }
const diminuir  = ()=>{ qtd > 0 && setQtd ( qtd - 1 ) }


    return(

        <div className='produtoCompra'>

               <img src={imagemproduto}/>
               <p>Prosciutto e Funghi</p>

               <div>
                   <p onClick  = {diminuir} > - </p>
                     <p>{qtd}</p> 
                    <p onClick = {atualizar} > + </p>
               </div>

               <h3>
                  R$ 162,22
               </h3>
               <svg data-v-7685edde="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-neutral-dark" data-v-527be18e=""><path d="M2 6.042c0-.352.286-.638.638-.638h18.724a.638.638 0 010 1.277H2.638A.638.638 0 012 6.042z" fill-rule="evenodd" clip-rule="evenodd"></path> <path d="M8.731 2.56A1.92 1.92 0 0110.085 2h3.83a1.915 1.915 0 011.915 1.915v2.128a.638.638 0 01-.639.638H8.808a.638.638 0 01-.638-.638V3.915c0-.508.202-.995.561-1.354zm1.354.717a.638.638 0 00-.638.638v1.49h5.106v-1.49a.638.638 0 00-.638-.638h-3.83zm0 6.595c.353 0 .638.286.638.639v6.383a.638.638 0 01-1.276 0V10.51c0-.353.286-.639.638-.639zm3.83 0c.352 0 .638.286.638.639v6.383a.638.638 0 01-1.277 0V10.51c0-.353.286-.639.639-.639z" fill-rule="evenodd" clip-rule="evenodd"></path> <path d="M4.509 5.61a.638.638 0 01.47-.206H19.02a.638.638 0 01.636.692l-1.183 14.141A1.906 1.906 0 0116.57 22H7.43a1.907 1.907 0 01-1.905-1.762L4.343 6.096a.638.638 0 01.166-.486zm1.164 1.07l1.125 13.454v.006a.63.63 0 00.63.583h9.144a.63.63 0 00.63-.583v-.006L18.327 6.68H5.673z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
        </div>
    )
}