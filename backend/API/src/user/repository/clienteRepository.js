import { con } from "../../conection.js";


export async function inserirCliente(clientes) {

    const [existingCliente] = await con.query(
        'SELECT * FROM tb_cliente WHERE ds_email = ? OR ds_telefone = ? OR ds_cpf = ?',
        [clientes.email, clientes.telefone, clientes.cpf]
    );

    if (existingCliente.length > 0) {
        let respp = `122`
        return respp
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
        tb_cliente.nm_cliente    AS nome,
        tb_cliente.ds_email      AS email
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
            c.id_endereco as endereco,
            c.id_cartao         as cartao,
            c.nm_cliente        as cliente,
            c.ds_email          as email,
            c.ds_telefone       as telefone,
            c.ds_senha          as senha,
            c.ds_cpf            as cpf,
            c.ds_nacimento     as dtnascimento,
            e.ds_estado         as estado,
            e.ds_cidade         as cidade,
            e.ds_bairro         as bairro,
            e.ds_rua            as rua,
            e.ds_numero         as numero,
            e.ds_cep            as cep
            FROM tb_cliente c
      INNER JOIN tb_endereco e ON c.id_endereco = e.id_endereco
           WHERE c.id_cliente = ?;


    `

    const [resposta] = await con.query(comando, [id])

    return resposta[0];
};

export async function listarCliente() {
    let comando =
        `
    SELECT
    c.id_cliente        as idcliente,
    c.id_endereco       as endereco,
    c.id_cartao         as cartao,
    c.nm_cliente        as cliente,
    c.ds_email          as email,
    c.ds_telefone       as telefone,
    c.ds_senha          as senha,
    c.ds_cpf            as cpf,
    c.ds_nacimento      as nascimento,
    e.ds_estado         as estado,
    e.ds_cidade         as cidade,
    e.ds_bairro         as bairro,
    e.ds_rua            as rua,
    e.ds_numero         as numero,
    e.ds_cep            as cep
    FROM tb_cliente c
INNER JOIN tb_endereco e ON c.id_endereco = e.id_endereco
   `

   const[resposta]= await con.query(comando)
   return resposta
}


export async function listarNome(nome) {
    let comando =
        `
    SELECT
    c.id_endereco       as endereco,
    c.id_cartao         as cartao,
    c.nm_cliente        as cliente,
    c.ds_email          as email,
    c.ds_telefone       as telefone,
    c.ds_senha          as senha,
    c.ds_cpf            as cpf,
    c.ds_nacimento      as nascimento,
    e.ds_estado         as estado,
    e.ds_cidade         as cidade,
    e.ds_bairro         as bairro,
    e.ds_rua            as rua,
    e.ds_numero         as numero,
    e.ds_cep            as cep
    FROM tb_cliente c
INNER JOIN tb_endereco e ON c.id_endereco = e.id_endereco
WHERE nm_cliente like ?
   `

   const[resposta]= await con.query(comando, [`%${nome}%`])
   return resposta
}


export async function editarInfoClient(newInfos, id) {

    let comando =
        `
    UPDATE tb_cliente c
        INNER JOIN tb_endereco e ON c.id_endereco = e.id_endereco
        SET
            c.id_cartao = null,
            c.nm_cliente = ?,
            c.ds_email = ?,
            c.ds_telefone = ?,
            c.ds_senha = ?,
            c.ds_cpf = ?,
            c.ds_nacimento = ?,
            e.ds_estado = ?,
            e.ds_cidade = ?,
            e.ds_bairro = ?,
            e.ds_rua = ?,
            e.ds_numero = ?,
            e.ds_cep = ?
        WHERE c.id_cliente = ?;
    `

    const [resposta] = await con.query(comando, [newInfos.nome, newInfos.email, newInfos.telefone, newInfos.senha, newInfos.cpf, newInfos.nascimento, newInfos.estado, newInfos.cidade, newInfos.bairro, newInfos.rua, newInfos.numero, newInfos.cep, id])

    return resposta
    console.log(resposta)
}

export function validarDados(dados) {
    for (const campo in dados) {
        if (!dados[campo]) {
            throw new Error(`Campo "${campo}" está vazio.`);
        }

        if (campo === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dados[campo])) {
            throw new Error('E-mail possui um formato inválido.');
        }

        if (campo === 'cpf' && !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(dados[campo])) {
            throw new Error('CPF possui um formato inválido.');
        }
    }
}