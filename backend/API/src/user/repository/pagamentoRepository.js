import { con } from "../../conection.js";

export function validarDadosCartao(dados) {
    console.log(dados)
    for (const campo in dados) {
        if (!dados[campo]) {
            throw new Error(`Campo "${campo}" está vazio.`);
        }
    }
}

export async function listarTodosCartoes() {
    const comando = `
        SELECT * FROM tb_cartao;
    `;

    const cartoes = await con.query(comando);

    return cartoes;
}


export async function listarCartaoPorId(id) {
    let comando = `
        SELECT * FROM tb_cartao
        WHERE id_cartao = ?;
    `;

    const resultado = await con.query(comando, [id]);

    return resultado; 
}

export async function CadastrarCartao(params){
    let comando =
    `
    INSERT INTO tb_cartao(id_cliente, ds_numero, ds_nome, ds_validade, ds_cvv)
                  VALUES (?,?,?,?,?)
    `
    let cartaoAdd = await con.query(comando, [
        params.id,
        params.num,
        params.nome,
        params.validade,
        params.cvv])

    params.id = cartao.insertId

    return params

}

export async function AlterarCartao(newInfoCartao){
    let comando = 
    `
    UPDATE tb_cartao
       SET ds_numero = ?,
           ds_nome = ?,
           ds_validade = ?,
           ds_cvv = ?
     WHERE id_cliente = ?
    `
    let update = await con.query(comando, [
        newInfoCartao.num,
        newInfoCartao.nome,
        newInfoCartao.val,
        newInfoCartao.cvv,
        newInfoCartao.id
    ]);
    
    let numRowsAffected = update.affectedRows;
    
    return numRowsAffected
    
}

export async function ListarCartaoCliente(idCliente){
    let comando = 
    `
       SELECT 
              cl.id_cliente,
              ca.id_cartao,
              ca.ds_numero,
              ca.ds_nome,
              ca.ds_validade,
              ca.ds_cvv
         FROM tb_cliente cl
    LEFT JOIN tb_cartao ca ON cl.id_cliente = ca.id_cliente
        WHERE cl.id_cliente = ?
    `
    
    let [verify] = await con.query(comando, idCliente)

    return verify[0]
}

// CREATE TABLE  tb_cartao(

//     id_cartao    INT PRIMARY KEY AUTO_INCREMENT,
//     id_cliente   INT , 
//     ds_numero    VARCHAR(100) NOT NULL,
//     ds_nome      VARCHAR(100) NOT NULL,
//     ds_validade  VARCHAR(100) NOT NULL,
//     ds_cvv       VARCHAR(100)  NOT NULL,
    
//     FOREIGN KEY (id_cliente) REFERENCES tb_cliente(id_cliente)
//     );

