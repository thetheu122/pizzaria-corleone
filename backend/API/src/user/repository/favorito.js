import { con } from "../../conection.js";

// mais informações em analise

export async function inserirfavorito(favorito) {
    const comando = `

insert into tb_favorito(
id_cliente,
id_produto,
ds_favorito)
values( ? ,? , ? )`;

    const [resposta] = await con.query(comando, [favorito.cliente, favorito.produto, favorito.favorito])
    favorito.id = resposta.insertId
    return favorito
}




export async function listarfavoritos(iDcliente) {

    const comando = `
SELECT  
CASE 
    WHEN ds_favorito = 0 THEN 'false' 
    WHEN ds_favorito = 1 THEN 'Favorito'
    ELSE 'valor inválido'
END AS valor, 


tb_cliente.nm_cliente AS cliente,
tb_favorito.id_cliente as idcliente,
tb_produto.nm_produto as produto,
tb_produto.vl_preco   as preco,
tb_produto.id_produto as idproduto,
tb_produto.ds_ingredientes AS ingredientes,
tb_imagem.img_produto AS imagem,
id_favorito           as idfavorito,
ds_favorito,
id_favorito
FROM tb_favorito

LEFT JOIN tb_cliente ON tb_favorito.id_cliente = tb_cliente.id_cliente
LEFT JOIN tb_produto ON tb_favorito.id_produto = tb_produto.id_produto
LEFT JOIN tb_media ON tb_produto.id_produto = tb_media.id_produto
  LEFT JOIN tb_imagem ON tb_produto.id_produto = tb_imagem.id_produto
where ds_favorito = true
and   tb_cliente.id_cliente = ?;`

    const [resposta] = await con.query(comando, [iDcliente])
    return resposta
}


// mais informações em analise

export async function favorito() {

    const comando = `
SELECT 
CASE 
    WHEN ds_favorito = 0 THEN 'false' 
    WHEN ds_favorito = 1 THEN 'Favorito'
    ELSE 'valor inválido'
END AS valor, 

    tb_cliente.nm_cliente AS cliente,
    tb_favorito.id_cliente,
    tb_produto.nm_produto AS produto,
    tb_favorito.id_produto,
    tb_favorito.ds_favorito,
    tb_favorito.id_favorito     ,
    tb_imagem.img_produto       as imagem   
FROM tb_favorito
LEFT JOIN tb_cliente ON tb_favorito.id_cliente = tb_cliente.id_cliente
LEFT JOIN tb_produto ON tb_favorito.id_produto = tb_produto.id_produto
LEFT JOIN tb_imagem ON tb_favorito.id_produto = tb_imagem.id_produto
`
    const [resposta] = await con.query(comando)
    return resposta

}


export async function favoritoRanked() {

    const comando = `
    SELECT
    tb_produto.nm_produto as produto,
    MAX(tb_imagem.img_produto) as imagem,
    COUNT(tb_favorito.id_cliente) as qtd_favoritos
FROM tb_produto
LEFT JOIN tb_favorito ON tb_produto.id_produto = tb_favorito.id_produto
LEFT JOIN tb_cliente ON tb_favorito.id_cliente = tb_cliente.id_cliente
LEFT JOIN tb_imagem ON tb_produto.id_produto = tb_imagem.id_produto
WHERE tb_favorito.ds_favorito = 1
GROUP BY tb_produto.id_produto, tb_produto.nm_produto
ORDER BY qtd_favoritos DESC;
`
    const [resposta] = await con.query(comando)
    return resposta

}






export async function alterarfavorito(favorito) {
    const comando = `
update  tb_favorito 
set     ds_favorito = ?
where   id_favorito = ?
`
    const [resposta] = await con.query(comando, [favorito.favorito, favorito.id])
    console.log(resposta)
    return resposta.affectedRows > 0
}


export async function verificafavorito(produto, cliente) {

    const comando = `
SELECT  
CASE 
    WHEN ds_favorito = 0 THEN 'false' 
    WHEN ds_favorito = 1 THEN 'Favorito'
    ELSE 'valor inválido'
END AS valor, 


tb_cliente.nm_cliente AS cliente,
tb_favorito.id_cliente      as idcliente,
tb_produto.nm_produto as produto,
tb_produto.vl_preco   as preco,
tb_produto.id_produto as idproduto,
ds_favorito           as favorito,
id_favorito           as idfavorito
FROM tb_favorito

LEFT JOIN tb_cliente ON tb_favorito.id_cliente = tb_cliente.id_cliente
LEFT JOIN tb_produto ON tb_favorito.id_produto = tb_produto.id_produto
where tb_produto.id_produto = ?
and   tb_cliente.id_cliente = ?
`;

    const [resposta] = await con.query(comando, [produto, cliente])

    return resposta
}
