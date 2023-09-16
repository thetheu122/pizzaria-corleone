import { Router } from "express";
import { con } from "../repository/conection";
import { Login, inserirCliente } from "../repository/clienteRepository.js";

const server = Router()

server.post('/cliente/cadastro', async (req, resp) => {
    try {
        let email = req.query.email;
        let senha = req.query.senha;
        let respo = inserirCliente(resposta)
        resp.status(200).send(respo)
    } catch (err) {
        resp.status(404).send(err.message)
    }

})

server.get('/cliente/login', async (req, resp) => {
    try {
        let resposta = req.body
        let respo = Login(resposta)
        resp.status(200).send(respo)
    } catch (err) {
        resp.status(404).send(err.message)
    }
});





