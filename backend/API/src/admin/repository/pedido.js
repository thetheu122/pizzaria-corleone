import { con } from "../../conection.js";


export async function Novopedido(pedido){
const comando = `
    INSERT INTO tb_pedido (
        id_cliente,
         id_cartao,
          id_pedido_produto,
            ds_situacao)
    VALUES (?, ?, ?, ?) `;


    const [resposta] = await con.query(comando, [
        pedido.cliente,
        pedido.cartao,
        pedido.pedido_produto,
        pedido.situacao
    ])
  

      
    pedido.id = resposta.insertId
 

    return pedido;

}


export async function Listarpedido() {
    let comando = `
            SELECT
            pd.id_pedido       as idpedido,
            pd.dt_pedido       as data,
            pd.ds_situacao     as situacao,
            pp.ds_produtos     as produtos,
            c.nm_cliente       as nome
        FROM
            tb_pedido pd
        LEFT JOIN tb_pedido_produto pp ON pd.id_pedido_produto = pp.id_pedido_produto
        LEFT JOIN tb_cliente c ON pd.id_cliente = c.id_cliente
    `

    const [resposta] = await con.query(comando)
    return resposta
}


export async function listarPorNome(nome) {
    let comando = `
            SELECT
            pd.id_pedido       as idpedido,
            pd.dt_pedido       as data,
            pd.ds_situacao     as situacao,
            pp.ds_produtos     as produtos,
            c.nm_cliente       as nome
        FROM
            tb_pedido pd
        LEFT JOIN tb_pedido_produto pp ON pd.id_pedido_produto = pp.id_pedido_produto
        LEFT JOIN tb_cliente c ON pd.id_cliente = c.id_cliente
        WHERE pp.ds_produtos like ?
        `

        const [resposta] = await con.query(comando, [`%${nome}%`])
        return resposta
}

export async function listarPorId(id) {
    let comando = `
            SELECT
            pd.id_pedido       as idpedido,
            pd.dt_pedido       as data,
            pd.ds_situacao     as situacao,
            pp.ds_produtos     as produtos,
            c.nm_cliente       as nome
        FROM
            tb_pedido pd
        LEFT JOIN tb_pedido_produto pp ON pd.id_pedido_produto = pp.id_pedido_produto
        LEFT JOIN tb_cliente c ON pd.id_cliente = c.id_cliente
        WHERE pd.id_pedido = ?
        `

        const [resposta] = await con.query(comando, [id])
        return resposta
}



export async function listarPorOrdemAlfabetica() {
    let comando = `
            SELECT
            pd.id_pedido       as idpedido,
            pd.dt_pedido       as data,
            pd.ds_situacao     as situacao,
            pp.ds_produtos     as produtos,
            c.nm_cliente       as nome
        FROM
            tb_pedido pd
        LEFT JOIN tb_pedido_produto pp ON pd.id_pedido_produto = pp.id_pedido_produto
        LEFT JOIN tb_cliente c ON pd.id_cliente = c.id_cliente
        ORDER BY pp.ds_produtos
        `

        const [resposta] = await con.query(comando)
        return resposta
}


export async function listarPelaData(data) {
    let comando = `
            SELECT
            pd.id_pedido       as idpedido,
            pd.dt_pedido       as data,
            pd.ds_situacao     as situacao,
            pp.ds_produtos     as produtos,
            c.nm_cliente       as nome
        FROM
            tb_pedido pd
        LEFT JOIN tb_pedido_produto pp ON pd.id_pedido_produto = pp.id_pedido_produto
        LEFT JOIN tb_cliente c ON pd.id_cliente = c.id_cliente
        WHERE DATE(pd.dt_pedido) = ?
        ORDER BY pd.dt_pedido
        `

        const [resposta] = await con.query(comando, [data.substr(0, 10)])
        return resposta
}



export async function listarPorStatusEntregue() {
    let comando = `
            SELECT
            pd.id_pedido       as idpedido,
            pd.dt_pedido       as data,
            pd.ds_situacao     as situacao,
            pp.ds_produtos     as produtos,
            c.nm_cliente       as nome
        FROM
            tb_pedido pd
        LEFT JOIN tb_pedido_produto pp ON pd.id_pedido_produto = pp.id_pedido_produto
        LEFT JOIN tb_cliente c ON pd.id_cliente = c.id_cliente
        WHERE pd.ds_situacao = 'entregue'
        ORDER BY pd.ds_situacao
        `

        const [resposta] = await con.query(comando)
        return resposta
}




export async function listarPorStatusCancelado() {
    let comando = `
            SELECT
            pd.id_pedido       as idpedido,
            pd.dt_pedido       as data,
            pd.ds_situacao     as situacao,
            pp.ds_produtos     as produtos,
            c.nm_cliente       as nome
        FROM
            tb_pedido pd
        LEFT JOIN tb_pedido_produto pp ON pd.id_pedido_produto = pp.id_pedido_produto
        LEFT JOIN tb_cliente c ON pd.id_cliente = c.id_cliente
        WHERE pd.ds_situacao = 'cancelado'
        ORDER BY pd.ds_situacao
        `

        const [resposta] = await con.query(comando)
        return resposta
}


//////////////////////MAIS DETALHES



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






///////////////////////////// rastreamento pedidos




export async function listarRastreamento() {
    let comando = `
            SELECT
            pd.id_pedido 		as idpedido,
            pd.dt_pedido        as data,
            pd.ds_situacao      as status,
            pp.ds_produtos      as produtos,
            pp.ds_subtotal      as subtotal,
            pp.ds_total         as total,
            e.ds_cep            as cep,
            c.nm_cliente        as cliente
        FROM
            tb_pedido pd
        LEFT JOIN tb_pedido_produto pp ON pd.id_pedido_produto = pp.id_pedido_produto
        LEFT JOIN tb_cliente c ON pd.id_cliente = c.id_cliente
        LEFT JOIN tb_endereco e ON c.id_endereco = e.id_endereco
        `

        const [resposta] = await con.query(comando)
        return resposta
}



export async function atualizarStatusParte1(id) {
    let comando = `
        UPDATE tb_pedido
        SET ds_situacao = 'Em preparo'
        WHERE id_pedido = ?
        `
        const [resposta] = await con.query(comando, [id])
        return resposta
}



export async function atualizarStatusParte2(id) {
    let comando = `
        UPDATE tb_pedido
        SET ds_situacao = 'Saiu para entrega'
        WHERE id_pedido = ?
        `
        const [resposta] = await con.query(comando, [id])
        return resposta
}


export async function atualizarStatusParte3(id) {
    let comando = `
        UPDATE tb_pedido
        SET ds_situacao = 'Entregue'
        WHERE id_pedido = ?
        `
        const [resposta] = await con.query(comando, [id])
        return resposta
}

export async function listarPedidosEntregue() {
    let comando = `
        SELECT
            pd.id_pedido as idpedido,
            pp.ds_subtotal as subtotal,
            pp.ds_total as total,
            pp.ds_qtd as qtd,
            c.nm_cliente as cliente
        FROM
            tb_pedido pd
        LEFT JOIN tb_pedido_produto pp ON pd.id_pedido_produto = pp.id_pedido_produto
        LEFT JOIN tb_cliente c ON pd.id_cliente = c.id_cliente
        LEFT JOIN tb_endereco e ON c.id_endereco = e.id_endereco
        WHERE
            pd.ds_situacao IN ('Concluído', 'Entregue')
        `;

    const [resposta] = await con.query(comando);
    return resposta;
}





