import { con } from "../../conection.js";

// mais informações em analise

export async function inserirfavorito (favorito) {
const comando = `

insert into tb_favorito(
id_cliente,
id_produto,
ds_favorito)
values( ? ,? , ? )`;

const [ resposta ] = await con.query(comando,[favorito.cliente,favorito.produto,favorito.favorito])
favorito.id = resposta.insertId
return favorito
}




export async function listarfavoritos(iDcliente){

const comando = `
SELECT  
CASE 
    WHEN ds_favorito = 0 THEN 'false' 
    WHEN ds_favorito = 1 THEN 'Favorito'
    ELSE 'valor inválido'
END AS valor, 


tb_cliente.nm_cliente AS cliente,
tb_favorito.id_cliente,
tb_produto.nm_produto as produto,
tb_produto.vl_preco   as preco,
tb_produto.id_produto,
ds_favorito,
id_favorito
FROM tb_favorito

LEFT JOIN tb_cliente ON tb_favorito.id_cliente = tb_cliente.id_cliente
LEFT JOIN tb_produto ON tb_favorito.id_produto = tb_produto.id_produto
where ds_favorito = true
and   tb_cliente.id_cliente = ?;`

const [  resposta ] = await con.query(comando,[iDcliente])
return resposta
}


// mais informações em analise

export async function favorito (){

const comando = `
SELECT 
CASE 
    WHEN ds_favorito = 0 THEN 'false' 
    WHEN ds_favorito = 1 THEN 'Favorito'
    ELSE 'valor inválido'
END AS valor, 


tb_cliente.nm_cliente AS cliente,
tb_favorito.id_cliente,
tb_produto.nm_produto as produto,
tb_produto.vl_preco   as preco,
tb_produto.id_produto,
ds_favorito,
id_favorito
FROM tb_favorito

LEFT JOIN tb_cliente ON tb_favorito.id_cliente = tb_cliente.id_cliente
LEFT JOIN tb_produto ON tb_favorito.id_produto = tb_produto.id_produto;

`
const [ resposta ] = await con.query(comando)
return resposta

}


export async function alterarfavorito (favorito) {

const comando = `
update  tb_favorito 
set     ds_favorito = ?
where   id_favorito = ?;
`
const [ resposta ] = await con.query(comando,[favorito.favorito,favorito.id])
return resposta.affectedRows > 0 
}


export async function verificafavorito(id){

const comando = `
SELECT  
CASE 
    WHEN ds_favorito = 0 THEN 'false' 
    WHEN ds_favorito = 1 THEN 'Favorito'
    ELSE 'valor inválido'
END AS valor, 


tb_cliente.nm_cliente AS cliente,
tb_favorito.id_cliente,
tb_produto.nm_produto as produto,
tb_favorito.id_produto,
ds_favorito,
id_favorito
FROM tb_favorito

LEFT JOIN tb_cliente ON tb_favorito.id_cliente = tb_cliente.id_cliente
LEFT JOIN tb_produto ON tb_favorito.id_produto = tb_produto.id_produto
where tb_produto.id_produto = ?
and   tb_cliente.id_cliente = ?
`;

const [ resposta ] = await con.query(comando,[id.produto,id.cliente])
console.log(resposta)
return resposta
}
