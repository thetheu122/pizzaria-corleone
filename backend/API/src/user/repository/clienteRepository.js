import con from "../../conection.js";


export async function inserirCliente(clientes) {
    let comando = `
    INSERT INTO tb_cliente (id_endereco, id_cartao, nm_cliente, ds_email, ds_telefone, ds_senha, ds_cpf, ds_nacimento)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `

    const [resposta] = await con.query(comando, [
        clientes.endereco,
        clientes.cartao,
        clientes.cliente,
        clientes.email,
        clientes.telefone,
        clientes.senha,
        clientes.cpf,
        clientes.nascimento
    ])

    clientes.id = resposta.insertId
    return clientes;
}



export async function Login(email, senha) {
    let comando =
    `
        SELECT
        tb_cliente.id_cliente    AS ID,
        tb_cliente.ds_email      AS Email,
        tb_cliente.ds_senha      AS senha
        FROM tb_cliente
        WHERE ds_email = ?,
        AND ds_senha = ?
    `
    const [resposta] = await con.query(comando, [ email , senha])
    return resposta;
};