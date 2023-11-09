import { Router } from "express";
import { Listarpedido } from "../repository/pedido.js";




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

export default endpoints