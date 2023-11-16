import { Router } from "express";
import { Listarpedido, Novopedido, atualizarStatusParte1, atualizarStatusParte2, atualizarStatusParte3, listarDetalhesPorId, listarPelaData, listarPorId, listarPorNome, listarPorOrdemAlfabetica, listarPorStatusCancelado, listarPorStatusEntregue, listarRastreamento } from "../repository/pedido.js";




const endpoints = Router()


endpoints.post('/pedido', async (req, resp) => {
    try {
        const pedido = req.body;

        const resposta = await Novopedido(pedido)
        resp.send(resposta)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


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




endpoints.get('/pedido/detalhes/id/:id', async (req, resp) => {
    try {
        const {id} = req.params
        const w = await listarDetalhesPorId(id)
        resp.send(w)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})




////////////////////////// rastreamento pedido



endpoints.get('/pedido/rastreamento', async (req, resp) => {
    try {
        const w = await listarRastreamento();

        resp.send(w)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.put('/pedido/rastreamento/empreparo/:id', async (req,resp) => {
    try {
        const {id} = req.params
        const w = await atualizarStatusParte1(id)

        if(w === 0) {
            resp.status(400).send({err: "status do pedido não foi alterado"})
        } else {
            resp.status(200).send({message: "status do pedido alterado"})
        }
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put('/pedido/rastreamento/saiuparaentrega/:id', async (req,resp) => {
    try {
        const {id} = req.params
        const w = await atualizarStatusParte2(id)

        if(w === 0) {
            resp.status(400).send({err: "status do pedido não foi alterado"})
        } else {
            resp.status(200).send({message: "status do pedido alterado"})
        }
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.put('/pedido/rastreamento/entregue/:id', async (req,resp) => {
    try {
        const {id} = req.params
        const w = await atualizarStatusParte3(id)

        if(w === 0) {
            resp.status(400).send({err: "status do pedido não foi alterado"})
        } else {
            resp.status(200).send({message: "status do pedido alterado"})
        }
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})




export default endpoints