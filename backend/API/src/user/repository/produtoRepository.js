import { con } from '../../conection.js'

export async function ListarCardapio(tp, restricao_1, restricao_2, restricao_3, nm, orderby) {
    const comando = 
   `
   SELECT 
   p.id_produto AS ID,
   MAX(p.nm_produto) AS nome, 
   MAX(tp.ds_tipo_produto) AS tipo,
   MAX(p.ds_ingredientes) AS ingredientes,
   MAX(p.ds_descricao) AS descricao,
   MAX(p.vl_preco) AS preço,
   MAX(p.vl_preco_promocional) AS preco_promocional,
   MAX(p.bt_disponivel) AS disponivel,
   MAX(img.id_imagem) AS idimagem,
   MAX(img.img_produto) AS imagem,
   MAX(m.ds_media) AS media , 
   MAX(r1.ds_restricao) AS restricao_1, 
   MAX(r2.ds_restricao) AS restricao_2, 
   MAX(r3.ds_restricao) AS restricao_3
FROM tb_produto p
INNER JOIN tb_tipo_produto AS tp ON p.ds_tipo_produto = tp.id_tipo_produto
LEFT JOIN tb_imagem AS img ON img.id_produto = p.id_produto
LEFT JOIN tb_media AS m ON m.id_produto = p.id_produto
INNER JOIN tb_restricao r1 ON p.id_produto = r1.id_produto AND r1.ds_restricao like ?
INNER JOIN tb_restricao r2 ON p.id_produto = r2.id_produto AND r2.ds_restricao like ?
INNER JOIN tb_restricao r3 ON p.id_produto = r3.id_produto AND r3.ds_restricao like ?
WHERE p.nm_produto LIKE ?
AND tp.ds_tipo_produto LIKE ?
GROUP BY 
   p.id_produto, 
   tp.ds_tipo_produto, 
   p.ds_ingredientes, 
   p.ds_descricao, 
   p.vl_preco, 
   p.vl_preco_promocional, 
   p.bt_disponivel, 
   img.id_imagem, 
   img.img_produto, 
   m.ds_media, 
   r1.ds_restricao, 
   r2.ds_restricao, 
   r3.ds_restricao
ORDER BY ?
   `
   
   let [response] = await con.query(comando,[restricao_1, restricao_2, restricao_3, nm ,tp, orderby]);
   
   return response
}