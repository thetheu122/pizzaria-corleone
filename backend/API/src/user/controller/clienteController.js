import { Router } from "express";
import { con } from "../repository/conection";
import { Login, inserirCliente } from "../repository/clienteRepository.js";

const server = Router()

server.post('/cliente/cadastro', async (req, resp) => {
    let resposta = req.body;
    let resp = inserirCliente(resposta)
    return resposta
})

server.get('/cliente/login', async (req, resp) => {
    let resposta = req.body
    let resp = Login(resposta)
    return(resp) 
})








export default { server };