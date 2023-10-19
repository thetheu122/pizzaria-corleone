import { Router } from "express";
import { inserirCartao, validarDadosCartao } from "../repository/pagamentoRepository.js";

const endpoints = Router()

endpoints.post('/cartao/inserir', async (req, resp) => {
    try {
        let dados = req.body
        let { id } = req.query

        validarDadosCartao(dados)

        let response = await inserirCartao(dados)

        resp.status(200).send(response)
    } catch (error) {
        resp.status(400).send(error)
    }

})





export default endpoints