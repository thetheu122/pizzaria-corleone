import { Router } from "express";
import { Listarpedido, listarPorNome } from "../repository/pedido.js";




const endpoints = Router()


endpoints.get('/pedido', async (req, resp) => {
    try {
        const resposta = await Listarpedido()

        resp.send(resposta)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



endpoints.get('/pedido/nome/:nome', async (req, resp) => {
    try {
        const {nome} = req.params
        const r = await listarPorNome(nome)
        resp.send(r)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default endpoints