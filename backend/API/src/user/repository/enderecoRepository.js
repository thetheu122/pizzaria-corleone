import { con } from "../../conection.js";


export async function cadastrarEndereco(endereco){
    let comando =
    `
    INSERT INTO tb_endereco (ds_estado, ds_cidade, ds_bairro, ds_rua, ds_numero, ds_cep)
        VALUES (?, ?, ?, ?, ?, ?);
    `
    let respos = await con.query(comando,[
        endereco.estado,
        endereco.cidade,
        endereco.bairro,
        endereco.rua,
        endereco.numero,
        endereco.cep
    ])
    respos.id = respos.insertId
    return respos
}