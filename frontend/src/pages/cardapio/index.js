import './index.scss'
import '../../assets/config/fonts-config.scss'

import Seta from '../../assets/images/icons/seta_icon.svg'
import Lupa from '../../assets/images/icons/lupa.png'

import Cabecalho from '../../components/user/cabecalho'
import CardProduct from '../../components/user/cardProduct'
import CardProduto from '../../components/user/card-produto'
import Rodape from '../../components/user/rodape'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Cardapio() {

    const[ produto , setProduto ] = useState([])

async function buscar (){

let resp = await axios.get('http://localhost:5000/produto')
setProduto(resp.data)
}



useEffect(()=>{
  buscar()  
},[])
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
                        <input placeholder='Digite e aperte enter...'></input>
                        <img alt='lupa' src={Lupa} />
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
                            <input  type='radio' />
                            <p>Vegano</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="228" height="1" viewBox="0 0 228 1" fill="none">
                            <path d="M0.566895 0.5H226.98" stroke="black" stroke-linecap="round" />
                        </svg>

                        <div className='restricoesFiltro'>
                            <input type='radio' />
                            <p>Vegetariana</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="228" height="1" viewBox="0 0 228 1" fill="none">
                            <path d="M0.566895 0.5H226.98" stroke="black" stroke-linecap="round" />
                        </svg>

                        <div className='restricoesFiltro'>
                            <input type='radio' />
                            <p>Intolerante a Ovo</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="228" height="1" viewBox="0 0 228 1" fill="none">
                            <path d="M0.566895 0.5H226.98" stroke="black" stroke-linecap="round" />
                        </svg>

                        <div className='restricoesFiltro'>
                            <input type='radio' />
                            <p>Intolerante a Glúten</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="228" height="1" viewBox="0 0 228 1" fill="none">
                            <path d="M0.566895 0.5H226.98" stroke="black" stroke-linecap="round" />
                        </svg>

                        <div className='restricoesFiltro'>
                            <input type='radio' />
                            <p>Intolerante a Lactose</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="228" height="1" viewBox="0 0 228 1" fill="none">
                            <path d="M0.566895 0.5H226.98" stroke="black" stroke-linecap="round" />
                        </svg>

                        <div className='restricoesFiltro'>
                            <input type='radio' />
                            <p>Vinho</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="228" height="1" viewBox="0 0 228 1" fill="none">
                            <path d="M0.566895 0.5H226.98" stroke="black" stroke-linecap="round" />
                        </svg>

                        <div className='restricoesFiltro'>
                            <input type='radio' />
                            <p>Sobremesa</p>
                        </div>
                    </div>

                    <h1>Compre Novamente</h1>

                    <CardProduct />



                </div>

                <div className='direitaMeio'>

                {produto.map(item => (
                    <div>
                    <CardProduto
                        produto={{
                        nome: item.nome,
                        preco: item.preço,
                        imagem: item.imagem,
                        }}
                    />
                    </div>
                    ))}

                    
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
