import { con } from "../../conection.js";

export async function itenscarrinho(itens) {

    const comando = `
insert tb_carrinho
(id_produto,
id_cliente,
ds_carrinho,
ds_qtd)
values ( ? ,? , ? , ? )
`;

    const [resposta] = await con.query(comando, [
        itens.produto,
        itens.cliente,
        itens.disponivel,
        itens.qtd
    ]);
    itens.id = resposta.insertId

    return itens


}

export async function alteraritens(itens) {

    const comando = `
update tb_carrinho
set    ds_carrinho = ? ,
       ds_qtd      = ?
where  id_carrinho = ? 

`;
    const [resposta] = await con.query(comando, [
        itens.disponivel,
        itens.qtd,
        itens.idcarrinho
    ])


    return resposta.affectedRows > 0
}



export async function listarcarrinho() {

    const comando = `
select 
case 
when  ds_carrinho = 0 then false
when  ds_carrinho = 1 then true
end   as carrinho ,
id_carrinho , 
tb_produto.nm_produto as produto,
tb_produto.vl_preco   as preco,
tb_carrinho.ds_qtd as quantidade ,
tb_produto.id_produto,
tb_cliente.nm_cliente as cliente,
tb_cliente.id_cliente 
from tb_carrinho
LEFT JOIN tb_cliente ON tb_carrinho.id_cliente = tb_cliente.id_cliente
LEFT JOIN tb_produto ON tb_carrinho.id_produto = tb_produto.id_produto;

`;
    const [resposta] = await con.query(comando)
    return resposta
}



export async function listarcarrinhoid(id) {

    const comando = `
    select 
    case 
    when  ds_carrinho = 0 then false
    when  ds_carrinho = 1 then true
    end   as carrinho ,
    id_carrinho , 
    tb_produto.nm_produto as produto,
    tb_produto.vl_preco   as preco,
    tb_carrinho.ds_qtd as quantidade ,
    tb_produto.id_produto,
    tb_cliente.nm_cliente as cliente,
    tb_cliente.id_cliente 
    from tb_carrinho
    LEFT JOIN tb_cliente ON tb_carrinho.id_cliente = tb_cliente.id_cliente
    LEFT JOIN tb_produto ON tb_carrinho.id_produto = tb_produto.id_produto
    where tb_cliente.id_cliente = ?
    
    `;
    const [resposta] = await con.query(comando, [id])
    return resposta
}






export async function verificarcarrinho(cliente, produto) {

    const comando = `
        select 
        case 
        when  ds_carrinho = 0 then 'indisponível'
        when  ds_carrinho = 1 then 'disponivel'
        end   as carrinho ,
        id_carrinho , 
        tb_produto.nm_produto as produto,
        tb_produto.vl_preco   as preco,
        tb_carrinho.ds_qtd as quantidade ,
        tb_produto.id_produto,
        tb_cliente.nm_cliente as cliente,
        tb_cliente.id_cliente 
        from tb_carrinho
        LEFT JOIN tb_cliente ON tb_carrinho.id_cliente = tb_cliente.id_cliente
        LEFT JOIN tb_produto ON tb_carrinho.id_produto = tb_produto.id_produto
        where tb_cliente.id_cliente = ?
        and   tb_produto.id_produto = ?
        
        `;
    const [resposta] = await con.query(comando, [cliente, produto])
    return resposta
}


export async function buscarNomeDoProduto(nmProduto) {
    const comando = `
          SELECT 
             CASE
                WHEN ds_carrinho = 0 THEN 'indisponível'
                WHEN ds_carrinho = 1 THEN 'disponível'
              END AS carrinho,
             tb_carrinho.id_carrinho,
              tb_produto.nm_produto AS produto,
              tb_produto.vl_preco AS preco,
              tb_carrinho.ds_qtd AS quantidade,
              tb_produto.id_produto,
              tb_cliente.nm_cliente AS cliente,
              tb_cliente.id_cliente
           FROM tb_carrinho
            LEFT JOIN tb_cliente ON tb_carrinho.id_cliente = tb_cliente.id_cliente
            LEFT JOIN tb_produto ON tb_carrinho.id_produto = tb_produto.id_produto
            WHERE tb_produto.nm_produto like ?;
          `;

    const [resposta] = await con.query(comando, ['%' + nmProduto + '%']);
    return resposta;
}



export async function listarProdutosDeUmCliente(id, nome) {
    let comando = `
        SELECT
            c.nm_cliente AS nomecliente,
            p.nm_produto AS nomeproduto
        FROM
            tb_cliente AS c
        JOIN
            tb_carrinho AS carrinho
        ON
            c.id_cliente = carrinho.id_cliente
        JOIN
            tb_produto AS p
        ON
            carrinho.id_produto = p.id_produto
        WHERE
            c.id_cliente = 3; 
        `

        let TERMINAR = 'terminar'
}




