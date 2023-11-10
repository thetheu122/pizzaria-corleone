import { con } from "../../conection.js";


export async function Listarpedido() {
    let comando = `
    SELECT 
    c.id_cliente       as id,
    c.nm_cliente       as nome,
    p.nm_produto       as produto,
    pd.id_pedido       as idpedido,
    pd.dt_pedido       as data,
    pd.ds_situacao     as situacao,
    pp.id_produto	   as idproduto,
    tp.id_cartao       as idcartao
FROM tb_cliente c
LEFT JOIN tb_tp_pagamento tp ON c.id_cartao = tp.id_cartao
LEFT JOIN tb_pedido pd ON c.id_cliente = pd.id_cliente
LEFT JOIN tb_pedido_produto pp ON pd.id_pedido = pp.id_pedido
LEFT JOIN tb_produto p ON pp.id_produto = p.id_produto
    `

    const [resposta] = await con.query(comando)
    return resposta
}