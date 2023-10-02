import { Router } from "express";
const server = Router();

import { cadastrarEndereco } from "../repository/enderecoRepository.js";



server.post('/endereco/cadastro', async (req, resp) => {
    let resposta = req.body

    if (!resposta) {
        throw new Error("Os dados do cadastro do endereço está faltando");
    }

    const camposObrigatorios = [
        "estado",
        "cidade",
        "bairro",
        "rua",
        "numero",
        "cep"
    ];

    const camposFaltando = [];

    camposObrigatorios.forEach((campo) => {
        if (!(campo in resposta) || !resposta[campo]) {
            camposFaltando.push(campo);
        }
    });

    if (camposFaltando.length > 0) {
        const mensagemErro = `Campos obrigatórios faltando: ${camposFaltando.join(", ")}`;
        resp.send(mensagemErro);
    }
    else{
    let respe = await cadastrarEndereco(resposta)
    resp.send(respe)
}
})





export default server;