import { verificarproduto } from "../repository/produtorepository.js"



export async function analise (produto){


const tipo = {
bebida      : produto.tipo ,
sobremesa   : produto.tipo ,
salgado     : produto.tipo ,
vegano      : produto.tipo,
vegetariano : produto.tipo
}

for( let cont in tipo ){
   for( let contador = 1  ; contador <= Object.keys(tipo).length ; contador ++){        
    if ( produto.tipo === cont){
         produto.tipo = contador }
    }
   
}

  const erros = []
     
  const campos = ['nome', 'tipo' , 'ingredientes', 'descricao', 'preco','disponivel']
  for ( const validar of campos){

    if(!produto[validar])
    erros.push( `Campo ${validar} vazio . É necessario preencher todos os campos `)
  }

  if (erros.length === 0){
    const verificar = await verificarproduto(produto)
    if(verificar === true){
     erros.push('Produto ja cadastrado')
    }
  }

  return erros

}



