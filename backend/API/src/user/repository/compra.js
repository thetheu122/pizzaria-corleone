import { con } from "../../conection.js";


export async function novaCompra (compra){
    
const ds_produtos = JSON.stringify(compra.produtos);

const comando = `
INSERT INTO tb_pedido_produto (id_cliente , ds_desconto , ds_produtos, ds_total)
VALUES (
  ? , 
  ? ,
  ? ,
  ?
)`;

const [ resposta ] = await con.query( comando , [compra.id_cliente, compra.desconto, ds_produtos , compra.total_compra])
compra.id =  resposta.insertId
return compra
}


export async function listarPedido_produto(){
  const comando = ``
}



export async function listarCompra(id){

  const comando = `
  SELECT
  tb_pedido_produto.id_pedido_produto,
  tb_cliente.id_cliente,
  tb_pedido_produto.ds_desconto  as desconto ,
  tb_cliente.nm_cliente AS nome_cliente,
  tb_pedido_produto.ds_total,
  tb_pedido_produto.ds_produtos 
FROM tb_pedido_produto
INNER JOIN tb_cliente ON tb_pedido_produto.id_cliente = tb_cliente.id_cliente
where tb_cliente.id_cliente = ?
  `
const [ resposta ] = await con.query(comando , [ id ])
return resposta
}



export async function alterarCompra ( compra , id) {


const ds_produtos = JSON.stringify(compra.produtos);
const comando  =
`
update 	tb_pedido_produto
set    		 ds_desconto    =  ? ,
    			 ds_produtos    =  ? ,
		    	 ds_total       =  ?
where   id_pedido_produto =  ? 
`;

const [ resposta ]= await con.query( comando , 
[
compra.desconto ,
ds_produtos ,
compra.total    ,
id
])


if (resposta.affectedRows ==1)
return 'alterado com sucesso'
else
return 'erro . nao foi possivel alterar'
}


export async function deleteCompra (id){
  
const comando = `
delete from tb_pedido_produto
where  id_pedido_produto = ?
`;

const [ resposta ] = await con.query(comando , [ id])
return resposta
}



export async function verificarCompra(idp ,idc){

const comando = `
select * 
from  tb_pedido_produto
INNER JOIN tb_cliente ON tb_pedido_produto.id_cliente = tb_cliente.id_cliente
where tb_pedido_produto.id_pedido_produto = ?
and   tb_cliente.id_cliente = ? 
`;

const [ resposta ] = await con.query(comando , [ idp,idc ])
return resposta
}



