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

    const [mostrar, setMostrar] = useState(true)

    //CONTROLADOR FILTRO LATERAL
    const [qtdAtv, setQtdAtv] = useState(0)
    const [vegano, setVegano] = useState(false)
    const [intoleranteOvo, setIntoleranteOvo] = useState(false)
    const [intoleranteGluten, setIntoleranteGluten] = useState(false)
    const [intoleranteLactose, setIntoleranteLactose] = useState(false)

    //FILTRO PESQUISA NOME
    const [pesquisa, setPesquisa] = useState('')

    //ORDENAR POR
    const [orderBy, setOrderBy] = useState(null)

    //CONTROLADOR FILTRO SUPERIOR
    const [pizzasAtv, setPizzasAtv] = useState(true)
    const [bebidasAtv, setBebidasAtv] = useState(false)
    const [sobremesaAtv, setSobremesaAtv] = useState(false)
    const [vegetarianaAtv, setVegetarianasAtv] = useState(false)

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

    useEffect(() => {
        buscar()
    }, [pesquisa, vegano, intoleranteGluten, intoleranteOvo, intoleranteLactose, pizzasAtv, sobremesaAtv, bebidasAtv, vegetarianaAtv, orderBy])

    useEffect(() => {
        if (produto.length > 0) {
            setMostrar(true)
        }
        else if (produto.length == 0) {
            setMostrar(false)
        }
    }, [produto])

    const ultimoCartao = paginaAtual * itensPorPagina
    const primeiroCartao = ultimoCartao - itensPorPagina
    const cartoesAtuais = produto.slice(primeiroCartao, ultimoCartao)

    function controladorFiltroSuperior(value) {
        if (value === 'p') {
            setPizzasAtv(true)
            setBebidasAtv(false)
            setSobremesaAtv(false)
            setVegetarianasAtv(false)
        }
        else if (value === 'b') {
            setPizzasAtv(false)
            setBebidasAtv(true)
            setSobremesaAtv(false)
            setVegetarianasAtv(false)
        }
        else if (value === 's') {
            setPizzasAtv(false)
            setBebidasAtv(false)
            setSobremesaAtv(true)
            setVegetarianasAtv(false)
        }
        else if (value === 'v') {
            setPizzasAtv(false)
            setBebidasAtv(false)
            setSobremesaAtv(false)
            setVegetarianasAtv(true)
        }
    }


    async function buscar() {
        console.log(orderBy)
        let tipoComida = '';

        if (pizzasAtv) {
            tipoComida = 'salgado';
        }
        else if (vegetarianaAtv) {
            tipoComida = 'vegetariano';
        }
        else if (bebidasAtv) {
            tipoComida = 'bebida';
        }
        else if (sobremesaAtv) {
            tipoComida = 'sobremesa';
        }

        const restricoesAtivas = [];

        if (vegano)
            restricoesAtivas.push('vegano');
        if (intoleranteOvo)
            restricoesAtivas.push('ovo');
        if (intoleranteGluten)
            restricoesAtivas.push('gluten');
        if (intoleranteLactose)
            restricoesAtivas.push('leite');

        let restricao_1 = restricoesAtivas[0]
        let restricao_2 = restricoesAtivas[1]
        let restricao_3 = restricoesAtivas[2]

        restricao_1 = restricao_1 ? restricao_1 : '%'
        restricao_2 = restricao_2 ? restricao_2 : '%'
        restricao_3 = restricao_3 ? restricao_3 : '%'

        // Execute a chamada à API
        let response = await axios.get(`http://localhost:5000/produto/consulta/cardapio?tp=${tipoComida}&restricao_1=${restricao_1}&restricao_2=${restricao_2}&restricao_3=${restricao_3}&nm=${pesquisa ? pesquisa : '%'}&orderby=${orderBy}`)

        response = response.data

        setProduto(response)
    }

    const altPag = (num) => {
        if (num == 'ant') {
            setPaginaAtual(paginaAtual - 1)
            window.scrollTo({
                top: 400,
                behavior: 'smooth',
            })
        }
        else if (num == 'pro') {
            setPaginaAtual(paginaAtual + 1)
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        else {
            setPaginaAtual(num)
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    const sideFilter = (value) => {
        if (value === 'v') {
            vegano ? setQtdAtv(qtdAtv - 1) : setQtdAtv(qtdAtv + 1)
            setVegano(!vegano)
        }
        else if (value === 'l') {
            intoleranteLactose ? setQtdAtv(qtdAtv - 1) : setQtdAtv(qtdAtv + 1)
            setIntoleranteLactose(!intoleranteLactose)
        }
        else if (value === 'o') {
            intoleranteOvo ? setQtdAtv(qtdAtv - 1) : setQtdAtv(qtdAtv + 1)
            setIntoleranteOvo(!intoleranteOvo)
        }
        else if (value === 'g') {
            intoleranteGluten ? setQtdAtv(qtdAtv - 1) : setQtdAtv(qtdAtv + 1)
            setIntoleranteGluten(!intoleranteGluten)
        }
    }

    return (
        <main className='cardapio'>
            <Cabecalho />
            <div className='cima'>
                <div className={`fpizza ${pizzasAtv ? 'prop' : 'notSelect'}`} onClick={() => controladorFiltroSuperior('p')}>
                    <h1>Pizzas</h1>
                </div>
                <div className={`fsobremesas ${sobremesaAtv ? 'prop' : 'notSelect'}`} onClick={() => controladorFiltroSuperior('s')}>
                    <h1>Sobremesas</h1>
                </div>
                <div className={`fbebida ${bebidasAtv ? 'prop' : 'notSelect'}`} onClick={() => controladorFiltroSuperior('b')}>
                    <h1>Bebidas</h1>
                </div>
                <div className={`fvegetariana ${vegetarianaAtv ? 'prop' : 'notSelect'}`} onClick={() => controladorFiltroSuperior('v')}>
                    <h1>Vegetarianas</h1>
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
                            <select onChange={(e) => setOrderBy(e.target.value)}>
                                <option value='null'>Nenhum parâmetro</option>
                                <option value="m.ds_media DESC">Melhores avaliações</option>
                                <option value="novidades">Novidades</option>
                            </select>
                        </div>
                    </div>

                    <div className='restricoes'>
                        <div className='restricoesFiltro'>
                            <input type='radio' value={vegano} onClick={() => sideFilter('v')} disabled={qtdAtv === 3 && !vegano} checked={vegano} />
                            <p>Vegano</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="228" height="1" viewBox="0 0 228 1" fill="none">
                            <path d="M0.566895 0.5H226.98" stroke="black" stroke-linecap="round" />
                        </svg>

                        <div className='restricoesFiltro'>
                            <input type='radio' value={intoleranteOvo} onClick={() => sideFilter('o')} disabled={qtdAtv === 3 && !intoleranteOvo} checked={intoleranteOvo} />
                            <p>Intolerante a Ovo</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="228" height="1" viewBox="0 0 228 1" fill="none">
                            <path d="M0.566895 0.5H226.98" stroke="black" stroke-linecap="round" />
                        </svg>

                        <div className='restricoesFiltro'>
                            <input type='radio' value={intoleranteGluten} onClick={() => sideFilter('g')} disabled={qtdAtv === 3 && !intoleranteGluten} checked={intoleranteGluten} />
                            <p>Intolerante a Glúten </p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="228" height="1" viewBox="0 0 228 1" fill="none">
                            <path d="M0.566895 0.5H226.98" stroke="black" stroke-linecap="round" />
                        </svg>

                        <div className='restricoesFiltro'>
                            <input type='radio' value={intoleranteLactose} onClick={() => sideFilter('l')} disabled={qtdAtv === 3 && !intoleranteLactose} checked={intoleranteLactose} />
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
                                        id: item.ID,
                                        media: item.media,
                                        tipo: item.tipo
                                    }}


                                />
                            </div>

                        )) : <div className='not'>
                            <h1> <img src={carregando} />Produto não encontrado</h1>
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
                                ) : (
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