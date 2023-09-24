

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
     
  const campos = ['nome', 'tipo' , 'ingredientes', 'descricao', 'preco','preco_promocional','disponivel']
  for ( const validar of campos){

    if(!produto[validar])
    erros.push( `Campo ${validar} vazio . É necessario preencher todos os campos `)
  }

  return erros

}

