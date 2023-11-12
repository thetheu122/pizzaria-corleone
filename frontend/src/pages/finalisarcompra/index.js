import Cabecalho from '../../components/user/cabecalho'
import './index.scss'
import ProdutoCompra from '../../components/user/produtocompra'
import { useState } from 'react'
import Sugestao from '../../components/user/sugestao-produtu'
import { useFetcher } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

import { API_URL } from '../../config/constants'
import { toast } from 'react-toastify'


export default function Finalizarcadastrado(){
    
const [ label , setLabel] = useState( false);
const [ produtos , setProdutos] = useState([]);
const [ precos , setPrecos ] = useState([])
const [ total , setTotal ] = useState(0)
const [ subtotal , seSubtTotal ] = useState(0)

const [ produtosugestao , setProdutosugestao ] = useState([])

const [paginaAtual, setPaginaAtual] = useState(1);
const [itensPorPagina, setItensPorPagina] = useState(3);
const [pages, setPages] = useState([]);
const [digitadoCupom , setDigitadoCupom] = useState('')

const [desconto ,setDesconto] = useState(0)

const [tabelaTotal,setTabelaTotal] = useState([])

async function cupom() {
    try {
      const response = await axios.get(API_URL+'/cupom/'+digitadoCupom);

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

        const response = await axios.get(API_URL + '/corleone/usuario/carrinho/listar/'+usuario.id);
        const resp     = await axios.get(`${API_URL}/corleone/pedido/cliente/${usuario.id}`);
        setTabelaTotal(resp.data)
        

        setProdutos(response.data)
        
        //  lista de sugestao   \\
        const lisatagem = await axios.get(API_URL + '/produto') 
        setProdutosugestao(lisatagem.data);

        const mappedPrices = produtos.map((item) => parseFloat(item.preco));
  

        const total = mappedPrices.reduce((acc, preco) => acc + preco, 0);

        setTotal(total);

        setPrecos(mappedPrices);

        try {

                    let compra = {
                      "id_cliente": usuario.id,
                      "desconto": 0,
                      "produtos": 0,
                      "subtotal": 0,
                      "total": 0  
                    };
              
                    
                    let totalProdutosqtd = 0;
              
                    const mappedPrices = produtos.map((item) => {
                      const preco = parseFloat(item.preco);
                      const quantidade = Array.isArray(item.quantidade) ? item.quantidade : [item.quantidade];
                    
                      totalProdutosqtd += quantidade.reduce((acm, pro) => acm + pro, 0);
                    
                      if (!isNaN(preco) && quantidade.every((qtd) => !isNaN(qtd))) {
                        return preco * quantidade.reduce((acm, pro) => acm + pro, 0);
                      } else {
                        return 0;
                      }
                    });
                    
                    const total = mappedPrices.reduce((acm, preco) => acm + preco, 0);
                    
                    // console.log('Total de produtos (quantidade):', totalProdutosqtd);
                    // console.log('Total geral:', total);
                    
                    
                    compra.produtos = totalProdutosqtd;
                    compra.total = total - desconto;
                    compra.subtotal = total
                    compra.desconto = desconto
              
                    const response = await axios.put(`${API_URL}/corleone/altera/pedido/${usuario.id}`,compra)      
                   
                  } 
                    catch (err) {
                    toast.error(err.message)
                  
                    }
    };
    listar();

},[produtos]);



// useEffect(()=>{
// async function listar (){
//      let usuario = localStorage.getItem('usuario-logado');
//         usuario = JSON.parse(usuario)
//     try {

//         let compra = {
//           "id_cliente": usuario.id,
//           "desconto": 0,
//           "produtos": 0,
//           "subtotal": 0,
//           "total": 0  
//         };
  
        
//         let totalProdutosqtd = 0;
  
//         const mappedPrices = produtos.map((item) => {
//           const preco = parseFloat(item.preco);
//           const quantidade = Array.isArray(item.quantidade) ? item.quantidade : [item.quantidade];
        
//           totalProdutosqtd += quantidade.reduce((acm, pro) => acm + pro, 0);
        
//           if (!isNaN(preco) && quantidade.every((qtd) => !isNaN(qtd))) {
//             return preco * quantidade.reduce((acm, pro) => acm + pro, 0);
//           } else {
//             return 0;
//           }
//         });
        
//         const total = mappedPrices.reduce((acm, preco) => acm + preco, 0);
        
//         // console.log('Total de produtos (quantidade):', totalProdutosqtd);
//         // console.log('Total geral:', total);
        
        
//         compra.produtos = totalProdutosqtd;
//         compra.total = total - desconto;
//         compra.subtotal = total
//         compra.desconto = desconto
  
//         const response = await axios.put(`${API_URL}/corleone/altera/pedido/${usuario.id}`,compra)      
       
//       } 
//         catch (err) {
//         toast.error(err.message)
//       }
//  }
//  listar()
// },[produtos.quantidade])

 
    return(
        
        <div>
            
            <div> <Cabecalho/></div>
            <div className='body'  >



            <div> 
                   <div>
                      <h2> Meu Carrinho</h2>
           
                      {produtos.map((item) => {

                            return (
                                <ProdutoCompra produto={{ nome: item.produto, preco: item.preco, img: item.imagem , qtd : item.quantidade , id:item.id_carrinho
                                }} />
                            );
                        })}

                  
                   </div>

    
         
         
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
                <Sugestao produto={{ nome: item.nome, media: item.media, preco: item.preço ,id:item.ID}} />
            ))}
        </div>

            
        </div>
    


                 
            </div>

            <div className='ld-esquerdo'>
                    
                 <h2>Resumo do Pedido </h2>

                <div> 
                    <div>   
                        {tabelaTotal.map((item) =>(
                          <p>{item.ds_produtos > 1 ? `Produtos ( ${item.ds_produtos} )`: `Produto ( ${item.ds_produtos} )` }</p> 
                                     
                            ))
                         } 
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

                    <h4>
                    R$ {tabelaTotal.map((item) => item.ds_subtotal)}
                    </h4>

                </div> 

                <div  className='ld-esquerdo-fl'>
                <p> Frete </p>   <p>a calcular</p>
                </div>

                <div className='ld-esquerdo-fl'>
                        <h3>Total   </h3>
                        <h3>R$ {tabelaTotal.map((item)=>( item.ds_total
                            ))} </h3>
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
                    </div>
                  
                </div>

                <button onClick={cupom} className='claro'>Aplicar</button>
            </div>
            </div>

              

        </div>
    )
}