import { Router } from "express";
import { Listarpedido, listarPelaData, listarPorId, listarPorNome, listarPorOrdemAlfabetica, listarPorStatusCancelado, listarPorStatusEntregue } from "../repository/pedido.js";




const endpoints = Router()


endpoints.get('/pedido', async (req, resp) => {
    try {
        const w = await Listarpedido()

        resp.send(w)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



endpoints.get('/pedido/nome/:nome', async (req, resp) => {
    try {
        const {nome} = req.params
        const w = await listarPorNome(nome)
        resp.send(w)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



endpoints.get('/pedido/id/:id', async (req, resp) => {
    try {
        const {id} = req.params
        const w = await listarPorId(id)
        resp.send(w)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



endpoints.get('/pedido/ordem', async (req, resp) => {
    try {
        const w = await listarPorOrdemAlfabetica()
        resp.send(w)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.get('/pedido/data/:data', async (req, resp) => {
    try {
        const {data} = req.params
        const w = await listarPelaData(data)
        resp.send(w)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.get('/pedido/status/entregue', async (req, resp) => {
    try {
        const w = await listarPorStatusEntregue()
        resp.send(w)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.get('/pedido/status/cancelado', async (req, resp) => {
    try {
        const w = await listarPorStatusCancelado()
        resp.send(w)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default endpoints