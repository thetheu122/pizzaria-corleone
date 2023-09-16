import { Router } from "express";
const server = Router();

import { cadastrarEndereco } from "../repository/enderecoRepository.js";



server.post('/endereco/cadastro', async (req, resp) => {
    let resposta = req.body
    let respe = await cadastrarEndereco(resposta)
    resp.send(respe)
})





export default server;