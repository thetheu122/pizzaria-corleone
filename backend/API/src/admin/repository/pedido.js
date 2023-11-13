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


export async function listarPorNome(nome) {
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
        WHERE p.nm_produto like ?
        `

        const [resposta] = await con.query(comando, [`%${nome}%`])
        return resposta
}

export async function listarPorId(id) {
    let comando = `
            SELECT 
            c.id_cliente       as idcliente,
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
        WHERE pd.id_pedido = ?
        `

        const [resposta] = await con.query(comando, [id])
        return resposta
}



export async function listarPorOrdemAlfabetica() {
    let comando = `
            SELECT 
            c.id_cliente as idcliente,
            c.nm_cliente as nome,
            p.nm_produto as produto,
            pd.id_pedido as idpedido,
            pd.dt_pedido as data,
            pd.ds_situacao as situacao,
            pp.id_produto as idproduto,
            tp.id_cartao as idcartao
        FROM tb_cliente c
        LEFT JOIN tb_tp_pagamento tp ON c.id_cartao = tp.id_cartao
        LEFT JOIN tb_pedido pd ON c.id_cliente = pd.id_cliente
        LEFT JOIN tb_pedido_produto pp ON pd.id_pedido = pp.id_pedido
        LEFT JOIN tb_produto p ON pp.id_produto = p.id_produto
        ORDER BY p.nm_produto
        `

        const [resposta] = await con.query(comando)
        return resposta
}


export async function listarPelaData(data) {
    let comando = `
            SELECT 
            c.id_cliente       AS idcliente,
            c.nm_cliente       AS nome,
            p.nm_produto       AS produto,
            pd.id_pedido       AS idpedido,
            pd.dt_pedido       AS data,
            pd.ds_situacao     AS situacao,
            pp.id_produto      AS idproduto,
            tp.id_cartao       AS idcartao
        FROM tb_cliente c
        LEFT JOIN tb_tp_pagamento tp ON c.id_cartao = tp.id_cartao
        LEFT JOIN tb_pedido pd ON c.id_cliente = pd.id_cliente
        LEFT JOIN tb_pedido_produto pp ON pd.id_pedido = pp.id_pedido
        LEFT JOIN tb_produto p ON pp.id_produto = p.id_produto
        WHERE DATE(pd.dt_pedido) = ?
        ORDER BY pd.dt_pedido
        `

        const [resposta] = await con.query(comando, [data.substr(0, 10)])
        return resposta
}



export async function listarPorStatusEntregue() {
    let comando = `
            SELECT 
            c.id_cliente       AS idcliente,
            c.nm_cliente       AS nome,
            p.nm_produto       AS produto,
            pd.id_pedido       AS idpedido,
            pd.dt_pedido       AS data,
            pd.ds_situacao     AS situacao,
            pp.id_produto      AS idproduto,
            tp.id_cartao       AS idcartao
        FROM tb_cliente c
        LEFT JOIN tb_tp_pagamento tp ON c.id_cartao = tp.id_cartao
        LEFT JOIN tb_pedido pd ON c.id_cliente = pd.id_cliente
        LEFT JOIN tb_pedido_produto pp ON pd.id_pedido = pp.id_pedido
        LEFT JOIN tb_produto p ON pp.id_produto = p.id_produto
        WHERE pd.ds_situacao = 'entregue'
        ORDER BY pd.ds_situacao
        `

        const [resposta] = await con.query(comando)
        return resposta
}




export async function listarPorStatusCancelado() {
    let comando = `
            SELECT 
            c.id_cliente       AS idcliente,
            c.nm_cliente       AS nome,
            p.nm_produto       AS produto,
            pd.id_pedido       AS idpedido,
            pd.dt_pedido       AS data,
            pd.ds_situacao     AS situacao,
            pp.id_produto      AS idproduto,
            tp.id_cartao       AS idcartao
        FROM tb_cliente c
        LEFT JOIN tb_tp_pagamento tp ON c.id_cartao = tp.id_cartao
        LEFT JOIN tb_pedido pd ON c.id_cliente = pd.id_cliente
        LEFT JOIN tb_pedido_produto pp ON pd.id_pedido = pp.id_pedido
        LEFT JOIN tb_produto p ON pp.id_produto = p.id_produto
        WHERE pd.ds_situacao = 'cancelado'
        ORDER BY pd.ds_situacao
        `

        const [resposta] = await con.query(comando)
        return resposta
}




export async function listarDetalhesPorId(id) {
    let comando = `
            SELECT
            p.id_pedido     as idpedido,
            p.dt_pedido     as data,
            c.nm_cliente    as nome,
            c.ds_telefone   as telefone,
            e.ds_estado     as estado,
            e.ds_cidade     as cidade,
            e.ds_bairro     as bairro,
            e.ds_rua        as rua,
            e.ds_numero     as numero,
            e.ds_cep        as cep,
            pr.nm_produto   as produto,
            p.ds_situacao   as status
        FROM
            tb_pedido p
            LEFT JOIN tb_pedido_produto pp ON p.id_pedido = pp.id_pedido
            LEFT JOIN tb_produto pr ON pp.id_produto = pr.id_produto
            LEFT JOIN tb_cliente c ON p.id_cliente = c.id_cliente
            LEFT JOIN tb_endereco e ON c.id_endereco = e.id_endereco
            WHERE p.id_pedido = ?
        `

        const [resposta] = await con.query(comando, [id])
        return resposta
}