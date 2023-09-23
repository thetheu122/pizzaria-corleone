import { con } from "../../conection.js";

export async function inserirProduto(produto) {
    const comando = `
      INSERT INTO tb_produto ( 
        ds_tipo_produto , 
        ds_ingredientes,
        nm_produto ,
        vl_preco ,    
        ds_descricao , 
        vl_preco_promocional , 
        bt_disponivel   )
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
  
         console.log(produto)
  
    const [res] = await con.query(comando,[
        produto.tipo,
        produto.ingredientes,
        produto.nome,
        produto.preco,
        produto.descricao,
        produto.preco_promocional,
        produto.disponivel,
    ]);

    produto.id = res.insertId;
  

  if( produto.tipo === 1){
       produto.tipo = "Bebida"
   }

  if(produto.tipo ===2){
     produto.tipo = "sobremesa"
  }

  if(produto.tipo ===3){
     produto.tipo = "Salgado"
  }
    return produto;
  }


  
  export async function verificarproduto(produto){
    const comando = `
    SELECT
	  tb_produto.id_produto             as ID,
    tb_produto.nm_produto             as Nome,  
    tb_tipo_produto.ds_tipo_produto   as Classificação ,
	  tb_produto.vl_preco               as Preço,
	  tb_produto.vl_preco_promocional   as Preço_promocional,
    tb_produto.ds_ingredientes     as ingredientes,
    tb_produto.ds_descricao           as Descrição ,
    tb_produto.bt_disponivel          as disponivel
    FROM tb_produto
    INNER JOIN
    tb_tipo_produto ON tb_produto.ds_tipo_produto = tb_tipo_produto.id_tipo_produto
    where tb_produto.nm_produto = ?
    or   tb_produto.ds_ingredientes =?
    or   tb_produto.ds_descricao = ?`

    const [ resposta ] = await con.query( comando , [
       produto.nome ,
       produto.ingredientes , 
       produto.descricao] )

    return resposta.length > 0;

  }



  export async function listarProdutos() {
    const comando = `
                
    SELECT
    tb_produto.id_produto             as ID,
      tb_produto.nm_produto             as Nome,  
      tb_tipo_produto.ds_tipo_produto   as Classificação ,
    tb_produto.vl_preco               as Preço,
    tb_produto.vl_preco_promocional   as Preço_promocional,
      tb_produto.ds_ingredientes     as ingredientes,
      tb_produto.ds_descricao           as Descrição ,
      tb_produto.bt_disponivel          as disponivel
  FROM
      tb_produto
  INNER JOIN
      tb_tipo_produto ON tb_produto.ds_tipo_produto = tb_tipo_produto.id_tipo_produto;
    `;
  
    const [res] = await con.query(comando);
    return res;
  }

  export async function listarprodutoimg(){
 
    const comando = `
    SELECT      tb_produto.id_produto  as Produto,
            tb_produto.nm_produto as Produto,
            tb_produto.ds_tipo_produto as Classificação,
            tb_produto.vl_preco as Preço,
            tb_produto.vl_preco_promocional as Preço_promocional,
            tb_produto.ds_ingredientes as Ingredientes,
            tb_produto.ds_descricao as Descrição,
            tb_produto.bt_disponivel as Disponivel,
			'     tb_imagem.id_imagem  as id_imagem,  
            tb_imagem.img_produto as imagem 
          
FROM       tb_imagem 
INNER JOIN tb_produto ON tb_imagem.id_produto = tb_produto.id_produto;`   


const [ resposta ] = await con.query( comando )
return resposta 
  }
  
  
  export async function atualizarProduto(id , produto) {
    const comando = `
    UPDATE tb_produto
    INNER JOIN tb_tipo_produto ON tb_produto.ds_tipo_produto = tb_tipo_produto.id_tipo_produto
    SET
      tb_produto.nm_produto = ?,
      tb_tipo_produto.ds_tipo_produto = ?,
      tb_produto.vl_preco = ?,
      tb_produto.ds_ingredientes = ?,
      tb_produto.ds_descricao = ?, 
      tb_produto.bt_disponivel = ?
      WHERE tb_produto.id_produto = ?
    `;


  
    const [res] = await con.query(comando,[
        produto.nome,
        produto.classificacao,
        produto.preco,
        produto.ingredientes,
        produto.descricao,
        produto.disponivel,
        id
    ])

    console.log(produto.nome)

    
  
    return res
    ;
  }



  
  export async function excluirProduto(id) {
    const comando = `
      DELETE FROM tb_produto
      WHERE id_produto = ?
    `;
  
    const [res] = await con.query(comando, [id]);
    return res.affectedRows;
  }

  export async function imagem(imagem, id){

    const comando =
    `INSERT INTO tb_imagem (img_produto, id_produto)
    VALUES (?, ?);
    
    `

    const [ respsta ] =await con.query(comando, [imagem, id])
    return respsta.affectedRows
    
  
}