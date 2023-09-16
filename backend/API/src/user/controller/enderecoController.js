import { Router } from "express";
const server = Router();


server.post('/endereco/cadastro', async (req, resp) => {
    let resposta = req.body
    let respe = cadastroEndereco(resposta)
    return respe
})





export default server;