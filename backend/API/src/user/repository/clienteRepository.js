import { con } from "../../conection.js";


export async function inserirCliente(clientes) {

    const [existingCliente] = await con.query(
        'SELECT * FROM tb_cliente WHERE ds_email = ? OR ds_telefone = ?',
        [clientes.email, clientes.telefone]
    );
    console.log(clientes) 

    if (existingCliente.length > 0) {
        if (existingCliente[0].ds_telefone === clientes.telefone) {
            throw new Error('Já existe cliente com esse telefone')
        } else if (existingCliente[0].ds_email === clientes.email) {
            throw new Error('Já existe um cliente com o mesmo email')
        }
    }

    let comando = `
    INSERT INTO tb_cliente (id_endereco, id_cartao, nm_cliente, ds_email, ds_telefone, ds_senha, ds_cpf, ds_nacimento)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const [resposta] = await con.query(comando, [
        clientes.endereco,
        clientes.cartao,
        clientes.cliente,
        clientes.email,
        clientes.telefone,
        clientes.senha,
        clientes.cpf,
        clientes.nascimento
    ]);


    clientes.id = resposta.insertId;

    return clientes;
}




export async function loginCliente(email, senha) {
    let comando =
        `
        SELECT
        tb_cliente.id_cliente    AS id,
        tb_cliente.ds_email      as email
        FROM tb_cliente
        WHERE ds_email = ?
        AND ds_senha = ?
    `

    const [resposta] = await con.query(comando, [email, senha])

    return resposta[0];
};

export async function infoCLiente(id) {
    let comando =
        `
        SELECT  
            id_endereco     as endereco, 
            id_cartao       as cartao, 
            nm_cliente      as cliente, 
            ds_email        as email, 
            ds_telefone     as telefone, 
            ds_senha        as senha, 
            ds_cpf          as cpf, 
            ds_nascimento   as dtnascimento 
        FROM tb_cliente
        WHERE id_cliente = ?;

    `

    const [resposta] = await con.query(comando, [id])

    return resposta[0];
};