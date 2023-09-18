import { Router } from "express";
const server = Router();

import { cadastrarEndereco } from "../repository/enderecoRepository.js";



server.post('/endereco/cadastro', async (req, resp) => {
    let resposta = req.body

    {/*if (!resposta) {
        throw new Error("Os dados do cadastro do endereço está faltando");
    }

    const camposObrigatorios = [
        "endereco",
        "cartao",
        "cliente",
        "email",
        "telefone",
        "senha",
        "cpf",
        "nascimento"
    ];

    const camposFaltando = [];

    camposObrigatorios.forEach((campo) => {
        if (!(campo in resposta) || !resposta[campo]) {
            camposFaltando.push(campo);
        }
    });

    if (camposFaltando.length > 0) {
        const mensagemErro = `Campos obrigatórios faltando: ${camposFaltando.join(", ")}`;
        throw new Error(mensagemErro);
    }*/}
    let respe = await cadastrarEndereco(resposta)
    resp.send(respe)
})





export default server;