import './index.scss'
import '../../assets/config/fonts-config.scss'

import Seta from '../../assets/images/icons/seta_icon.svg'
import Lupa from '../../assets/images/icons/lupa.png'
import carregando  from '../../assets/images/carregando.png'



import Cabecalho from '../../components/user/cabecalho'
import CardProduct from '../../components/user/cardProduct'
import CardProduto from '../../components/user/card-produto'
import Rodape from '../../components/user/rodape'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Cardapio() {

    const [ produto , setProduto ] = useState([])
    const [ pesquisa , setPesquisa ] = useState('')
    const [ mostrar , setMostrar ] = useState(true)
    const [ vegano , setVgeano ] = useState(false)
    const [ vegetariano , setVegetariano ] = useState(false)
    const [ intoleranteaovo , setIntoleranteaovo ] = useState(false)
    const [ intoleranteagluten , setIntoleranteaGluten ] = useState(false)
    const [ intolerantealactose , setIntolerantealactose ] = useState(false)
    const [restricao , setRestricao] = useState([])
   

async function buscar (){

    let resp = await axios.get('http://localhost:5000/produto/'+pesquisa)
    if( resp.data=='' ){
    setMostrar(false)

    }


    else{
        setProduto(resp.data)
        setMostrar(true)

    }
 
}

async function buscarestricoes(){
    if(vegano === true){restricao.push('vegano')}
    if (vegetariano === true){restricao.push('vegetariano')}
    if(intoleranteagluten === true){restricao.push('intolerante a gluten')}
    if(intolerantealactose === true){restricao.push('intolerante a lactose')}
    if(intoleranteaovo===true){restricao.push('intolerante a ovo')}
     
    
    if( restricao.length > 1){
        let respo = await axios.get('http://localhost:5000/produto/restricoes?restricao='+restricao[0]+'&restricao2='+restricao[1])
    
        if( respo.data=='' )
        setMostrar(false)
    
        else
        setProduto(respo.data)
        setMostrar(true)

    }

    else{
    let restricao = ''
    let response = await axios.get('http://localhost:5000/produto/restricoes/'+restricao[0])
    

        if( response.data=='' )
            setMostrar(false)
        
        else
        setProduto(response.data)
        setMostrar(true)
    }

    setRestricao([])

}
 useEffect(()=>{
    buscarestricoes()
 },[vegano,vegetariano,intoleranteagluten,intoleranteaovo,intolerantealactose])


useEffect(()=>{
  buscar()
  
},[pesquisa])

    return (
        <main className='cardapio'>
            <Cabecalho />
            <div className='cima'>
                <h1>PIZZAS</h1>
                <div className='opcoes-cima'>
                    <h2>Bebidas</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="35" viewBox="0 0 3 35" fill="none">
                        <path d="M1.5 1.5V33.5" stroke="white" stroke-width="2" stroke-linecap="round" />
                    </svg>
                    <h2>Sobremesas</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="35" viewBox="0 0 3 35" fill="none">
                        <path d="M1.5 1.5V33.5" stroke="white" stroke-width="2" stroke-linecap="round" />
                    </svg>
                    <h2>Vegetarianas</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="35" viewBox="0 0 3 35" fill="none">
                        <path d="M1.5 1.5V33.5" stroke="white" stroke-width="2" stroke-linecap="round" />
                    </svg>
                    <h2>Favoritos</h2>
                </div>
            </div>


            <div className='meio'>
                <div className='esquerda'>
                    <div className='filtro-nome'>
                        <input  placeholder='Digite e aperte enter...' value={pesquisa} onChange={ (e) => setPesquisa ( e.target.value)}></input>
                        <img alt='lupa' onClick={buscar}src={Lupa} />
                    </div>

                    <div className='ordenado'>
                        <p>Ordenar por: </p>
                        <div>
                            <select>
                                  <option>Mais vendidas</option>
                                  <option>Novidades</option>
                            </select>
                        </div>
                    </div>

                    <div className='restricoes'>
                        <div className='restricoesFiltro'>
                            <input  type='radio' value={vegano} onClick={()=> setVgeano(!vegano)} checked={vegano} />
                            <p>Vegano</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="228" height="1" viewBox="0 0 228 1" fill="none">
                            <path d="M0.566895 0.5H226.98" stroke="black" stroke-linecap="round" />
                        </svg>

                        <div className='restricoesFiltro'>
                            <input type='radio' value={vegetariano} onClick={() =>setVegetariano (!vegetariano)} checked={vegetariano}/>
                            <p>Vegetariana</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="228" height="1" viewBox="0 0 228 1" fill="none">
                            <path d="M0.566895 0.5H226.98" stroke="black" stroke-linecap="round" />
                        </svg>

                        <div className='restricoesFiltro'>
                            <input type='radio' value={intoleranteaovo} onClick={()=> setIntoleranteaovo(!intoleranteaovo)} checked={intoleranteaovo} />
                            <p>Intolerante a Ovo</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="228" height="1" viewBox="0 0 228 1" fill="none">
                            <path d="M0.566895 0.5H226.98" stroke="black" stroke-linecap="round" />
                        </svg>

                        <div className='restricoesFiltro'>
                            <input type='radio'  value={intoleranteagluten} onClick={()=> setIntoleranteaGluten(!intoleranteagluten)} checked={intoleranteagluten}/>
                            <p>Intolerante a Glúten </p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="228" height="1" viewBox="0 0 228 1" fill="none">
                            <path d="M0.566895 0.5H226.98" stroke="black" stroke-linecap="round" />
                        </svg>

                        <div className='restricoesFiltro'>
                            <input type='radio' value={intolerantealactose} onClick={()=> setIntolerantealactose(!intolerantealactose)} checked={intolerantealactose} />
                            <p>Intolerante a Lactose</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="228" height="1" viewBox="0 0 228 1" fill="none">
                            <path d="M0.566895 0.5H226.98" stroke="black" stroke-linecap="round" />
                        </svg>

                 
                    </div>

                    <h1>Compre Novamente</h1>

                    <CardProduct />



                </div>
 
                
                <div className='direitaMeio'>
                    {mostrar ? produto.map((item) => (
                        <div>
                        <CardProduto
                            produto={{
                            nome: item.nome,
                            preco: item.preço,
                            imagem: item.imagem,
                            id: item.ID
                            }}

                            
                        />
                        </div>

                    )) :   <div className='not'>
                                <h1> <img src={carregando}/>Produto não encontrdado</h1>
                           </div>}
                    
                </div>



            </div>

            <div className='paginacao'>
                <div className='bolotas'>
                    <div className='circulo'>1</div>
                    <div className='circulo'>2</div>
                    <div className='circulo'>3</div>
                </div>

                <div className='proximo'>
                    <p>Proximo</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="19" viewBox="0 0 25 19" fill="none">
                        <path d="M1.5 9.5H23M23 9.5L13.561 1.5M23 9.5L13.561 17.5" stroke="#830D23" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </div>
            </div>
            <Rodape />
        </main>
    )
}
