import { con } from "../../conection.js";

export async function inserirProduto(produto) {
    const comando = `
      INSERT INTO tb_produto (
        ds_tipo_produto,
        ds_comentario,
        nm_produto,
        vl_preco,
        ds_descricao,
        vl_preco_promocional,
        bt_disponivel
      ) VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
  

  
    const [res] = await con.query(comando,[
        produto.tipo,
        produto.comentario,
        produto.nome,
        produto.preco,
        produto.descricao,
        produto.preco_promocional,
        produto.disponivel,
    ]);

    produto.id = res.insertId;
  
    return produto;
  }
  
  
  export async function listarProdutos() {
    const comando = `
      SELECT
        tb_produto.id_produto as ID,
        tb_produto.nm_produto as Nome,
        tb_tipo_produto.ds_tipo_produto as Classificação,
        tb_produto.vl_preco as Preço,
        tb_produto.vl_preco_promocional as Preço_promocional,
        tb_comentario.ds_comentario as Comentario,
        tb_produto.ds_descricao as Descrição,
        tb_produto.bt_disponivel as disponivel
      FROM
        tb_produto
      INNER JOIN
        tb_tipo_produto ON tb_produto.ds_tipo_produto = tb_tipo_produto.id_tipo_produto
      INNER JOIN
        tb_comentario ON tb_produto.ds_comentario = tb_comentario.id_comentario
    `;
  
    const [res] = await con.query(comando);
    return res;
  }


  
  
  export async function atualizarProduto(id , produto) {
    const comando = `
      UPDATE tb_produto
      INNER JOIN tb_tipo_produto ON tb_produto.ds_tipo_produto = tb_tipo_produto.id_tipo_produto
      INNER JOIN tb_comentario ON tb_produto.ds_comentario = tb_comentario.id_comentario
      SET
        tb_produto.nm_produto = ?,
        tb_tipo_produto.ds_tipo_produto = ?,
        tb_produto.vl_preco = ?,
        tb_produto.vl_preco_promocional = ?,
        tb_comentario.ds_comentario = ?,
        tb_produto.ds_descricao = ?,
        tb_produto.bt_disponivel = ?
      WHERE tb_produto.id_produto = ?
    `;
  
    const [res] = await con.query(comando,[
        produto.tipo_produto,
        produto.omentario,
        produto.nome,
        produto.preco,
        produto.descricao,
        produto.preco_promocional,
        produto.disponivel,
        id
    ]);
  
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