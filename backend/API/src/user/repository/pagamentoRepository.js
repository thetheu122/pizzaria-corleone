import { con } from "../../conection.js";

export async function inserirCartao(dados) {

    let comando =
        `
    INSERT INTO tb_cartao (ds_numero, ds_nome, ds_validade, ds_cvv)
		           VALUES (?, ?, ?, ?);
    `

    let cartao = await con.query(comando, [
        dados.num,
        dados.nome,
        dados.validade,
        dados.cvv])

    dados.id = cartao.insertId

    return dados
}

export function validarDadosCartao(dados) {
    for (const campo in dados) {
        if (!dados[campo]) {
            throw new Error(`Campo "${campo}" está vazio.`);
        }
    }
}