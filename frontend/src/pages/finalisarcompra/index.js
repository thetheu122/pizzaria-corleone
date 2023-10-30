import Cabecalho from '../../components/user/cabecalho'
import './index.scss'
import ProdutoCompra from '../../components/user/produtocompra'
import { useState } from 'react'
import Sugestao from '../../components/user/sugestao-produtu'
import { useFetcher } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'


export default function Finalizarcadastrado(){
    
const [ label , setLabel] = useState( false);
const [ produtos , setProdutos] = useState([]);
const [ precos , setPrecos ] = useState([])
const [ total , setTotal ] = useState(0)
const [ subtotal , seSubtTotal ] = useState(0)

const [ produtosugestao , setProdutosugestao ] = useState([])

const [paginaAtual, setPaginaAtual] = useState(1);
const [itensPorPagina, setItensPorPagina] = useState(4);
const [pages, setPages] = useState([]);
const [digitadoCupom , setDigitadoCupom] = useState('')

const [desconto ,setDesconto] = useState(0)

async function cupom() {
    try {
      const response = await axios.get('http://localhost:5000/cupom/' + digitadoCupom);
  
      if (response.data.length > 0) {
        const desconto = (total * response.data[0].ds_valor) / 100;
        const conta = total - desconto ;

        setTotal(conta)
        seSubtTotal(conta)
        setDesconto(desconto);
        setDigitadoCupom('')
      }
    } catch (error) {
      console.error('Erro ao verificar o cupom:', error);
    }
  }
  


useEffect(() => {
    setPages([]);
    let novoArray = [];
    for (let cont = 1; cont <= Math.ceil(produtosugestao.length / itensPorPagina); cont++) {
        novoArray.push(cont);
    }
    setPages([...novoArray]);
}, [produtos, itensPorPagina , produtosugestao])




const altPag = (num) => {
    if (num === 'ant') {
        if (paginaAtual > 1) {
            setPaginaAtual(paginaAtual - 1);
        }
    } else if (num === 'pro') {
        if (paginaAtual < pages.length) {
            setPaginaAtual(paginaAtual + 1);
        }
    } else {
        setPaginaAtual(num);
    }
};


const cartoesAtuais = produtosugestao.slice((paginaAtual - 1) * itensPorPagina, paginaAtual * itensPorPagina);



useEffect(()=>{

        let usuario = localStorage.getItem('usuario-logado');
        usuario = JSON.parse(usuario)

        async function listar() {  
        const response = await axios.get('http://localhost:5000/corleone/usuario/carrinho/listar/'+usuario.id)
        setProdutos(response.data)
        
        //  lista de sugestao   \\
        const lisatagem = await axios.get('http://localhost:5000/produto') 
        setProdutosugestao(lisatagem.data);

        const mappedPrices = produtos.map((item) => parseFloat(item.preco));
  

        const total = mappedPrices.reduce((acc, preco) => acc + preco, 0);

        setTotal(total);

        setPrecos(mappedPrices);
                
    };
    listar();

},[produtos]);


 
    return(
        
        <div>
            
            <div className='cab'> <Cabecalho/></div>
            <div className='body'  >



            <div> 
                   <div className='mae-comp'>
                      <h2> Meu Carrinho</h2>
<<<<<<< HEAD
                      <ProdutoCompra />

                      <h2> Sugestões </h2>
                      
                   </div>
=======
           
                      {produtos.map((item) => {

                            return (
                                <ProdutoCompra produto={{ nome: item.produto, preco: item.preco, img: item.imagem , qtd : item.quantidade , id:item.id_carrinho
                                }} />
                            );
                        })}

                  
                   </div>
                   <div className='sugestao'>
    
         
         
        <div className='pagination'>
                <div className='paginacao'>
                <h3>Antes de ir, escolha mais um item para combinar com o pedido</h3>
                    {paginaAtual > 1 ? (
                        <button className='proximo' onClick={() => altPag('ant')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="19" viewBox="0 0 25 19" fill="none">
                                <path
                                    d="M1.5 9.5H23M23 9.5L13.561 1.5M23 9.5L13.561 17.5"
                                    stroke="#53220D"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    transform="rotate(180, 12.5, 9.5)"
                                />
                            </svg>
                            <p>Anterior</p>
                        </button>
                    ) : (
                        <button className='negado'>
                            <p>Anterior</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="19" viewBox="0 0 25 19" fill="none">
                                <path
                                    d="M1.5 9.5H23M23 9.5L13.561 1.5M23 9.5L13.561 17.5"
                                    stroke="#8d8d8d"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    transform="rotate(180, 12.5, 9.5)"
                                />
                            </svg>
                        </button>
                    )}

                    

                    {paginaAtual < pages.length ? (
                        <button className='proximo' onClick={() => altPag('pro')}>
                            <p>Próximo</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="19" viewBox="0 0 25 19" fill="none">
                                <path
                                    d="M1.5 9.5H23M23 9.5L13.561 1.5M23 9.5L13.561 17.5"
                                    stroke="#53220D"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                />
                            </svg>
                        </button>
                    ) : (
                        <button className='negado'>
                            <p>Próximo</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="19" viewBox="0 0 25 19" fill="none">
                                <path
                                    d="M1.5 9.5H23M23 9.5L13.561 1.5M23 9.5L13.561 17.5"
                                    stroke="#8d8d8d"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                />
                            </svg>
                        </button>
                    )}
                </div>

        <div className='sugestao-itens'>
            {cartoesAtuais.map(item => (  
                <Sugestao produto={{ nome: item.nome, media: item.media, preco: item.preço }} />
            ))}
        </div>

            
        </div>
    
</div>
>>>>>>> 894db7531e83a580c6f0e850c41238b9e9488037

                 
            </div>
           



           
            <div className='ld-esquerdo'>

                <div>

                    
                </div>
                    
                 <h2>Resumo do Pedido </h2>

                <div> 
                    <div>  <p> Produtos ( {produtos.length == 1 ?  produtos.length + ' item' : produtos.length + ' itens'} ) </p>
                      <p> R$ {total.toFixed(2)}</p>
                    </div>
                    
                    <div>
                           <p> Descontos </p>
                           <p> - R$ {desconto}
                            
                            
                             </p> 
                    </div>   
                </div> 

                <div className='ld-esquerdo-fl'>
                       <h4>
                            Subtotal   
                        </h4>

<<<<<<< HEAD
                        <h4> 
                            R$ 480 
                        </h4> 
=======
                    <h4> 
                        R${total.toFixed(2)} 
                    </h4> 
>>>>>>> 894db7531e83a580c6f0e850c41238b9e9488037

                </div> 

                <div  className='ld-esquerdo-fl'>
                     <p> Frete </p>   <p>a calcular</p>
                </div>

                <div className='ld-esquerdo-fl'>
<<<<<<< HEAD
                            <h3>Total   </h3>
                            <h3>R$ 480</h3>
=======
                        <h3>Total   </h3>
                        <h3>R$ {total.toFixed(2)} </h3>
                </div>

                <button> Comprar </button>
                <div>
                    <div className='butao'>
                        { digitadoCupom.length  > 0 && 
                        <label>Cupom</label>
                        }
                       <input placeholder='Cupom' 
                        value={digitadoCupom}
                        onChange={ (e) => { setDigitadoCupom ( e.target.value) ;}}
                        onClick={()=> { setLabel(true) }  } /> 
>>>>>>> 894db7531e83a580c6f0e850c41238b9e9488037
                    </div>

<<<<<<< HEAD
                    <button> Comprar </button>
                    <div>
                        <div className='butao'>
                            { cupom.length  > 0 && 
                            <label>Cupom</label>
                            }
                        <input placeholder='Cupom' 
                            value={cupom}
                            onChange={ (e) => { setCupom ( e.target.value) ;}}
                            onClick={()=> { setLabel(true) }  } /> 
                        </div>
                    
                    </div>

                    <button className='claro'>Aplicar</button>
                 </div>
             </div>
=======
                <button onClick={cupom} className='claro'>Aplicar</button>
            </div>
            </div>
>>>>>>> 894db7531e83a580c6f0e850c41238b9e9488037

              

        </div>
    )
}