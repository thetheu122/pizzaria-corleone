import { con } from "./conection";


export async function cadastrarEndereco(endereco){
    let comando =
    `
    INSERT INTO tb_endereco (ds_estado, ds_municipio, ds_rua, ds_numero, ds_cep)
         VALUES ('São Paulo', 'São Paulo', 'Rua da Amostra, 123', '123', '12345-678')
    `
    let respos = await con.query(comando,[
        endereco.estado,
        endereco.municipio,
        endereco.rua,
        endereco.numero,
        endereco.cep
    ])
    respos.id = respos.insertId
    return respos
}