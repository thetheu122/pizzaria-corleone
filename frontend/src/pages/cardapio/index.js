import './index.scss'
import '../../assets/config/fonts-config.scss'

import Seta from '../../assets/images/icons/seta_icon.svg'
import Lupa from '../../assets/images/icons/lupa.png'
import carregando from '../../assets/images/carregando.png'



import Cabecalho from '../../components/user/cabecalho'
import CardProduct from '../../components/user/cardProduct'
import CardProduto from '../../components/user/card-produto'
import Rodape from '../../components/user/rodape'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Cardapio() {

    const [produto, setProduto] = useState([])
    const [pesquisa, setPesquisa] = useState('')
    const [mostrar, setMostrar] = useState(true)
    const [vegano, setVgeano] = useState(false)
    const [vegetariano, setVegetariano] = useState(false)
    const [intoleranteaovo, setIntoleranteaovo] = useState(false)
    const [intoleranteagluten, setIntoleranteaGluten] = useState(false)
    const [intolerantealactose, setIntolerantealactose] = useState(false)

    //paginação
    const [paginaAtual, setPaginaAtual] = useState(1)
    const [itensPorPagina, setItensPorPagina] = useState(6)
    const [pages, setPages] = useState([])

    useEffect(() => {
        setPages([])
        let novoArray = []
        for (let cont = 1; cont <= Math.ceil(produto.length / itensPorPagina); cont++) {
            novoArray.push(cont);
        }
        setPages([...novoArray])
    }, [produto])

    async function buscar() {

        let restricao = []

        if (vegano === true) {
            restricao.push('vegana')
        }
        else {
            const novoVetor = restricao.filter(elemento => !elemento.includes('vegano'));
            restricao = novoVetor
        }

        if (vegetariano === true) {
            restricao.push('vegetariano')
        }
        else {
            const novoVetor = restricao.filter(elemento => !elemento.includes('vegetariano'));
            restricao = novoVetor
        }

        if (intoleranteagluten === true) {
            restricao.push('intolerante a gluten')
        }
        else {
            const novoVetor = restricao.filter(elemento => !elemento.includes('intolerante a glutem'));
            restricao = novoVetor
        }

        if (intolerantealactose === true) {
            restricao.push('intolerante a lactose')
        }
        else {
            const novoVetor = restricao.filter(elemento => !elemento.includes('intolerante a lactose'));
            restricao = novoVetor
        }

        if (intoleranteaovo === true) {
            restricao.push('intolerante a ovo')
        }
        else {
            const novoVetor = restricao.filter(elemento => !elemento.includes('intolerante a ovo'));
            restricao = novoVetor
        }


        if (restricao === '' || restricao.length == 0) {

            let resp = await axios.get('http://localhost:5000/produto/' + pesquisa)
            if (resp.data == '') {
                setMostrar(false)
            }


            else {
                setProduto(resp.data)
                setMostrar(true)
            }
        }


        if (restricao.length > 1) {

            let respo = await axios.get('http://localhost:5000/produto/restricoes?restricao=' + restricao[0] + '&restricao2=' + restricao[1])
            setProduto(respo.data)
            if (respo.data == '')
                setMostrar(false)

            else
                setMostrar(true)

        }


        if (restricao.length === 1) {

            let response = await axios.get('http://localhost:5000/produto/restricoes/' + restricao[0])
            await setProduto(...[response.data])

            if (response.data == '')
                setMostrar(false)

            else
                setMostrar(true)
        }


    }

    const ultimoCartao = paginaAtual * itensPorPagina
    const primeiroCartao = ultimoCartao - itensPorPagina
    const cartoesAtuais = produto.slice(primeiroCartao, ultimoCartao)



    useEffect(() => {
        buscar()

    }, [pesquisa, vegano, vegetariano, intoleranteagluten, intoleranteaovo, intolerantealactose])

    const altPag = (num) => {
        if(num == 'ant'){
            setPaginaAtual(paginaAtual - 1)
            window.scrollTo({
                top: 400,
                behavior: 'smooth',
              })
        }
        else if(num == 'pro'){
            setPaginaAtual(paginaAtual + 1)
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        else{
            setPaginaAtual(num)
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
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
                        <input placeholder='Digite e aperte enter...' value={pesquisa} onChange={(e) => setPesquisa(e.target.value)}></input>
                        <img alt='lupa' onClick={buscar} src={Lupa} />
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
                            <input type='radio' value={vegano} onClick={() => setVgeano(!vegano)} checked={vegano} />
                            <p>Vegano</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="228" height="1" viewBox="0 0 228 1" fill="none">
                            <path d="M0.566895 0.5H226.98" stroke="black" stroke-linecap="round" />
                        </svg>

                        <div className='restricoesFiltro'>
                            <input type='radio' value={vegetariano} onClick={() => setVegetariano(!vegetariano)} checked={vegetariano} />
                            <p>Vegetariana</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="228" height="1" viewBox="0 0 228 1" fill="none">
                            <path d="M0.566895 0.5H226.98" stroke="black" stroke-linecap="round" />
                        </svg>

                        <div className='restricoesFiltro'>
                            <input type='radio' value={intoleranteaovo} onClick={() => setIntoleranteaovo(!intoleranteaovo)} checked={intoleranteaovo} />
                            <p>Intolerante a Ovo</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="228" height="1" viewBox="0 0 228 1" fill="none">
                            <path d="M0.566895 0.5H226.98" stroke="black" stroke-linecap="round" />
                        </svg>

                        <div className='restricoesFiltro'>
                            <input type='radio' value={intoleranteagluten} onClick={() => setIntoleranteaGluten(!intoleranteagluten)} checked={intoleranteagluten} />
                            <p>Intolerante a Glúten </p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="228" height="1" viewBox="0 0 228 1" fill="none">
                            <path d="M0.566895 0.5H226.98" stroke="black" stroke-linecap="round" />
                        </svg>

                        <div className='restricoesFiltro'>
                            <input type='radio' value={intolerantealactose} onClick={() => setIntolerantealactose(!intolerantealactose)} checked={intolerantealactose} />
                            <p>Intolerante a Lactose</p>
                        </div>



                    </div>

                    <h1>Compre Novamente</h1>

                    <CardProduct />



                </div>


                <div className='direitinha'>
                    <div className='direitaMeio'>
                        {mostrar ? cartoesAtuais.map((item) => (
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

                        )) : <div className='not'>
                            <h1> <img src={carregando} />Produto não encontrdado</h1>
                        </div>}

                    </div>

                    <div className='pagination'>
                        {mostrar ? (
                            <div className='paginacao'>
                                {paginaAtual > 1 ? (
                                    <button className='proximo' onClick={() => altPag('ant')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="19" viewBox="0 0 25 19" fill="none">
                                            <path d="M1.5 9.5H23M23 9.5L13.561 1.5M23 9.5L13.561 17.5" stroke="#53220D" stroke-width="2" stroke-linecap="round" transform="rotate(180, 12.5, 9.5)" />
                                        </svg>
                                        <p>Anterior</p>
                                    </button>
                                ) : (
                                    <button className='negado'>
                                        <p>Anterior</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="19" viewBox="0 0 25 19" fill="none">
                                            <path d="M1.5 9.5H23M23 9.5L13.561 1.5M23 9.5L13.561 17.5" stroke="#8d8d8d" stroke-width="2" stroke-linecap="round" transform="rotate(180, 12.5, 9.5)" />
                                        </svg>
                                    </button>
                                )}

                                <div className='bolotas'>
                                    {pages.map(item => (
                                        <div className={item === paginaAtual ? 'marrom' : 'circulo'} key={item} onClick={() => altPag(item)}>
                                            {item}
                                        </div>
                                    ))}
                                </div>

                                {paginaAtual < pages.length ? (
                                    <button className='proximo' onClick={() => altPag('pro')}>
                                        <p>Próximo</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="19" viewBox="0 0 25 19" fill="none">
                                            <path d="M1.5 9.5H23M23 9.5L13.561 1.5M23 9.5L13.561 17.5" stroke="#53220D" stroke-width="2" stroke-linecap="round" />
                                        </svg>
                                    </button>
                                ): (
                                    <button className='negado'>
                                        <p>Próximo</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="19" viewBox="0 0 25 19" fill="none">
                                            <path d="M1.5 9.5H23M23 9.5L13.561 1.5M23 9.5L13.561 17.5" stroke="#8d8d8d" stroke-width="2" stroke-linecap="round" />
                                        </svg>
                                    </button>
                                )}
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
            <Rodape />
        </main>
    )
}
