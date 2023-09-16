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



export async function Login(email) {
    let comando = `
    SELECT
tb_cliente.id_cliente    AS ID,
tb_cliente.ds_email      AS Email,
FROM
tb_cliente
INNER JOIN
tb_endereco ON tb_cliente.id_endereco = tb_endereco.id_endereco
LEFT JOIN
tb_cartao ON tb_cliente.id_cartao = tb_cartao.id_cartao;
    `

    
}